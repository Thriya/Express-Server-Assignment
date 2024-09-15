// Import the Express.js module
const express = require('express');

// Create an instance of the Express app
const app = express();

// Define a route for the root URL ('/') that returns a form
app.get('/', (req, res) => {
  res.send(`
    <form action="/hello" method="get">
      <input type="text" name="name" placeholder="Enter your name">
      <input type="submit" value="Submit">
    </form>
  `);
});

// Define a route for the '/hello' URL that returns a personalized greeting
app.get('/hello', (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send('Please enter your name!');
  }
});

// Start the server and listen on port 3001
app.listen(3001, () => {
  console.log('Server started on port 3001');
});