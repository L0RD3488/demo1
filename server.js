// REST API JSON-DATA GET and POST. (MI-10T-PRO-X64ARM)+LCP-ANDROID-SERVER using TASKER <--> LCP-Server(Ubuntu-Server X64 VM)
// READ MD for Prompts
// 'Back Calls' or 'InstaIntents' will use MAKE API to save power. (Mb ZAPPIER)
// Get limit loops around 60 mins.

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const { default: test } = require('node:test');
//const { type } = require('os');
//const path = require('path');

// Define valid API keys
const validApiKeys = ['3488', '3434', '4242'];

// Middleware to check API key
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

app.get('/gett', (req, res) => {
const gett = fs.readFileSync('./stats.txt', {flag: 'r'});
res.send(txtString);

});;
  




app.use(bodyParser.json());

app.post('/post', (req, res) => {
  const data = req.body;
  console.log(data); // Access the JSON data from the request body
  res.send('Data received successfully!');
  const jsonString = JSON.stringify(data);
  fs.writeFileSync("C:/Users/L0RD3/Documents/vs-code-workspace/project-x-workspace/data/in-payload.json", jsonString);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Data loops (JSON reserve) and FLOW CONTROL next. 