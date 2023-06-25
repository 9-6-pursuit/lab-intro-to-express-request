// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const pokemons = require("./models/pokemon.json");

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  res.send(
    `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send(`<div>
    <h1>99 little bugs in the code</h1>
    <a href="bugs/101">pull one down, patch it around</a>
    <div>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  if (req.params.numberOfBugs <= 200) {
    res.send(`<div>
    <h1>${req.params.numberOfBugs} little bugs in the code</h1>
    <a href="${
      Number(req.params.numberOfBugs) + 2
    }">pull one down, patch it around</a>
    <div>`);
  } else {
    res.send(`<div>
    <h3>${req.params.numberOfBugs} little bugs in the code</h3>
    <a href="/bugs">Start over</a>
    <div>`);
  }
});

app.get("/pokemon", (req, res) => {
  res.send(pokemons);
});

app.get("/pokemon/search", (req, res) => {
  let pokemonName = req.query.name;
  let targetPokemon = pokemons.filter((poke) => {
    return (poke.name.toLowerCase() === pokemonName.toLowerCase())
  });
  if (targetPokemon) {
    res.send(targetPokemon);
  } else {
    res.send(`Sorry, no pokemon found at /plkemon${pokemonName}`);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  let index = req.params.indexOfArray;
  if (pokemons[index]) {
    res.send(pokemons[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

// EXPORT
module.exports = app;
