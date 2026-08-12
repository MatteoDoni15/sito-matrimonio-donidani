/**
 * Script per Google Apps Script: espone in JSON l'elenco delle foto caricate
 * nella cartella Google Drive del matrimonio, cosi' la pagina "Guarda le foto"
 * (gallery.html) del sito puo' mostrarle in una galleria scorrevole.
 *
 * Script pentru Google Apps Script: expune in format JSON lista pozelor
 * incarcate in folderul Google Drive al nuntii, ca pagina "Vezi pozele"
 * (gallery.html) a site-ului sa le poata afisa intr-o galerie.
 *
 * COME USARLO (vedi anche le istruzioni passo-passo che ti ho mandato in chat):
 * 1. Vai su https://script.google.com con l'account Google che ha accesso
 *    alla cartella foto, e crea un nuovo progetto.
 * 2. Cancella il codice di esempio e incolla tutto questo file.
 * 3. FOLDER_ID qui sotto e' gia' impostato sulla cartella foto del sito;
 *    cambialo solo se usi una cartella diversa.
 * 4. Salva, poi Esegui/Deploy > Nuova implementazione > tipo "Web app".
 *    - Esegui come: Me
 *    - Chi ha accesso: Chiunque
 * 5. Autorizza l'accesso quando richiesto, poi copia l'URL che termina in /exec.
 * 6. Incolla quell'URL in GALLERY_CONFIG.webAppUrl dentro gallery.js.
 *
 * CUM SE FOLOSESTE:
 * 1. Mergi pe https://script.google.com cu contul Google care are acces la
 *    folderul cu poze si creeaza un proiect nou.
 * 2. Sterge codul de exemplu si lipeste tot acest fisier.
 * 3. FOLDER_ID de mai jos este deja setat pe folderul de poze al site-ului;
 *    schimba-l doar daca folosesti un alt folder.
 * 4. Salveaza, apoi Executa/Deploy > Implementare noua > tip "Aplicatie web".
 *    - Executa ca: Eu
 *    - Cine are acces: Oricine
 * 5. Autorizeaza accesul cand ti se cere, apoi copiaza URL-ul care se termina in /exec.
 * 6. Lipeste acel URL in GALLERY_CONFIG.webAppUrl din gallery.js.
 */

const FOLDER_ID = "1cR65lmjh40W0C15fIjdQH6EtWqdyn_o_";
const MAX_PHOTOS = 500;

function doGet(e) {
  const callback = e && e.parameter && e.parameter.callback;
  const json = JSON.stringify({ ok: true, photos: listPhotos() });

  if (callback) {
    return ContentService
      .createTextOutput(callback + "(" + json + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
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
