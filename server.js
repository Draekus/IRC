// Dependencies
// =============================================================
// Web Server Imports
const express = require("express");
const path = require("path");

// IRC Server Imports
const IRC = require('irc-server');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Sets up the IRC Server
// =============================================================
const server = IRC.createServer();

// Starts the web server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Starts the IRC server to begin listening
// =============================================================
server.listen(6667);