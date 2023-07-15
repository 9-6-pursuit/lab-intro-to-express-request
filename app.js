// DEPENDENCIES
const express = require("express");


// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the current home page.");
});

 
  // route that takes three parameters.

app.get("/:verb/:adjective/:noun", (req, res) => {
    console.log(req.params)
    res.send(`Congratulations on starting a project called ${req.params.verb} ${req.params.adjective} ${req.params.noun}`);
  });

  //  BUGS

app.get("/bugs", (req, res) => {
  console.log(req.params)
  res.send(`<div>
    <h3>99 little bugs in the code<h3>
    <a href="bugs/101">pull one down, patch it around</a>
  </div>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  res.send(`<div>
    <h3>${req.params.numberOfBugs} little bugs in the code</h3>
    <a href="${Number(req.params.numberOfBugs) +2 }">pull one down, patch it around</a>
  </div>`);
 
});





// app.get("/rocks/:index", (req, res) => {
//     const { index } = req.params; 
//     res.send(rocks[index]);
//   });

// EXPORT
module.exports = app;