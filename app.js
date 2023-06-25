// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the homepage.");
});

// ROUTES
// app.get("/rocks/:index", (req, res) => {
//     // res.send(rocks);
//     // res.send(req.params);
//     res.send(rocks[req.params.index]);
//   });

// EXPORT
module.exports = app;