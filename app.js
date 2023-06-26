// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();



// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Homepage.");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
    const message = `Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun} !`;
    res.send(message);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    const numberOfBugs = parseInt(req.params.numberOfBugs);
    let message, linkText, linkURL;

    if (numberOfBugs > 200) {
        message = `There are over 200 bugs left in the code.`;
        linkText = "Start over";
        linkURL = "/bugs";
    } else {
        message = `${numberOfBugs} little bugs in the code`;
        linkText = "pull one down, patch it around";
        linkURL = `/bugs/${numberOfBugs + 2}`;
    }

    res.send(`<p>${message}</p><a href="${linkURL}">${linkText}</a>`);
});
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
  });

  app.get("/pokemon/search", (req, res) => {
    const name = req.query.name;
  
    if (name) {
      const matchingPokemon = pokemon.find(
        pokemon => pokemon.name.toLowerCase() === name.toLowerCase()
      );
  
      if (matchingPokemon) {
        res.send(matchingPokemon);
      } else {
        const errorMessage = `Sorry, no Pokémon found with the name '${name}'`;
        res.send(errorMessage);
      }
    } else {
      const errorMessage = "Please provide a valid 'name' query parameter for Pokémon search";
      res.send(errorMessage);
    }
  });

app.get("/pokemon/:indexOfArray", (req, res) => {
    const index = parseInt(req.params.indexOfArray);
  
    if (index >= 0 && index < pokemon.length) {
      const selectedPokemon = pokemon[index];
      res.send(selectedPokemon);
    } else {
      const errorMessage = `Sorry, no Pokémon found at /pokemon[${index}]`;
      res.send(errorMessage);
    }
  });
  

// EXPORT
module.exports = app;