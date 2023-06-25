
// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const pokemon = require("./models/pokemon.json");

// ROUTES
app.get("/", (req, res) => {
  console.log(pokemon[0]);
  res.send("Homepage.");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
    res.send(`Congratulations you have made a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}.`);
});

app.get("/bugs", (req, res) => {
    res.send(`<div>
        <h3>99 little bugs in the code</h3>
        <a href="bugs/101">pull one down, patch it around</a>
    </div>`);
});


app.get("/bugs/:numberOfBugs", (req, res) => {
    if (req.params.numberOfBugs <= 200) {
        res.send(`<div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="${Number(req.params.numberOfBugs) + 2}">pull one down, patch it around</a>
        </div>`);
    } else {
        res.send(`<div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="/bugs">Start over</a>
        </div>`);
    }
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    let pokemonName = req.query.name
    let targetPokemon = pokemon.find((poke) => {
        return poke.name.toLowerCase() === pokemonName.toLowerCase()
    })
    res.send(targetPokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    index = req.params.indexOfArray
    if(pokemon[index]) {
        res.send(pokemon[index]);
    } else {
        res.send(`sorry, no pokemon found at pokemon ${req.params.indexOfArray}`)
    }
 
});


// EXPORT
module.exports = app;