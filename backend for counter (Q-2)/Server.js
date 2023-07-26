const express = require('express');
const bodyParser = require('body-parser');
const serverconfig= require("./config/server.config")
const app = express();
//const PORT = 3000;

// Body parser middleware
app.use(bodyParser.json());

// Initial counter value
let counter = 0;

// Endpoint to get current counter data
app.get('/', (req, res) => {
  res.json({ counter });
});

// Endpoint to increment the counter by 1
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Endpoint to decrement the counter by 1
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server
app.listen(serverconfig, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
