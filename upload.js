/* =========================================================================
   CARICAMENTO FOTO / ÎNCĂRCAREA POZELOR
   Le foto vengono ridimensionate nel browser e inviate all'Apps Script
   (photos-config.js), che le salva nella cartella Drive del matrimonio.
   ========================================================================= */
const UPLOAD_OPTIONS = {
  maxSide: 2560,
  jpegQuality: 0.85,
  // Limite per i file che il browser non riesce a ridimensionare (es. HEIC su Android/PC).
  maxOriginalBytes: 15 * 1024 * 1024
};

const UPLOAD_I18N = {
  it: {
    pageTitle: "Carica le tue foto — Matteo & Daniela",
    backLink: "← Torna al sito",
    eyebrow: "Condividi i tuoi scatti",
    title: "Carica le tue foto",
    subtitle: "Scegli le foto dal telefono o scattane una nuova: finiranno nell'album della festa, visibile a tutti gli invitati.",
    nameLabel: "Il tuo nome (facoltativo)",
    pick: "Scegli le foto",
    pickMore: "Carica altre foto",
    gallery: "Guarda le foto",
    preparing: (i, n) => "Preparo la foto " + i + " di " + n + "...",
    sending: (i, n) => "Invio la foto " + i + " di " + n + "...",
    done: (n) => n === 1 ? "Grazie! La tua foto è stata caricata." : "Grazie! Sono state caricate " + n + " foto.",
    partial: (ok, ko) => ok + " foto caricate, " + ko + " non sono riuscite: controlla la connessione e riprova con quelle mancanti.",
    failed: "Non siamo riusciti a caricare le foto. Controlla la connessione e riprova.",
    notReady: "Il caricamento delle foto non è ancora attivo: riprova il giorno della festa!",
    leaveWarning: "Il caricamento è ancora in corso."
  },
  ro: {
    pageTitle: "Încarcă pozele tale — Matteo & Daniela",
    backLink: "← Înapoi la site",
    eyebrow: "Distribuie pozele tale",
    title: "Încarcă pozele tale",
    subtitle: "Alege pozele din telefon sau fă una nouă: vor ajunge în albumul petrecerii, vizibil pentru toți invitații.",
    nameLabel: "Numele tău (opțional)",
    pick: "Alege pozele",
    pickMore: "Încarcă alte poze",
    gallery: "Vezi pozele",
    preparing: (i, n) => "Pregătesc poza " + i + " din " + n + "...",
    sending: (i, n) => "Trimit poza " + i + " din " + n + "...",
    done: (n) => n === 1 ? "Mulțumim! Poza ta a fost încărcată." : "Mulțumim! Au fost încărcate " + n + " poze.",
    partial: (ok, ko) => ok + " poze încărcate, " + ko + " nu au reușit: verifică conexiunea și încearcă din nou cu cele lipsă.",
    failed: "Nu am reușit să încărcăm pozele. Verifică conexiunea și încearcă din nou.",
    notReady: "Încărcarea pozelor nu este încă activă: încearcă din nou în ziua petrecerii!",
    leaveWarning: "Încărcarea este încă în desfășurare."
  }
};

let currentLang = "it";
let uploading = false;
let uploadedOnce = false;

function detectInitialLang() {
  const saved = localStorage.getItem("wedding-lang");
  if (saved === "it" || saved === "ro") return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("ro") ? "ro" : "it";
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("wedding-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  const t = UPLOAD_I18N[lang];

  document.title = t.pageTitle;
  document.getElementById("uploadBackLink").textContent = t.backLink;
  document.getElementById("uploadEyebrow").textContent = t.eyebrow;
  document.getElementById("uploadTitle").textContent = t.title;
  document.getElementById("uploadSubtitle").textContent = t.subtitle;
  document.getElementById("uploadNameLabel").textContent = t.nameLabel;
  document.getElementById("uploadPick").textContent = uploadedOnce ? t.pickMore : t.pick;
  document.getElementById("uploadGalleryLink").textContent = t.gallery;

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-lang-btn") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  if (!PHOTOS_CONFIG.webAppUrl) showStatus("info", t.notReady);
}

function showStatus(kind, text) {
  const el = document.getElementById("uploadStatus");
  if (!kind) { el.hidden = true; return; }
  el.hidden = false;
  el.className = "upload-status upload-status--" + kind;
  el.textContent = text;
}

function showProgress(done, total, text) {
  const wrap = document.getElementById("uploadProgress");
  if (total === 0) { wrap.hidden = true; return; }
  wrap.hidden = false;
  document.getElementById("uploadProgressFill").style.width = Math.round((done / total) * 100) + "%";
  document.getElementById("uploadProgressText").textContent = text;
}

/* Tipo del file: alcuni telefoni lasciano vuoto il MIME delle foto HEIC. */
function fileType(file) {
  if (file.type) return file.type.toLowerCase();
  const ext = (file.name.split(".").pop() || "").toLowerCase();
  return { heic: "image/heic", heif: "image/heif", jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp" }[ext] || "";
}

async function decodeImage(file) {
  if ("createImageBitmap" in window) {
    try { return await createImageBitmap(file, { imageOrientation: "from-image" }); } catch (e) { /* fallback sotto */ }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
}

/* Ridimensiona a JPEG; se il browser non sa leggere il formato invia l'originale. */
async function preparePhoto(file) {
  let source;
  try {
    source = await decodeImage(file);
  } catch (e) {
    if (file.size > UPLOAD_OPTIONS.maxOriginalBytes) throw new Error("too-big");
    return { blob: file, type: fileType(file) };
  }

  const w = source.width, h = source.height;
  const scale = Math.min(1, UPLOAD_OPTIONS.maxSide / Math.max(w, h));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(w * scale);
  canvas.height = Math.round(h * scale);
  canvas.getContext("2d").drawImage(source, 0, 0, canvas.width, canvas.height);
  if (source.close) source.close();

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", UPLOAD_OPTIONS.jpegQuality));
  if (!blob) throw new Error("encode");
  return { blob, type: "image/jpeg" };
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

async function sendPhoto(payload) {
  // text/plain evita la richiesta preflight CORS, che Apps Script non gestisce.
  const res = await fetch(PHOTOS_CONFIG.webAppUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || "server");
}

async function uploadFiles(files) {
  const t = UPLOAD_I18N[currentLang];
  const guest = document.getElementById("uploadName").value.trim();
  const pick = document.getElementById("uploadPick");
  let ok = 0, ko = 0;

  uploading = true;
  pick.disabled = true;
  showStatus(null);

  for (let i = 0; i < files.length; i++) {
    const n = i + 1;
    try {
      showProgress(i, files.length, t.preparing(n, files.length));
      const photo = await preparePhoto(files[i]);
      const data = await blobToBase64(photo.blob);

      showProgress(i + 0.5, files.length, t.sending(n, files.length));
      const payload = { type: photo.type, data, guest };
      try {
        await sendPhoto(payload);
      } catch (e) {
        await sendPhoto(payload); // un secondo tentativo per le connessioni ballerine
      }
      ok++;
    } catch (e) {
      ko++;
    }
  }

  uploading = false;
  pick.disabled = false;
  showProgress(0, 0);

  if (ok) {
    uploadedOnce = true;
    pick.textContent = t.pickMore;
  }
  if (!ko) showStatus("success", t.done(ok));
  else if (ok) showStatus("error", t.partial(ok, ko));
  else showStatus("error", t.failed);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(detectInitialLang());
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang-btn")));
  });

  const nameInput = document.getElementById("uploadName");
  nameInput.value = localStorage.getItem("wedding-guest-name") || "";
  nameInput.addEventListener("change", () => localStorage.setItem("wedding-guest-name", nameInput.value.trim()));

  const input = document.getElementById("uploadInput");
  const pick = document.getElementById("uploadPick");
  if (!PHOTOS_CONFIG.webAppUrl) pick.disabled = true;

  pick.addEventListener("click", () => input.click());
  input.addEventListener("change", () => {
    const files = Array.from(input.files || []);
    input.value = "";
    if (files.length) uploadFiles(files);
  });

  window.addEventListener("beforeunload", (e) => {
    if (!uploading) return;
    e.preventDefault();
    e.returnValue = UPLOAD_I18N[currentLang].leaveWarning;
  });
});
