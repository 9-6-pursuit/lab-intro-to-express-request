// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  res.send(
    `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}.`
  );
});

app.get("/bugs", (req, res) => {
  res.send(`<div>
    <h3>99 little bugs in the code</h3>
    <a href="bugs/101">Link</a>
    </div>`);
});

app.get("/bugs/:number", (req, res) => {
  const bugsNumber = req.params.number;
  if (bugsNumber) {
    res.send(`<div>
      <h3>${bugsNumber} little bugs in the code</h3>
      <a href="${Number(bugsNumber) + 2}">Link</a>
      </div>`);
  } else {
    res.send(`<div>
      <h3>${req.params.numberOfBugs} little bugs in the code</h3>
      <a href="/bugs">Start Over</a>
      </div>`);
  }
});







const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);





// EXPORT
module.exports = app;
