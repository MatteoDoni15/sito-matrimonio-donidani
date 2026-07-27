/**
 * Script per Google Apps Script: riceve ogni risposta RSVP dal sito
 * e la aggiunge come riga in un Google Sheet.
 *
 * COME USARLO (vedi anche le istruzioni passo-passo che ti ho mandato in chat):
 * 1. Crea un nuovo Google Sheet su sheets.google.com.
 * 2. Estensioni > Apps Script.
 * 3. Cancella il codice di esempio e incolla tutto questo file.
 * 4. Salva, poi Esegui/Deploy > Nuova implementazione > tipo "Web app".
 *    - Esegui come: Me
 *    - Chi ha accesso: Chiunque
 * 5. Autorizza l'accesso quando richiesto, poi copia l'URL che termina in /exec.
 * 6. Incolla quell'URL in CONFIG.googleSheetWebAppUrl dentro script.js.
 */

const SHEET_NAME = "Risposte RSVP";

const FIELDS = [
  "fullName", "attending", "plusOne", "plusOneName",
  "children", "childrenCount", "childrenNames",
  "dietary", "message", "language"
];

const HEADERS = [
  "Data e ora", "Nome e cognome", "Presente", "Con +1", "Nome +1",
  "Con bambini", "N. bambini", "Nomi bambini", "Allergie", "Messaggio", "Lingua"
];

function doPost(e) {
  const sheet = getOrCreateSheet();
  const params = (e && e.parameter) || {};
  const row = [new Date()];
  FIELDS.forEach(function (key) {
    row.push(params[key] || "");
  });
  sheet.appendRow(row);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput("Endpoint RSVP attivo.");
}

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
