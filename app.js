// DEPENDENCIES
const express = require("express");
const bugs = require("./bugs");
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0])

// CONFIGURATION
const app = express();

// PROJECT NAME GENERATOR ROUTE
app.get("/", (req, res) => {
  res.send("<h2>Let's get started<h2>");
});
// : NON SPECIFIC URL PARAMETERS
/*app.get("/:verb/:adjective/:noun", (req, res) => {
  // res.send(req.params); RETURNS AN OBJECT W/KEY:VALUE PAIRS
  // res.send(req.params.verb); RETURNS THE VERB FROM THE URL PARAM

  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});*/
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  const message = `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`;
  const htmlResponse = `<h1>${message}</h1>`;
  res.send(htmlResponse);
});

// 99 LITTLE BUGS IN CODE ROUTES
app.get("/bugs", (req, res) => {
  res.send(`<div> 
  <h3>99 little bugs in the code</h3>
  <a href="bugs/101">pull one down, patch it around</a>
    </div>`);
});

// http://localhost:8888/bugs/1000
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const numOfBugs = Number(numberOfBugs);
  let responseHTML = `<h3>${numOfBugs} little bugs in the code</h3>`;

  if (numOfBugs < 200) {
    const nextBugCount = numOfBugs + 2;
    responseHTML += `<a href="/bugs/${nextBugCount}">Pull one down, patch it around</a>`;
  } else {
    responseHTML += `<a href="/">Start over</a>`;
  }
  res.send(responseHTML);
});


// EXPORT
module.exports = app;
