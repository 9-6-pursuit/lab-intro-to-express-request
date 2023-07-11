// DEPENDENCIES
const express = require("express");


// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the current home page.");
});

 
// that takes three parameters.

app.get("/:verb/:adjective/:noun", (req, res) => {
    console.log(req.params)
    res.send(`Congratulations on starting a project called ${req.params.verb} ${req.params.adjective} ${req.params.noun}`);
  });

// app.get("/rocks/:index", (req, res) => {
//     const { index } = req.params;
//     res.send(rocks[index]);
//   });

// EXPORT
module.exports = app;