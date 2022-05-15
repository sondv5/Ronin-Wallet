const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const data = JSON.parse(fs.readFileSync('backend/data.json', 'utf-8'));

app.post('/check-password', (req, res, next) => {
  if (req.body.password === data.password) {
    res.json(data.account);
  } else {
    res.status(401).send('Password is invalid. Please check again');
  }
});

app.get('/exchange-rate', (req, res) => {
  res.json(data.exchangeRate);
});

app.get('/swap', (req, res) => {
  const { amount, unit, to } = req.body;
});

app.listen(port, () => {
  console.log(`Back-end listening on port ${port}`);
});
