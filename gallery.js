/* =========================================================================
   CONFIGURAZIONE GALLERIA / CONFIGURAREA GALERIEI
   Incolla qui sotto l'URL dell'Apps Script (vedi apps-script-gallery.gs).
   Lipeste mai jos URL-ul Apps Script (vezi apps-script-gallery.gs).
   ========================================================================= */
const GALLERY_CONFIG = {
  webAppUrl: "",
  refreshMs: 25000
};

const GALLERY_I18N = {
  it: {
    pageTitle: "Le foto del matrimonio — Matteo &  Daniela",
    backLink: "← Torna al sito",
    eyebrow: "In tempo reale",
    title: "Le foto della festa",
    subtitle: "Le foto caricate dagli invitati durante la giornata, tutte in un unico posto: tocca una foto per ingrandirla e scorri tra le altre.",
    refresh: "Aggiorna",
    loading: "Carichiamo le foto...",
    empty: "Non ci sono ancora foto. Scansiona il QR code nella pagina principale per caricarne una!",
    errorTitle: "Non riusciamo a caricare le foto",
    errorText: "Riprova tra un momento, oppure torna alla pagina principale per caricare le tue foto.",
    backCta: "Torna al sito",
    count: (n) => n === 1 ? "1 foto" : n + " foto",
    close: "Chiudi",
    prev: "Foto precedente",
    next: "Foto successiva",
    of: (i, n) => i + " di " + n
  },
  ro: {
    pageTitle: "Pozele de la nuntă — Matteo &  Daniela",
    backLink: "← Înapoi la site",
    eyebrow: "În timp real",
    title: "Pozele de la petrecere",
    subtitle: "Pozele încărcate de invitați în timpul zilei, toate într-un singur loc: atinge o poză pentru a o mări și derulează printre celelalte.",
    refresh: "Reîmprospătează",
    loading: "Se încarcă pozele...",
    empty: "Nu sunt încă poze. Scanează codul QR de pe pagina principală pentru a încărca una!",
    errorTitle: "Nu putem încărca pozele",
    errorText: "Încearcă din nou peste puțin timp, sau întoarce-te pe pagina principală pentru a-ți încărca pozele.",
    backCta: "Înapoi la site",
    count: (n) => n === 1 ? "1 poză" : n + " poze",
    close: "Închide",
    prev: "Fotografia anterioară",
    next: "Fotografia următoare",
    of: (i, n) => i + " din " + n
  }
};

let currentLang = "it";
let photos = [];
let lightboxIndex = -1;
let lightboxOpen = false;
let pendingPhotos = null;

function detectInitialLang() {
  const saved = localStorage.getItem("wedding-lang");
  if (saved === "it" || saved === "ro") return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("ro") ? "ro" : "it";
}

function thumbUrl(id) { return "https://lh3.googleusercontent.com/d/" + id + "=w500-h500-c"; }
function fullUrl(id) { return "https://lh3.googleusercontent.com/d/" + id + "=w1600"; }

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("wedding-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  const t = GALLERY_I18N[lang];

  document.title = t.pageTitle;
  document.getElementById("galleryBackLink").textContent = t.backLink;
  document.getElementById("galleryEyebrow").textContent = t.eyebrow;
  document.getElementById("galleryTitle").textContent = t.title;
  document.getElementById("gallerySubtitle").textContent = t.subtitle;
  document.getElementById("galleryRefresh").textContent = t.refresh;
  document.getElementById("lightboxClose").setAttribute("aria-label", t.close);
  document.getElementById("lightboxPrev").setAttribute("aria-label", t.prev);
  document.getElementById("lightboxNext").setAttribute("aria-label", t.next);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-lang-btn") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  renderCount();
  if (lightboxOpen) renderLightbox();
}

function renderCount() {
  const el = document.getElementById("galleryCount");
  if (!photos.length) { el.hidden = true; return; }
  el.hidden = false;
  el.textContent = GALLERY_I18N[currentLang].count(photos.length);
}

function showState(kind, html) {
  const state = document.getElementById("galleryState");
  const grid = document.getElementById("galleryGrid");
  if (!kind) { state.hidden = true; grid.hidden = false; return; }
  grid.hidden = true;
  state.hidden = false;
  state.className = "gallery-state gallery-state--" + kind;
  state.innerHTML = html;
}

function renderGrid() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";
  photos.forEach((photo, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gallery-grid__item";
    btn.addEventListener("click", () => openLightbox(i));

    const img = document.createElement("img");
    img.src = thumbUrl(photo.id);
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = "";
    img.onerror = () => { btn.style.display = "none"; };

    btn.appendChild(img);
    grid.appendChild(btn);
  });
  showState(null);
  renderCount();
}

function openLightbox(index) {
  lightboxIndex = index;
  lightboxOpen = true;
  document.getElementById("galleryLightbox").hidden = false;
  document.body.style.overflow = "hidden";
  renderLightbox();
}

function closeLightbox() {
  lightboxOpen = false;
  document.getElementById("galleryLightbox").hidden = true;
  document.body.style.overflow = "";
  if (pendingPhotos) { photos = pendingPhotos; pendingPhotos = null; renderGrid(); }
}

function renderLightbox() {
  const photo = photos[lightboxIndex];
  if (!photo) { closeLightbox(); return; }
  document.getElementById("lightboxImg").src = fullUrl(photo.id);
  document.getElementById("lightboxCount").textContent = GALLERY_I18N[currentLang].of(lightboxIndex + 1, photos.length);
}

function stepLightbox(delta) {
  if (!photos.length) return;
  lightboxIndex = (lightboxIndex + delta + photos.length) % photos.length;
  renderLightbox();
}

function initLightboxControls() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));

  const lightbox = document.getElementById("galleryLightbox");
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", (e) => {
    if (!lightboxOpen) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  let touchStartX = null;
  lightbox.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) stepLightbox(dx < 0 ? 1 : -1);
    touchStartX = null;
  });
}

function fetchPhotosJSONP(url) {
  return new Promise((resolve, reject) => {
    const callbackName = "__galleryCb" + Math.floor(Math.random() * 1e9);
    const script = document.createElement("script");
    let timeoutId;

    function cleanup() {
      clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (data) => { cleanup(); resolve(data); };
    script.onerror = () => { cleanup(); reject(new Error("network")); };
    timeoutId = setTimeout(() => { cleanup(); reject(new Error("timeout")); }, 15000);

    const sep = url.indexOf("?") === -1 ? "?" : "&";
    script.src = url + sep + "callback=" + callbackName;
    document.body.appendChild(script);
  });
}

async function loadPhotos(isRefresh) {
  const t = GALLERY_I18N[currentLang];

  if (!GALLERY_CONFIG.webAppUrl) {
    showState("error", "<strong>" + t.errorTitle + "</strong><p>" + t.errorText + "</p>" +
      '<a class="btn btn--secondary" href="index.html">' + t.backCta + "</a>");
    return;
  }

  if (!isRefresh) showState("loading", '<div class="gallery-spinner" aria-hidden="true"></div><p>' + t.loading + "</p>");

  try {
    const data = await fetchPhotosJSONP(GALLERY_CONFIG.webAppUrl);
    const newPhotos = (data && data.photos) || [];

    if (!newPhotos.length) {
      photos = [];
      showState("empty", "<p>" + t.empty + "</p>");
      return;
    }

    if (lightboxOpen) {
      pendingPhotos = newPhotos;
    } else {
      photos = newPhotos;
      renderGrid();
    }
  } catch (err) {
    if (!isRefresh) {
      showState("error", "<strong>" + t.errorTitle + "</strong><p>" + t.errorText + "</p>" +
        '<a class="btn btn--secondary" href="index.html">' + t.backCta + "</a>");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(detectInitialLang());
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang-btn")));
  });

  initLightboxControls();
  document.getElementById("galleryRefresh").addEventListener("click", () => loadPhotos(false));

  loadPhotos(false);
  setInterval(() => loadPhotos(true), GALLERY_CONFIG.refreshMs);
});
