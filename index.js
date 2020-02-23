const express = require('express');
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');
const fs = require('fs');

const PORT = +process.env.APP_PORT || 3000;
const PROXY_PORT = +process.env.PROXY_PORT || 8080;
const PROXY_URL = 'http://localhost:' + PROXY_PORT;
const NOTES_URL = '/notes';
const DIST_PATH = './dist';
const DB_PATH = './db.json';
const isProduction = process.env.WEBPACK_PRODUCTION;

const app = express();

app.use(bodyParser.json());

let notes;
let users;

try {
  const db = fs.readFileSync(DB_PATH);
  const data = JSON.parse(db);
  notes = data.notes;
  users = data.users;
} catch (error) {
  notes = [];
  users = {};
}

function saveDate() {
  const data = JSON.stringify({notes: notes, users: users});
  fs.writeFileSync(DB_PATH, data);
}

app.get(NOTES_URL, (req, res) => {
  res.json({
    notes: notes,
  });
});

app.post(NOTES_URL, (req, res) => {
  const note = req.body.note;
  notes.push(note);
  saveDate();
  res.json({
    created: true,
  });
});

app.delete(NOTES_URL, (req, res) => {
  const note = req.body.note;
  const index = notes.indexOf(note);
  notes.splice(index, 1);
  saveDate();

  res.json({
    deleted: true,
  });
});

app.post('/auth', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  if (users[name] === password) {
    res.json({success: true});
  } else {
    res.json({error: "ERROR"});
  }
});

app.get('*', isProduction ? express.static(DIST_PATH) : proxy(PROXY_URL));

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
