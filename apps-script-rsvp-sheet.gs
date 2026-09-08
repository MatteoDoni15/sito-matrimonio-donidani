/**
 * Script per Google Apps Script: riceve ogni risposta RSVP dal sito,
 * la aggiunge come riga in un Google Sheet e ne manda una copia per email
 * agli indirizzi in NOTIFY_EMAILS (log di backup).
 *
 * COME USARLO
 * 1. Crea un nuovo Google Sheet su sheets.google.com.
 * 2. Estensioni > Apps Script.
 * 3. Cancella il codice di esempio e incolla tutto questo file.
 * 4. Salva, poi Esegui/Deploy > Nuova implementazione > tipo "Web app".
 *    - Esegui come: Me
 *    - Chi ha accesso: Chiunque
 * 5. Autorizza l'accesso quando richiesto, poi copia l'URL che termina in /exec.
 * 6. Incolla quell'URL in CONFIG.googleSheetWebAppUrl dentro script.js.
 *
 * ATTENZIONE se stai aggiornando uno script gia' pubblicato: l'invio email e'
 * un permesso nuovo, quindi bisogna (a) eseguire una volta testNotifica()
 * dall'editor e accettare la richiesta di autorizzazione, e (b) fare
 * Deploy > Gestisci implementazioni > matita > Versione: "Nuova versione".
 * Senza la nuova versione il sito continua a usare il codice vecchio.
 */

const SHEET_NAME = "Risposte RSVP";

// Chi riceve una copia di ogni risposta. Aggiungi/togli indirizzi da qui.
const NOTIFY_EMAILS = [
  "teoxdoni@gmail.com",
  "popoiudaniela.dp@gmail.com"
];

const TIMEZONE = "Europe/Rome";

// I nomi dei campi inviati dal form (index.html) piu' "language", aggiunto da script.js.
// HEADERS[0] e' la data; da li' in poi HEADERS[i + 1] e' l'intestazione di FIELDS[i]:
// le due liste vanno tenute allineate.
const FIELDS = [
  "fullName", "attending", "plusOne", "plusOneName",
  "children", "childrenCount", "childrenNames",
  "dietary", "song", "message", "language"
];

const HEADERS = [
  "Data e ora", "Nome e cognome", "Presente", "Con +1", "Nome +1",
  "Con bambini", "N. bambini", "Nomi bambini", "Allergie", "Canzone", "Messaggio", "Lingua"
];

function doPost(e) {
  const params = (e && e.parameter) || {};
  // Valori in ordine canonico, cioe' nello stesso ordine di HEADERS.
  const values = [new Date()].concat(FIELDS.map(function (key) {
    return params[key] || "";
  }));

  let rowNumber;
  try {
    const sheet = getOrCreateSheet();
    sheet.appendRow(placeByHeader(values, readHeaders(sheet)));
    rowNumber = sheet.getLastRow();
  } catch (err) {
    // Lo Sheet non ha accettato la riga: l'email diventa l'unica traccia.
    notify("⚠️ RSVP NON salvato sullo Sheet", buildErrorEmail(err, values));
    return jsonOutput({ ok: false, error: String(err) });
  }

  notify(buildSubject(values), buildRowEmail(values, rowNumber));
  return jsonOutput({ ok: true, row: rowNumber });
}

function doGet() {
  return ContentService.createTextOutput("Endpoint RSVP attivo.");
}

function jsonOutput(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

/* =========================================================================
   SCRITTURA SUL FOGLIO
   ========================================================================= */

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Legge le intestazioni presenti nella riga 1 e aggiunge in coda quelle di
 * HEADERS che mancano (es. "Canzone" su un foglio creato da una versione
 * precedente dello script). Aggiungerle in coda, e non in mezzo, evita di
 * spostare i dati delle righe gia' salvate.
 */
function readHeaders(sheet) {
  const lastCol = sheet.getLastColumn();
  let headers = lastCol === 0 ? [] : sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(function (h) {
    return String(h).trim();
  });
  // Scarta eventuali celle vuote in coda: la riga 1 puo' risultare piu' larga
  // del suo contenuto se una riga di dati occupa piu' colonne.
  while (headers.length && headers[headers.length - 1] === "") {
    headers.pop();
  }

  const missing = HEADERS.filter(function (header) {
    return headers.indexOf(header) === -1;
  });
  if (missing.length) {
    sheet.getRange(1, headers.length + 1, 1, missing.length)
      .setValues([missing])
      .setFontWeight("bold");
    headers = headers.concat(missing);
  }

  const index = {};
  headers.forEach(function (header, i) {
    index[header] = i;
  });
  return { list: headers, index: index };
}

/**
 * Dispone i valori nelle colonne in base al NOME dell'intestazione, non alla
 * posizione: cosi' se le colonne del foglio vengono riordinate, o ne viene
 * aggiunta una a mano, i dati finiscono comunque sotto l'intestazione giusta.
 */
function placeByHeader(values, headers) {
  const row = [];
  for (let i = 0; i < headers.list.length; i++) {
    row.push("");
  }
  HEADERS.forEach(function (header, i) {
    const col = headers.index[header];
    if (col !== undefined) {
      row[col] = values[i];
    }
  });
  return row;
}

/* =========================================================================
   NOTIFICHE EMAIL
   ========================================================================= */

/**
 * Invia la notifica a tutti gli indirizzi. Non deve mai far fallire il salvataggio:
 * se l'email non parte (quota giornaliera, autorizzazione mancante...) la riga
 * sullo Sheet resta comunque valida e l'errore finisce nei log di Apps Script.
 */
function notify(subject, htmlBody) {
  try {
    MailApp.sendEmail({
      to: NOTIFY_EMAILS.join(","),
      subject: subject,
      htmlBody: htmlBody,
      name: "RSVP Matteo & Anca"
    });
  } catch (err) {
    Logger.log("Invio email fallito: " + err);
  }
}

function buildSubject(values) {
  const name = values[1] || "(senza nome)";
  return "RSVP " + attendingLabel(values[2]) + " — " + name;
}

function attendingLabel(value) {
  const v = String(value).trim().toLowerCase();
  if (v === "si" || v === "sì" || v === "yes" || v === "da") return "✅ PRESENTE";
  if (v === "no" || v === "nu") return "❌ ASSENTE";
  return "❓ non indicato";
}

function buildRowEmail(values, rowNumber) {
  return "<div style=\"font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#222\">"
    + "<p>Nuova risposta RSVP, registrata nella riga <strong>" + rowNumber
    + "</strong> del foglio “" + escapeHtml(SHEET_NAME) + "”.</p>"
    + valuesTable(values)
    + "<p style=\"color:#777;font-size:12px\">Questa email e' la copia di sicurezza della riga: "
    + "se lo Sheet viene modificato o cancellato per sbaglio, il dato originale e' qui.</p>"
    + "</div>";
}

function buildErrorEmail(err, values) {
  return "<div style=\"font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#222\">"
    + "<p><strong>Una risposta RSVP e' arrivata ma NON e' stata scritta sullo Sheet.</strong></p>"
    + "<p>Errore: <code>" + escapeHtml(String(err)) + "</code></p>"
    + "<p>Dati ricevuti, da inserire a mano:</p>"
    + valuesTable(values)
    + "</div>";
}

function valuesTable(values) {
  const cell = "padding:6px 10px;border:1px solid #e0d9cf;vertical-align:top";
  const rows = HEADERS.map(function (header, i) {
    const raw = i === 0 ? formatDate(values[0]) : values[i];
    return "<tr>"
      + "<td style=\"" + cell + ";background:#faf7f2;font-weight:bold;white-space:nowrap\">" + escapeHtml(header) + "</td>"
      + "<td style=\"" + cell + "\">" + escapeHtml(raw === "" || raw === undefined ? "—" : raw) + "</td>"
      + "</tr>";
  }).join("");
  return "<table style=\"border-collapse:collapse\">" + rows + "</table>";
}

function formatDate(date) {
  return Utilities.formatDate(new Date(date), TIMEZONE, "dd/MM/yyyy HH:mm:ss");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

/**
 * Da eseguire una volta dall'editor di Apps Script: serve ad autorizzare
 * l'invio email e a verificare che la notifica arrivi davvero.
 */
function testNotifica() {
  const values = [new Date(), "Mario Rossi (TEST)", "si", "si", "Giulia Bianchi",
    "no", "", "", "Nessuna", "Canzone di prova", "Messaggio di prova", "it"];
  notify(buildSubject(values) + " [TEST]", buildRowEmail(values, 0));
}
