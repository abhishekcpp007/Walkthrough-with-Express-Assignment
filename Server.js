// server.js
const express = require('express');
const app = express();
const PORT = 3000; // You can use any available port you prefer

// Sample data for men and women products (you can replace this with your actual data)
const menProducts = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Men Product ${index + 1}`,
  brand:"abc",
  price:"10000",
  color:"blue",
  size:"xxl",
  catagory:"clothing"
}));

const womenProducts = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Women Product ${index + 1}`,
  brand:"abc",
  price:"10000",
  color:"blue",
  size:"xxl",
  catagory:"clothing",
}));


// Endpoints
app.get('/', (req, res) => {
  res.send("Welcome to Men & Women Dummy Data");
});

app.get('/men', (req, res) => {
  res.json(menProducts);
});

app.get('/women', (req, res) => {
  res.json(womenProducts);
});

// 404 Page not found handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
