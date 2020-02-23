const express = require('express');
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');

const PORT = +process.env.APP_PORT || 3000;
const PROXY_PORT = +process.env.PROXY_PORT || 8080;
const PROXY_URL = 'http://localhost:' + PROXY_PORT
const NOTES_URL = '/notes';
const DIST_PATH = './dist';
const isProduction = process.env.WEBPACK_PRODUCTION;

const app = express();

app.use(bodyParser.json());

const notes = [];

app.get(NOTES_URL, (req, res) => {
  res.json({
    notes: notes,
  });
});

app.post(NOTES_URL, (req, res) => {
  const note = req.body.note;
  notes.push(note);
  res.json({
    created: true,
  });
});

app.delete(NOTES_URL, (req, res) => {
  const note = req.body.note;
  const index = notes.indexOf(note);
  notes.splice(index, 1);

  res.json({
    deleted: true,
  });
});

app.get('*', isProduction ? express.static(DIST_PATH) : proxy(PROXY_URL));

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
