// Step 1: Require Express
const express = require('express');

// Step 2: Create an Express app
const app = express();

// Step 3: Define the port number
const PORT = 3000;

// Step 4: Define a route for generating random numbers
app.get('/random', (req, res) => {
  // Generate a random number between 1 and 100 (inclusive)
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Send the random number in the response as JSON
  res.json({ random: randomNumber });
});

// Step 5: Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
