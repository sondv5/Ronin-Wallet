const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const data = JSON.parse(fs.readFileSync('backend/data.json', 'utf-8'));

// deep clone assets for reset purpose (reset when user is log in)
const assets = JSON.parse(JSON.stringify(data.account.assets));

function sleep(milliSeconds) {
  return new Promise((rs) => {
    setTimeout(() => {
      rs();
    }, milliSeconds);
  });
}

app.post('/check-password', async (req, res) => {
  // sleep for loading effect visibility
  await sleep(500);

  if (req.body.password === data.password) {
    data.account.assets = JSON.parse(JSON.stringify(assets));
    res.json(data.account);
  } else {
    res.status(401).send('Password is invalid. Please check again');
  }
});

app.get('/exchange-rate', (req, res) => {
  res.json(data.exchangeRate);
});

app.post('/send', async (req, res) => {
  // sleep for loading effect visibility
  await sleep(500);

  const { amount, asset, to } = req.body;
  const targetAsset = data.account.assets.find((x) => x.unit === asset);
  if (targetAsset && targetAsset.quantity >= amount) {
    targetAsset.quantity = targetAsset.quantity - amount;
    console.info(`Send ${amount} ${asset} to ${to}`);
    res.json(data.account);
  } else {
    res.status(400).send('Asset is not enough to send. Please check again');
  }
});

app.listen(port, () => {
  console.info(`Back-end listening on port ${port}`);
});
