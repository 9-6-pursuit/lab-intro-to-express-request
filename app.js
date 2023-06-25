// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);


// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  // res.send(req.params);
  res.send(
    `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    `<div>
      <h1>99 little bugs in the code</h1>
      <a href="bugs/101">Pull one down, patch it around</a>
    </div>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  if (req.params.numberOfBugs >= 200) {
    res.send(
      `<div>
        <h1>${req.params.numberOfBugs} little bugs in the code</h1>
        <a href="/bugs">Too many bugs!! Start over!</a>
      </div>`
    );
  } else {
    res.send(
      `<div>
        <h1>${req.params.numberOfBugs} little bugs in the code</h1>
        <a href="${Number(req.params.numberOfBugs) + 2}">Pull one down, patch it around</a>
      </div>`
    );
  }
});


app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const pokemonName = req.query.name;
  const targetPokemon = pokemon.filter(
    (poke) => poke.name.toLowerCase() === pokemonName.toLowerCase()
  );
  res.send(targetPokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  let index = req.params.indexOfArray;
  if (pokemon[index]) {
    res.send(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});




// EXPORT
module.exports = app;