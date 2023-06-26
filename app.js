// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Express Name Generator");
});

app.get("/bugs", (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1> <a href="/bugs/101">pull one down, patch it around</a>`);
});

// was working on this one //
app.get("/bugs/:index", (req, res) => {
    const { index } = req.params
    res.send(`${index} little bugs in the code <a href="/bugs/:index">pull one down, patch it around</a>`);
});

app.get("/:verb/:adjective/:noun", (req, res) => {
    console.log(req.params);
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});
// EXPORT
module.exports = app;