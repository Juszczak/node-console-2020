/* import zewnętrznych bibliotek */
const express = require('express');
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');

/* deklaracja zmiennych pomocniczych dla aplikacji */
const PORT = +process.env.APP_PORT || 3000; // numer portu dla aplikacji
const PROXY_PORT = +process.env.PROXY_PORT || 8080; // numer portu dla proxy webpacka
const PROXY_URL = 'http://localhost:' + PROXY_PORT // pełny adres URL proxy webpacka
const NOTES_URL = '/notes'; // adres ścieżki dla endpointów notatek
const DIST_PATH = './dist'; // ścieżka do zbudowanej aplikacji w systemie plików
const isProduction = process.env.WEBPACK_PRODUCTION; // zmienna informująca o trybie produkcyjnym

/* utworzenie obiektu reprezentującego server */
const app = express();

/* wykorzystanie middleware do parsowania ciał zapytań w formacie JSON */
app.use(bodyParser.json());

/* deklaracja pustej tablicy, w której będą przechowywane dane na serwerze */
const notes = [];

/* obsługa zapytania typu GET */
app.get(NOTES_URL, (req, res) => {
  /* endpoint zwraca JSON z listą notatek */
  res.json({
    notes: notes,
  });
});

/* obsługa zapytania typu POST – utworzenie nowego zasobu */
app.post(NOTES_URL, (req, res) => {
  const note = req.body.note; // dane przesłane w ciele zapytania
  notes.push(note); // zapis danych na serwerze
  res.json({
    created: true, // zwrócenie informacji o utworzeniu zasobu
  });
});

/* obsługa zapytania typu DELETE – kasowanie zasobu */
app.delete(NOTES_URL, (req, res) => {
  const note = req.body.note; // dane przesłane w ciele zapytania
  const index = notes.indexOf(note); // indeks tablicy, pod którym znajduje się zasób
  notes.splice(index, 1); // usunięcie elementu pod wskazanym indeksem

  res.json({
    deleted: true, // zwrócenie informacji o skasowaniu zasobu
  });
});

/* obsługa serwowania statycznych plików dla zapytań typu GET */
app.get('*', isProduction ? express.static(DIST_PATH) : proxy(PROXY_URL));

/* rozpoczęcie nasłuchiwania na wskazanym porcie */
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
