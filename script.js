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
  contactEmail: "popoiudaniela.dp@gmail.com",

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
    it: { venue: "Parrocchia San Nazaro e Celso", address: "Via Roma 12, 20091 Bresso (Milano)" },
    ro: { venue: "Parohia San Nazaro e Celso", address: "Via Roma 12, 20091 Bresso (Milano, Lombardia)" },
    time: "11:30",
    // Link a Google Maps: apre l'app di navigazione sul telefono, o Google Maps nel browser.
    // Link către Google Maps: deschide aplicația de navigație pe telefon, sau Google Maps în browser.
    mapUrl: "https://maps.app.goo.gl/vKPqAv4opPwcRhDNA"
  },
  reception: {
    it: { venue: "Castello di Clanezzo", address: "Piazza Castello 4, 24010 Ubiale Clanezzo (Bergamo)" },
    ro: { venue: "Castello di Clanezzo", address: "Piazza Castello 4, 24010 Ubiale Clanezzo (Bergamo)" },
    time: "13:45",
    mapUrl: "https://maps.app.goo.gl/N1EwTbrXoQiyZVzW8"
  }
};

/* =========================================================================
   TESTI / TEXTE — Italiano e Română
   ========================================================================= */
const I18N = {
  it: {
    pageTitle: "Matteo & Daniela — Il nostro matrimonio",
    envelopeHint: "Click to Open",
    navRsvp: "RSVP",
    heroEyebrow: "Ci sposiamo",
    heroSubtitle: "Con gioia nel cuore, vi invitiamo a festeggiare con noi l'inizio di una nuova vita insieme.",
    heroCta: "Conferma la tua presenza",
    heroScroll: "Scorri per i dettagli",

    storyEyebrow: "La nostra storia",
    storyTitle: "Un cammino, due cuori",
    storyText: [
      "La nostra storia è iniziata tra i libri di una biblioteca, quasi per caso. Diversi, complici e curiosi l'uno dell'altra, abbiamo riempito il nostro cammino di viaggi, risate, avventure e sogni condivisi, lasciandoci sorprendere dall'altro e dalla vita e scoprendo che la strada più bella è quella che percorriamo insieme.",
      "E oggi, con il cuore pieno di gioia e forse un po' troppo entusiasmo, siamo felici di annunciarvi che il 7 novembre 2026 faremo il passo più bello: sposarci!",
      "Ci diremo quel “sì” che aspettavamo e daremo inizio al nostro “e vissero felici e contenti”.",
      "Tra foglie dorate, luci calde e la magia di un castello, non vediamo l'ora di condividere questo giorno con voi, le persone che amiamo di più."
    ],

    detailsEyebrow: "Il nostro giorno",
    detailsTitle: "Cerimonia e ricevimento",
    ceremonyLabel: "Cerimonia",
    receptionLabel: "Ricevimento",
    dressCodeLabel: "Dress code",
    dressCodeValue: "Felici ed eleganti",
    detailsNote: "",
    directionsLabel: "Come arrivare →",

    venueEyebrow: "La location",
    venueTitle: "Vi aspettiamo qui",
    venueText: "",
    venueToggleLabel: "",

    countdownEyebrow: "Manca sempre meno",
    countdownTitle: "Il conto alla rovescia",
    days: "Giorni", hours: "Ore", minutes: "Minuti", seconds: "Secondi",
    countdownDone: "Oggi è il grande giorno! Non vediamo l'ora di festeggiare con voi.",

    storyFanHint: "Scorri per vedere tutte le foto →",

    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confermate la vostra presenza",
    rsvpIntro: "Per organizzare al meglio questo giorno speciale, vi chiediamo di rispondere entro",
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

    giftToggle: "Per chi desiderasse farci un regalo",
    giftIntro: "La vostra presenza è già il regalo più bello. Se desiderate contribuire al nostro viaggio di nozze, ecco i nostri dati per un bonifico:",
    giftBeneficiaryLabel: "Beneficiario",
    giftIbanLabel: "IBAN",
    giftBicLabel: "BIC/SWIFT",
    giftBankLabel: "Banca",
    giftCopy: "Copia",
    giftCopied: "Copiato!",

    photosEyebrow: "Condividi i tuoi scatti",
    photosTitle: "Le foto della festa",
    photosText: "Scansiona il QR code o clicca qui sotto per caricare le foto che scatterai durante la giornata: le raccoglieremo tutte in un unico album.",
    photosUploadCta: "Carica le tue foto",
    photosViewCta: "Guarda le foto",
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
    footerHashtag: "#MatrimonioDoniDani",

    dateLocale: "it-IT",
    weekdayMonthYear: { weekday: "long", day: "numeric", month: "long", year: "numeric" },
    deadlineFormat: { month: "long", year: "numeric" }
  },
  ro: {
    pageTitle: "Matteo & Daniela — Nunta noastră",
    envelopeHint: "Atinge pentru a deschide invitația",
    navRsvp: "RSVP",
    heroEyebrow: "Ne căsătorim",
    heroSubtitle: "Cu bucurie în suflet, vă invităm să sărbătoriți alături de noi începutul unei noi vieți împreună.",
    heroCta: "Confirmă-ți prezența",
    heroScroll: "Derulează pentru detalii",

    storyEyebrow: "Povestea noastră",
    storyTitle: "Un drum, două inimi",
    storyText: [
      "Povestea noastră a început printre cărțile unei biblioteci, aproape din întâmplare. Două suflete diferite, dar care s-au regăsit unul în celălalt, am pornit împreună la drum, descoperind, pas cu pas, bucuria călătoriilor, farmecul aventurilor, frumusețea visurilor împărtășite și nenumărate motive de a zâmbi.",
      "Ne-am lăsat surprinși unul de celălalt și de viață și am înțeles că, dintre toate drumurile pe care le putem alege, cel mai frumos este cel pe care îl parcurgem împreună.",
      "Astăzi, cu inimile pline de emoție și bucurie, suntem fericiți să vă anunțăm că, pe 7 noiembrie 2026, vom face cel mai important și mai frumos pas al vieții noastre:",
      "ne vom căsători!",
      "Vom spune acel „DA” pe care l-am așteptat cu nerăbdare și vom începe împreună un nou capitol al poveștii noastre, cu promisiunea unei vieți pline de iubire, zâmbete și momente de neuitat.",
      "Iar pentru că cele mai frumoase clipe sunt cele împărtășite cu oamenii dragi, ne dorim din tot sufletul să ne fiți alături în această zi atât de specială.",
      "În decorul fermecător al unui castel, printre frunze aurii și lumini calde, vom celebra iubirea noastră și începutul unei noi călătorii în doi.",
      "Abia așteptăm să sărbătorim împreună cu voi!"
    ],

    detailsEyebrow: "Ziua noastră",
    detailsTitle: "Cununie și petrecere",
    ceremonyLabel: "Cununie",
    receptionLabel: "Petrecere",
    dressCodeLabel: "Ținută recomandată",
    dressCodeValue: "Fericiți și eleganți",
    detailsNote: "",
    directionsLabel: "Vezi traseul →",

    venueEyebrow: "Locația",
    venueTitle: "Vă așteptăm aici",
    venueText: "",
    venueToggleLabel: "",

    countdownEyebrow: "Numărătoarea inversă",
    countdownTitle: "Mai sunt doar...",
    days: "Zile", hours: "Ore", minutes: "Minute", seconds: "Secunde",
    countdownDone: "Astăzi este marea zi! Abia așteptăm să sărbătorim alături de voi.",

    storyFanHint: "Derulează pentru a vedea toate pozele →",

    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confirmați-vă prezența",
    rsvpIntro: "Pentru a organiza cât mai bine această zi specială, vă rugăm să răspundeți până în",
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

    giftToggle: "Pentru cei care doresc să ne facă un cadou",
    giftIntro: "Prezența voastră este deja cel mai frumos cadou. Dacă doriți să contribuiți la călătoria noastră de nuntă, aici găsiți datele pentru un transfer bancar:",
    giftBeneficiaryLabel: "Beneficiar",
    giftIbanLabel: "IBAN",
    giftBicLabel: "BIC/SWIFT",
    giftBankLabel: "Banca",
    giftCopy: "Copiază",
    giftCopied: "Copiat!",

    photosEyebrow: "Distribuie pozele tale",
    photosTitle: "Pozele de la petrecere",
    photosText: "Scanează codul QR sau apasă mai jos pentru a încărca pozele făcute în ziua nunții: le vom aduna pe toate într-un singur album.",
    photosUploadCta: "Încarcă pozele tale",
    photosViewCta: "Vezi pozele",
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
    footerHashtag: "#CăsătorieDoniDani",

    dateLocale: "ro-RO",
    weekdayMonthYear: { weekday: "long", day: "numeric", month: "long", year: "numeric" },
    deadlineFormat: { month: "long", year: "numeric" }
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

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
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
    if (t[key] === undefined) return;
    if (Array.isArray(t[key])) {
      el.innerHTML = t[key].map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
    } else {
      el.textContent = t[key];
    }
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (t[key] !== undefined) el.setAttribute("alt", t[key]);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
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
  const ceremonyMapLink = document.getElementById("ceremonyMapLink");
  if (ceremonyMapLink && CONFIG.ceremony.mapUrl) {
    ceremonyMapLink.href = CONFIG.ceremony.mapUrl;
    ceremonyMapLink.hidden = false;
  }
  document.getElementById("receptionVenue").textContent = rec.venue;
  document.getElementById("receptionAddress").textContent = rec.address;
  document.getElementById("receptionTime").textContent = CONFIG.reception.time;
  const receptionMapLink = document.getElementById("receptionMapLink");
  if (receptionMapLink && CONFIG.reception.mapUrl) {
    receptionMapLink.href = CONFIG.reception.mapUrl;
    receptionMapLink.hidden = false;
  }

  document.getElementById("contactEmailLink").textContent = CONFIG.contactEmail;
  document.getElementById("contactEmailLink").setAttribute("href", "mailto:" + CONFIG.contactEmail);

  document.getElementById("photosLink").setAttribute("href", CONFIG.photosDriveUrl);

  updateAttendingUI();
  updatePlusOneUI();
  updateChildrenUI();
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

  const copyBtn = document.getElementById("giftCopyBtn");
  const ibanEl = document.getElementById("giftIbanValue");
  if (copyBtn && ibanEl) {
    copyBtn.addEventListener("click", async () => {
      const iban = ibanEl.textContent.replace(/\s+/g, "");
      try {
        await navigator.clipboard.writeText(iban);
      } catch (err) {
        return;
      }
      const original = copyBtn.textContent;
      copyBtn.textContent = I18N[currentLang].giftCopied;
      setTimeout(() => { copyBtn.textContent = original; }, 1800);
    });
  }

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
   STORY PHOTO FAN
   All photos sit visible in a loose fan; on desktop they drift with the
   cursor (parallax) and tilt on hover. On touch/narrow screens the CSS
   turns the same markup into a swipeable strip, so no JS is needed there.
   ========================================================================= */
function initStoryFan() {
  const root = document.getElementById("storyFan");
  const track = document.getElementById("storyFanTrack");
  if (!root || !track) return;

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        root.classList.add("is-visible");
        io.disconnect();
      });
    }, { threshold: 0.2 });
    io.observe(root);
  } else {
    root.classList.add("is-visible");
  }

  // Let a plain vertical mouse wheel drive the horizontal scroll strip.
  track.addEventListener("wheel", (e) => {
    if (track.scrollWidth <= track.clientWidth) return;
    if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
    e.preventDefault();
    track.scrollLeft += e.deltaY;
  }, { passive: false });

  // Click-and-drag to spin through the fan like a wheel (mouse only; touch
  // already scrolls natively via overflow-x).
  track.addEventListener("dragstart", (e) => e.preventDefault());
  let isDragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;

  track.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartScroll = track.scrollLeft;
    track.classList.add("is-dragging");
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    track.scrollLeft = dragStartScroll - (e.clientX - dragStartX);
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove("is-dragging");
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (reduceMotion || !canHover) return;

  const parallaxLayers = Array.from(track.querySelectorAll(".story-fan__parallax"));
  let targetX = 0, targetY = 0, curX = 0, curY = 0, raf = null;

  function tick() {
    curX += (targetX - curX) * 0.08;
    curY += (targetY - curY) * 0.08;
    parallaxLayers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth) || 8;
      layer.style.setProperty("--px", (curX * depth).toFixed(2) + "px");
      layer.style.setProperty("--py", (curY * depth * 0.6).toFixed(2) + "px");
    });
    if (Math.abs(targetX - curX) > 0.002 || Math.abs(targetY - curY) > 0.002) {
      raf = requestAnimationFrame(tick);
    } else {
      raf = null;
    }
  }

  function ensureTicking() {
    if (raf === null) raf = requestAnimationFrame(tick);
  }

  track.addEventListener("mousemove", (e) => {
    const r = track.getBoundingClientRect();
    targetX = ((e.clientX - r.left) / r.width - 0.5) * 2;
    targetY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    ensureTicking();
  });
  track.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
    ensureTicking();
  });

  // Zoom + tilt on the innermost layer, kept separate from the parallax
  // layer above so the eased zoom transition never fights the per-frame
  // parallax lerp.
  track.querySelectorAll(".story-fan__inner").forEach((card) => {
    const outer = card.closest(".story-fan__card");
    card.addEventListener("mousemove", (e) => {
      if (isDragging) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--rx", (-py * 14).toFixed(2) + "deg");
      card.style.setProperty("--ry", (px * 14).toFixed(2) + "deg");
      card.style.setProperty("--sc", "1.22");
      outer.classList.add("is-hovered");
    });
    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--sc", "1");
      outer.classList.remove("is-hovered");
    });
  });
}

/* =========================================================================
   ENVELOPE INTRO
   ========================================================================= */
function initEnvelopeIntro() {
  const intro = document.getElementById("envelopeIntro");
  const btn = document.getElementById("envelopeButton");
  const envelope = document.getElementById("envelope");
  if (!intro || !btn || !envelope) return;

  document.body.classList.add("intro-lock");

  function openEnvelope(reduceMotion) {
    envelope.classList.remove("close");
    envelope.classList.add("open");

    const openDelay = reduceMotion ? 0 : 1550;
    setTimeout(() => {
      intro.classList.add("is-dismissed");
      document.body.classList.remove("intro-lock");
    }, openDelay);

    const cleanupDelay = openDelay + (reduceMotion ? 0 : 650);
    setTimeout(() => { intro.remove(); }, cleanupDelay);
  }

  btn.addEventListener("click", () => {
    if (envelope.classList.contains("open") || btn.disabled) return;
    btn.disabled = true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    openEnvelope(reduceMotion);
  });
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
  const colors = ["#9c6a0f", "#cf9f3f", "#2e4a63", "#5c8ab3"];
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
   HERO VALZER (sequenza di frame in loop, sfondo salone)
   ========================================================================= */
function initHeroValzer() {
  const frames = document.querySelectorAll(".hero__valzer-frame");
  if (!frames.length) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  let current = 0;
  setInterval(() => {
    frames[current].classList.remove("is-active");
    current = (current + 1) % frames.length;
    frames[current].classList.add("is-active");
  }, 900);
}

/* =========================================================================
   VENUE SCENE (toggle giorno/notte)
   ========================================================================= */
function initVenueScene() {
  const frame = document.getElementById("venueFrame");
  const toggle = document.getElementById("venueToggle");
  if (!frame || !toggle) return;

  function setNight(isNight) {
    frame.classList.toggle("is-night", isNight);
    toggle.setAttribute("aria-pressed", String(isNight));
  }

  toggle.addEventListener("click", () => {
    setNight(!frame.classList.contains("is-night"));
  });

  setInterval(() => {
    setNight(!frame.classList.contains("is-night"));
  }, 4000);
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
  initHeroValzer();
  initStoryFan();
  initEnvelopeIntro();
  initVenueScene();

  document.getElementById("year").textContent = new Date(CONFIG.weddingDateISO).getFullYear();
});
