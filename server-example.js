// Demo: Exchange data to power Smart-Home and IOT, between Android (Taker) and Ubuntu Server (node.js:express) 
// REST API JSON-data. GET and POST 'Routes'

const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');
const app = express();
const port = 3030;

// Define valid API keys:
const validApiKeys = ['4345', '7496', '3423'];

// Middleware to check API key:
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['api-key'] || req.query['api-key'];
  if (!apiKey) {
    return res.status(401).send({ message: 'Missing API key' });
  }
  if (!validApiKeys.includes(apiKey)) {
    return res.status(403).send({ message: 'Invalid API key' });
  }
  next(); // Proceed to the next middleware or route handler
};

app.use(checkApiKey);

app.use(bodyParser.text());

app.get('/get', (req, res) => {
const get = fs.readFileSync('./stats.txt', {flag: 'r'});
res.send(txtString);
});; // Connect and request (Get) from Android to 192.xxx.xxx.xxx:3030  (ubuntu)
  
app.use(bodyParser.json());

app.post('/post', (req, res) => {
  const data = req.body;
  console.log(data); // Access the JSON data from the request body
  res.send('Data received successfully!');
  const jsonString = JSON.stringify(data);
  fs.writeFileSync("/in-payload.json", jsonString);
}); // Android send data object to txt file.

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Smartphone successfully exchanged data with server (Local Net)
