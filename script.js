/* =========================================================================
   CONFIGURAZIONE DEL MATRIMONIO / CONFIGURAREA NUNȚII
   Modifica solo i valori qui sotto prima di pubblicare il sito.
   Modifică doar valorile de mai jos înainte de a publica site-ul.
   ========================================================================= */
const CONFIG = {
  // Data e ora del matrimonio (formato ISO, 24h) / Data și ora nunții (format ISO, 24h)
  weddingDateISO: "2026-11-07T16:00:00",

  // Entro quando rispondere / Termen limită pentru răspuns
  rsvpDeadlineISO: "2026-10-10T23:59:00",

  // Indirizzo email che ricevera le conferme RSVP / Adresa de email care va primi confirmările RSVP
  // IMPORTANTE: la prima volta che qualcuno invia il modulo, FormSubmit ti manda
  // un'email di conferma: devi cliccare il link dentro per attivare l'invio.
  // IMPORTANT: prima dată când cineva trimite formularul, FormSubmit îți va trimite
  // un email de confirmare: trebuie să apeși linkul din el ca să activezi trimiterea.
  contactEmail: "teoxdoni@gmail.com",

  // URL del Google Apps Script "Web app" per salvare ogni RSVP anche in un Google Sheet.
  // Lascia vuoto ("") per disattivare: il sito funziona lo stesso, solo via email.
  // URL-ul aplicației web Google Apps Script pentru a salva fiecare RSVP și într-un Google Sheet.
  // Lasă gol ("") ca să dezactivezi: site-ul funcționează la fel, doar prin email.
  googleSheetWebAppUrl: "https://script.google.com/macros/s/AKfycbxVejKK7wrmSr6dNof8jTR5hAsrS4EQdXi-_WzdkWXQ-u9jo1y2ItgAnJo-BfA1Md5T/exec",

  // Cartella Google Drive dove gli invitati caricano le foto del matrimonio.
  // Folderul Google Drive unde invitații încarcă pozele de la nuntă.
  photosDriveUrl: "https://drive.google.com/drive/folders/1cR65lmjh40W0C15fIjdQH6EtWqdyn_o_?usp=drive_link",

  // Luoghi (placeholder da modificare) / Locații (valori temporare de modificat)
  ceremony: {
    it: { venue: "Chiesa di [Nome Parrocchia]", address: "[Indirizzo], [Città]" },
    ro: { venue: "Biserica [Numele parohiei]", address: "[Adresa], [Orașul]" },
    time: "16:00"
  },
  reception: {
    it: { venue: "[Nome della location]", address: "[Indirizzo], [Città]" },
    ro: { venue: "[Numele locației]", address: "[Adresa], [Orașul]" },
    time: "19:00"
  }
};

/* =========================================================================
   TESTI / TEXTE — Italiano e Română
   ========================================================================= */
const I18N = {
  it: {
    pageTitle: "Matteo & Daniela — Il nostro matrimonio",
    navRsvp: "RSVP",
    heroEyebrow: "Ci sposiamo",
    heroSubtitle: "Con gioia nel cuore, vi invitiamo a festeggiare con noi l'inizio di una nuova vita insieme.",
    heroCta: "Conferma la tua presenza",
    heroScroll: "Scorri per i dettagli",

    storyEyebrow: "La nostra storia",
    storyTitle: "Un cammino, due cuori",
    storyText: "Ogni storia d'amore ha la sua stagione, e la nostra sboccia proprio in autunno: tra foglie dorate e luci calde, abbiamo scelto di dirci per sempre di sì. Non vediamo l'ora di condividere questo giorno con le persone che amiamo di più.",

    detailsEyebrow: "Il nostro giorno",
    detailsTitle: "Cerimonia e ricevimento",
    ceremonyLabel: "Cerimonia",
    receptionLabel: "Ricevimento",
    dressCodeLabel: "Dress code",
    dressCodeValue: "Elegante, nei toni caldi dell'autunno",
    detailsNote: "Vi terremo aggiornati con la mappa e tutti i dettagli via email.",

    countdownEyebrow: "Manca sempre meno",
    countdownTitle: "Il conto alla rovescia",
    days: "Giorni", hours: "Ore", minutes: "Minuti", seconds: "Secondi",
    countdownDone: "Oggi è il grande giorno! Non vediamo l'ora di festeggiare con voi.",

    sliderPrev: "Foto precedente",
    sliderNext: "Foto successiva",
    sliderGoTo: "Vai alla foto",

    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confermate la vostra presenza",
    rsvpIntro: "Per organizzare al meglio questo giorno speciale, vi chiediamo di rispondere entro il",
    labelFullName: "Nome e cognome",
    placeholderFullName: "Il tuo nome completo",
    labelAttending: "Sarai presente?",
    attendingYes: "Sì, con gioia!",
    attendingNo: "Purtroppo no",
    labelPlusOne: "Verrai con un accompagnatore (+1)?",
    yesShort: "Sì",
    noShort: "No",
    labelPlusOneName: "Nome dell'accompagnatore",
    placeholderPlusOneName: "Nome e cognome",
    labelChildren: "Verranno con te dei bambini?",
    labelChildrenCount: "Quanti bambini?",
    labelChildrenNames: "Nomi ed età (facoltativo)",
    placeholderChildrenNames: "Es. Sofia (5), Leo (8)",
    labelDietary: "Allergie o intolleranze alimentari",
    placeholderDietary: "Facci sapere se hai esigenze particolari",
    labelMessage: "Un messaggio per gli sposi",
    placeholderMessage: "Scrivi qui i tuoi auguri...",

    photosEyebrow: "Condividi i tuoi scatti",
    photosTitle: "Le foto della festa",
    photosText: "Scansiona il QR code o clicca qui sotto per caricare le foto che scatterai durante la giornata: le raccoglieremo tutte in un unico album.",
    photosCta: "Apri la cartella foto",
    photosQrAlt: "QR code per caricare le foto del matrimonio",

    submitButton: "Invia la conferma",
    submitting: "Invio in corso...",
    successTitle: "Grazie di cuore!",
    successText: "Abbiamo ricevuto la tua conferma. Non vediamo l'ora di festeggiare insieme a te!",
    fallbackTitle: "Invio non riuscito",
    fallbackText: "Non siamo riusciti a inviare il modulo automaticamente. Puoi scriverci direttamente cliccando qui sotto, oppure riprovare più tardi.",
    fallbackLink: "Invia via email",
    requiredError: "Per favore, compila il nome e indica se sarai presente.",

    contactEyebrow: "Domande?",
    contactText: "Scrivici quando vuoi, a:",
    footerThanks: "Con affetto,",
    footerHashtag: "#MatteoEAncaDaniela",

    dateLocale: "it-IT",
    weekdayMonthYear: { weekday: "long", day: "numeric", month: "long", year: "numeric" },
    deadlineFormat: { day: "numeric", month: "long", year: "numeric" }
  },
  ro: {
    pageTitle: "Matteo & Daniela — Nunta noastră",
    navRsvp: "RSVP",
    heroEyebrow: "Ne căsătorim",
    heroSubtitle: "Cu bucurie în suflet, vă invităm să sărbătoriți alături de noi începutul unei noi vieți împreună.",
    heroCta: "Confirmă-ți prezența",
    heroScroll: "Derulează pentru detalii",

    storyEyebrow: "Povestea noastră",
    storyTitle: "Un drum, două inimi",
    storyText: "Fiecare poveste de dragoste are anotimpul ei, iar a noastră înflorește tocmai toamna: printre frunze aurii și lumini calde, am ales să ne spunem pentru totdeauna da. Abia așteptăm să împărtășim această zi cu oamenii pe care îi iubim cel mai mult.",

    detailsEyebrow: "Ziua noastră",
    detailsTitle: "Cununie și petrecere",
    ceremonyLabel: "Cununie",
    receptionLabel: "Petrecere",
    dressCodeLabel: "Ținută recomandată",
    dressCodeValue: "Eleganță, în nuanțe calde de toamnă",
    detailsNote: "Vă vom trimite harta și toate detaliile pe email.",

    countdownEyebrow: "Numărătoarea inversă",
    countdownTitle: "Mai sunt doar...",
    days: "Zile", hours: "Ore", minutes: "Minute", seconds: "Secunde",
    countdownDone: "Astăzi este marea zi! Abia așteptăm să sărbătorim alături de voi.",

    sliderPrev: "Fotografia anterioară",
    sliderNext: "Fotografia următoare",
    sliderGoTo: "Mergi la fotografia",

    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confirmați-vă prezența",
    rsvpIntro: "Pentru a organiza cât mai bine această zi specială, vă rugăm să răspundeți până pe",
    labelFullName: "Nume și prenume",
    placeholderFullName: "Numele tău complet",
    labelAttending: "Vei fi prezent/ă?",
    attendingYes: "Da, cu mare drag!",
    attendingNo: "Din păcate, nu",
    labelPlusOne: "Vii însoțit/ă (+1)?",
    yesShort: "Da",
    noShort: "Nu",
    labelPlusOneName: "Numele însoțitorului / însoțitoarei",
    placeholderPlusOneName: "Nume și prenume",
    labelChildren: "Vin copii alături de tine?",
    labelChildrenCount: "Câți copii?",
    labelChildrenNames: "Nume și vârstă (opțional)",
    placeholderChildrenNames: "Ex. Sofia (5), Leo (8)",
    labelDietary: "Alergii sau restricții alimentare",
    placeholderDietary: "Spune-ne dacă ai nevoi speciale",
    labelMessage: "Un mesaj pentru miri",
    placeholderMessage: "Scrie aici gândurile tale bune...",

    photosEyebrow: "Distribuie pozele tale",
    photosTitle: "Pozele de la petrecere",
    photosText: "Scanează codul QR sau apasă mai jos pentru a încărca pozele făcute în ziua nunții: le vom aduna pe toate într-un singur album.",
    photosCta: "Deschide folderul cu poze",
    photosQrAlt: "Cod QR pentru încărcarea pozelor de la nuntă",

    submitButton: "Trimite confirmarea",
    submitting: "Se trimite...",
    successTitle: "Vă mulțumim din suflet!",
    successText: "Am primit confirmarea ta. Abia așteptăm să sărbătorim împreună!",
    fallbackTitle: "Trimiterea nu a reușit",
    fallbackText: "Nu am reușit să trimitem formularul automat. Ne poți scrie direct apăsând mai jos, sau poți încerca din nou mai târziu.",
    fallbackLink: "Trimite pe email",
    requiredError: "Te rugăm să completezi numele și să indici dacă vei fi prezent/ă.",

    contactEyebrow: "Întrebări?",
    contactText: "Scrie-ne oricând, la:",
    footerThanks: "Cu drag,",
    footerHashtag: "#MatteoSiAnca",

    dateLocale: "ro-RO",
    weekdayMonthYear: { weekday: "long", day: "numeric", month: "long", year: "numeric" },
    deadlineFormat: { day: "numeric", month: "long", year: "numeric" }
  }
};

const FORM_ENDPOINT = "https://formsubmit.co/ajax/" + CONFIG.contactEmail;

/* =========================================================================
   STATO / STATE
   ========================================================================= */
let currentLang = "it";

function detectInitialLang() {
  const saved = localStorage.getItem("wedding-lang");
  if (saved === "it" || saved === "ro") return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("ro") ? "ro" : "it";
}

function formatDate(iso, lang, opts) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat(I18N[lang].dateLocale, opts).format(d);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("wedding-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  const t = I18N[lang];
  document.title = t.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (t[key] !== undefined) el.setAttribute("alt", t[key]);
  });
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-btn") === lang ? "true" : "false");
  });

  document.getElementById("heroDate").textContent = capitalize(formatDate(CONFIG.weddingDateISO, lang, t.weekdayMonthYear));
  document.getElementById("rsvpDeadline").textContent = formatDate(CONFIG.rsvpDeadlineISO, lang, t.deadlineFormat);

  const cer = CONFIG.ceremony[lang];
  const rec = CONFIG.reception[lang];
  document.getElementById("ceremonyVenue").textContent = cer.venue;
  document.getElementById("ceremonyAddress").textContent = cer.address;
  document.getElementById("ceremonyTime").textContent = CONFIG.ceremony.time;
  document.getElementById("receptionVenue").textContent = rec.venue;
  document.getElementById("receptionAddress").textContent = rec.address;
  document.getElementById("receptionTime").textContent = CONFIG.reception.time;

  document.getElementById("contactEmailLink").textContent = CONFIG.contactEmail;
  document.getElementById("contactEmailLink").setAttribute("href", "mailto:" + CONFIG.contactEmail);

  document.getElementById("photosLink").setAttribute("href", CONFIG.photosDriveUrl);

  updateAttendingUI();
  updatePlusOneUI();
  updateChildrenUI();
  updateSliderAria();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* =========================================================================
   COUNTDOWN
   ========================================================================= */
function tickCountdown() {
  const t = I18N[currentLang];
  const target = new Date(CONFIG.weddingDateISO).getTime();
  const now = Date.now();
  const diff = target - now;

  const els = {
    d: document.getElementById("cdDays"),
    h: document.getElementById("cdHours"),
    m: document.getElementById("cdMinutes"),
    s: document.getElementById("cdSeconds")
  };
  const doneEl = document.getElementById("countdownDone");
  const gridEl = document.getElementById("countdownGrid");

  if (diff <= 0) {
    gridEl.style.display = "none";
    doneEl.style.display = "block";
    doneEl.textContent = t.countdownDone;
    return;
  }
  gridEl.style.display = "grid";
  doneEl.style.display = "none";

  const sec = Math.floor(diff / 1000);
  els.d.textContent = String(Math.floor(sec / 86400));
  els.h.textContent = String(Math.floor((sec % 86400) / 3600)).padStart(2, "0");
  els.m.textContent = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  els.s.textContent = String(sec % 60).padStart(2, "0");
}

/* =========================================================================
   RSVP FORM LOGIC
   ========================================================================= */
function updateAttendingUI() {
  const attending = document.querySelector('input[name="attending"]:checked');
  const extra = document.getElementById("attendingExtraFields");
  if (!extra) return;
  extra.style.display = attending && attending.value === "si" ? "grid" : "none";
}

function updatePlusOneUI() {
  const plusOne = document.querySelector('input[name="plusOne"]:checked');
  const field = document.getElementById("plusOneNameField");
  if (!field) return;
  field.style.display = plusOne && plusOne.value === "si" ? "flex" : "none";
}

function updateChildrenUI() {
  const children = document.querySelector('input[name="children"]:checked');
  const field = document.getElementById("childrenDetailFields");
  if (!field) return;
  field.style.display = children && children.value === "si" ? "grid" : "none";
}

function buildMailtoFallback(formEl) {
  const t = I18N[currentLang];
  const data = new FormData(formEl);
  const lines = [];
  data.forEach((value, key) => {
    if (!value || key.startsWith("_")) return;
    lines.push(key + ": " + value);
  });
  const subject = encodeURIComponent("RSVP — " + (data.get("fullName") || ""));
  const body = encodeURIComponent(lines.join("\n"));
  return "mailto:" + CONFIG.contactEmail + "?subject=" + subject + "&body=" + body;
}

function initForm() {
  const form = document.getElementById("rsvpForm");
  const statusBox = document.getElementById("rsvpStatus");
  const submitBtn = document.getElementById("rsvpSubmit");

  document.querySelectorAll('input[name="attending"]').forEach((el) => el.addEventListener("change", updateAttendingUI));
  document.querySelectorAll('input[name="plusOne"]').forEach((el) => el.addEventListener("change", updatePlusOneUI));
  document.querySelectorAll('input[name="children"]').forEach((el) => el.addEventListener("change", updateChildrenUI));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const t = I18N[currentLang];
    const fullName = form.querySelector('[name="fullName"]').value.trim();
    const attending = form.querySelector('input[name="attending"]:checked');

    if (!fullName || !attending) {
      showStatus("error", t.requiredError);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t.submitting;

    const formData = new FormData(form);
    formData.set("_subject", "RSVP: " + fullName + " (" + (attending.value === "si" ? "presente" : "assente") + ")");
    formData.set("language", currentLang);

    if (CONFIG.googleSheetWebAppUrl) {
      // Fire-and-forget: registra la risposta anche su Google Sheet, in parallelo all'email.
      // no-cors perche' Apps Script non restituisce header CORS leggibili dal browser;
      // non ci serve leggere la risposta, solo che la richiesta parta.
      fetch(CONFIG.googleSheetWebAppUrl, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData)
      }).catch(() => { });
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });
      if (!res.ok) throw new Error("Bad response");
      showStatus("success", t.successText, t.successTitle);
      form.reset();
      updateAttendingUI();
      updatePlusOneUI();
      updateChildrenUI();
    } catch (err) {
      const mailto = buildMailtoFallback(form);
      showStatus("fallback", t.fallbackText, t.fallbackTitle, mailto, t.fallbackLink);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t.submitButton;
    }
  });

  function showStatus(kind, text, title, mailto, linkText) {
    statusBox.className = "rsvp-status rsvp-status--" + kind;
    statusBox.innerHTML = "";
    if (title) {
      const h = document.createElement("strong");
      h.textContent = title;
      statusBox.appendChild(h);
    }
    const p = document.createElement("p");
    p.textContent = text;
    statusBox.appendChild(p);
    if (mailto) {
      const a = document.createElement("a");
      a.href = mailto;
      a.textContent = linkText;
      a.className = "rsvp-status__link";
      statusBox.appendChild(a);
    }
    statusBox.hidden = false;
    statusBox.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

/* =========================================================================
   STORY PHOTO SLIDER
   ========================================================================= */
function updateSliderAria() {
  const root = document.getElementById("storySlider");
  const dotsWrap = document.getElementById("storySliderDots");
  if (!root) return;
  const t = I18N[currentLang];
  const prevBtn = root.querySelector(".story-slider__nav--prev");
  const nextBtn = root.querySelector(".story-slider__nav--next");
  if (prevBtn) prevBtn.setAttribute("aria-label", t.sliderPrev);
  if (nextBtn) nextBtn.setAttribute("aria-label", t.sliderNext);
  if (dotsWrap) {
    dotsWrap.querySelectorAll(".story-slider__dot").forEach((dot, i) => {
      dot.setAttribute("aria-label", t.sliderGoTo + " " + (i + 1));
    });
  }
}

function initStorySlider() {
  const root = document.getElementById("storySlider");
  const dotsWrap = document.getElementById("storySliderDots");
  if (!root) return;
  const slides = Array.from(root.querySelectorAll(".story-slider__img"));
  const prevBtn = root.querySelector(".story-slider__nav--prev");
  const nextBtn = root.querySelector(".story-slider__nav--next");
  if (!slides.length || !dotsWrap) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0;
  let timer = null;

  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "story-slider__dot";
    dot.setAttribute("role", "tab");
    dot.addEventListener("click", () => goTo(i, true));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function render() {
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === index);
      d.setAttribute("aria-selected", i === index ? "true" : "false");
    });
  }

  function goTo(i, userTriggered) {
    index = (i + slides.length) % slides.length;
    render();
    if (userTriggered) restartAutoplay();
  }

  function restartAutoplay() {
    clearInterval(timer);
    if (reduceMotion) return;
    timer = setInterval(() => goTo(index + 1), 4500);
  }

  prevBtn.addEventListener("click", () => goTo(index - 1, true));
  nextBtn.addEventListener("click", () => goTo(index + 1, true));
  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", restartAutoplay);
  root.addEventListener("focusin", () => clearInterval(timer));
  root.addEventListener("focusout", restartAutoplay);

  let touchStartX = null;
  root.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? index + 1 : index - 1, true);
    touchStartX = null;
  });

  render();
  updateSliderAria();
  restartAutoplay();
}

/* =========================================================================
   FALLING LEAVES (decorative canvas, respects prefers-reduced-motion)
   ========================================================================= */
function initLeaves() {
  const canvas = document.getElementById("leavesCanvas");
  if (!canvas) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const ctx = canvas.getContext("2d");
  let w, h, dpr;
  const colors = ["#3e6690", "#c29a5d", "#2e4a63", "#7faedd"];
  const leaves = [];
  const COUNT = 16;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeLeaf() {
    return {
      x: Math.random() * w,
      y: Math.random() * -h,
      size: 8 + Math.random() * 10,
      speed: 12 + Math.random() * 18,
      drift: Math.random() * 30 - 15,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 1.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      sway: Math.random() * Math.PI * 2
    };
  }

  for (let i = 0; i < COUNT; i++) leaves.push(makeLeaf());

  function drawLeaf(l) {
    ctx.save();
    ctx.translate(l.x, l.y);
    ctx.rotate(l.rot);
    ctx.fillStyle = l.color;
    ctx.globalAlpha = 0.55;
    ctx.beginPath();
    ctx.moveTo(0, -l.size);
    ctx.bezierCurveTo(l.size * 0.8, -l.size * 0.4, l.size * 0.8, l.size * 0.5, 0, l.size);
    ctx.bezierCurveTo(-l.size * 0.8, l.size * 0.5, -l.size * 0.8, -l.size * 0.4, 0, -l.size);
    ctx.fill();
    ctx.restore();
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    ctx.clearRect(0, 0, w, h);
    leaves.forEach((l) => {
      l.y += l.speed * dt;
      l.sway += dt;
      l.x += Math.sin(l.sway) * l.drift * dt;
      l.rot += l.rotSpeed * dt;
      if (l.y > h + 20) {
        Object.assign(l, makeLeaf(), { y: -20 });
      }
      drawLeaf(l);
    });
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(frame);
}

/* =========================================================================
   INIT
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(detectInitialLang());
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang-btn")));
  });
  tickCountdown();
  setInterval(tickCountdown, 1000);
  initForm();
  initLeaves();
  initStorySlider();

  document.getElementById("year").textContent = new Date(CONFIG.weddingDateISO).getFullYear();
});
