const express = require('express');// Import express
const db = require('./config/connection');// Import the connection to the database
const routes = require('./routes');// Import the routes

const PORT = process.env.PORT || 3001;// Set the port to use  
const app = express();// Initialize the express app

// Middleware to parse out the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);// Use the routes

// Connect to the database and then start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server lisening on port ${PORT}!`);
  });
});
