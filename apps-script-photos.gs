/**
 * Script per Google Apps Script: gestisce le foto del matrimonio.
 *  - doGet  -> elenco in JSON delle foto nella cartella Drive (pagina gallery.html)
 *  - doPost -> riceve una foto dalla pagina upload.html e la salva nella cartella
 *
 * Gli invitati NON accedono al tuo Drive: lo script gira col tuo account ma fa
 * solo queste due cose, e solo su FOLDER_ID. La cartella NON va condivisa in
 * modifica con nessuno: ogni foto caricata viene resa visibile "a chi ha il link"
 * (solo quella foto), cosi' la galleria puo' mostrarla.
 *
 * Script pentru Google Apps Script: gestioneaza pozele de la nunta.
 *  - doGet  -> lista JSON a pozelor din folderul Drive (pagina gallery.html)
 *  - doPost -> primeste o poza de la pagina upload.html si o salveaza in folder
 *
 * COME USARLO:
 * 1. Vai su https://script.google.com con l'account Google proprietario della
 *    cartella foto e crea un nuovo progetto (o apri quello della galleria).
 * 2. Cancella il codice presente e incolla tutto questo file.
 * 3. Imposta FOLDER_ID qui sotto con l'ID della cartella (la parte finale
 *    dell'URL della cartella, dopo /folders/).
 * 4. Salva, poi Esegui il deploy > Nuovo deployment > tipo "App web".
 *    - Esegui come: Me
 *    - Chi ha accesso: Chiunque
 * 5. Autorizza l'accesso quando richiesto, poi copia l'URL che termina in /exec.
 * 6. Incolla quell'URL in PHOTOS_CONFIG.webAppUrl dentro photos-config.js.
 * Se modifichi lo script in futuro: Gestisci deployment > modifica > Nuova versione
 * (cosi' l'URL /exec resta lo stesso).
 *
 * CUM SE FOLOSESTE:
 * 1. Mergi pe https://script.google.com cu contul Google proprietar al
 *    folderului cu poze si creeaza un proiect nou.
 * 2. Sterge codul existent si lipeste tot acest fisier.
 * 3. Seteaza FOLDER_ID de mai jos cu ID-ul folderului.
 * 4. Salveaza, apoi Implementare > Implementare noua > tip "Aplicatie web".
 *    - Executa ca: Eu
 *    - Cine are acces: Oricine
 * 5. Autorizeaza accesul, apoi copiaza URL-ul care se termina in /exec.
 * 6. Lipeste acel URL in PHOTOS_CONFIG.webAppUrl din photos-config.js.
 */

const FOLDER_ID = "1XKcMr34akD5fybhUxBTVfCVsLBuhVzWL";
const MAX_PHOTOS = 3000;
const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif", "image/gif"];

function doGet(e) {
  const callback = e && e.parameter && e.parameter.callback;
  const json = JSON.stringify({ ok: true, photos: listPhotos() });

  // Il nome della callback JSONP arriva dall'esterno: accetta solo identificatori validi.
  if (callback && /^[A-Za-z_$][\w$]*$/.test(callback)) {
    return ContentService
      .createTextOutput(callback + "(" + json + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const type = String(body.type || "").toLowerCase();
    if (ALLOWED_TYPES.indexOf(type) === -1) return jsonOut({ ok: false, error: "type" });

    const bytes = Utilities.base64Decode(String(body.data || ""));
    if (!bytes.length || bytes.length > MAX_UPLOAD_BYTES) return jsonOut({ ok: false, error: "size" });

    // Ogni foto arriva con un codice univoco: se il telefono non riceve la risposta
    // e rimanda la stessa foto, non la salviamo una seconda volta.
    const uploadId = String(body.uploadId || "").replace(/[^\w-]/g, "").slice(0, 64);
    const cache = CacheService.getScriptCache();
    const cacheKey = "upload_" + uploadId;
    if (uploadId) {
      let seen = cache.get(cacheKey);
      // Il primo invio e' ancora in corso: aspettiamo che finisca.
      for (let i = 0; seen === "pending" && i < 20; i++) {
        Utilities.sleep(1000);
        seen = cache.get(cacheKey);
      }
      if (seen === "pending") return jsonOut({ ok: false, error: "busy" });
      if (seen) return jsonOut({ ok: true, id: seen, duplicate: true });
      cache.put(cacheKey, "pending", 600);
    }

    const guest = cleanText(body.guest, 40);
    const ext = type.split("/")[1].replace("jpeg", "jpg");
    const stamp = Utilities.formatDate(new Date(), "Europe/Rome", "yyyyMMdd-HHmmss");
    const name = stamp + (guest ? "-" + guest.replace(/\s+/g, "_") : "") + "-" +
      Math.floor(Math.random() * 1e6) + "." + ext;

    let file;
    try {
      file = DriveApp.getFolderById(FOLDER_ID).createFile(Utilities.newBlob(bytes, type, name));
    } catch (err) {
      if (uploadId) cache.remove(cacheKey);
      throw err;
    }
    // Segnata come salvata subito dopo la creazione: un errore nei passi successivi
    // non deve portare il telefono a creare un doppione.
    if (uploadId) cache.put(cacheKey, file.getId(), 21600);

    if (guest) file.setDescription("Caricata da / Încărcată de: " + guest);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return jsonOut({ ok: true, id: file.getId() });
  } catch (err) {
    return jsonOut({ ok: false, error: "server" });
  }
}

function listPhotos() {
  const folder = DriveApp.getFolderById(FOLDER_ID);
  const files = folder.getFiles();
  const photos = [];

  while (files.hasNext()) {
    const file = files.next();
    if (file.getMimeType().indexOf("image/") !== 0) continue;
    photos.push({
      id: file.getId(),
      name: file.getName(),
      date: file.getDateCreated().toISOString()
    });
  }

  photos.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
  return photos.slice(0, MAX_PHOTOS);
}

function cleanText(value, maxLen) {
  return String(value || "")
    .replace(/[^\p{L}\p{N} .'-]/gu, "")
    .trim()
    .slice(0, maxLen);
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
