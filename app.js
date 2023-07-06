// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
    res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`)
});

app.get("/bugs", (req, res) => {
    res.send(`<div>
        <h3>99 little bugs in the code</h3>
        <a href="bugs/101">pull one down, patch it around.</a>
    </div>`);
});

app.get("/bugs/:number", (req, res) => {
    if (req.params.number <= 200) {
        res.send(`<div>
            <h3>${req.params.number} little bugs in the code</h3>
            <a href="${Number(req.params.number) + 2}">pull one down, patch it around.</a>
    </div>`);
    } else {
        res.send(`<div>
            <h3>${req.params.number} little bugs in the code</h3>
            <a href="/bugs">Start Over</a>
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
    let index = req.params.indexOfArray
    if (pokemon[index]) {
        res.send(pokemon[index]);
    } else {
        res.send(`Sorry, no pokemon found at ${index}`)
    }
});


const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

// app.get("/rocks/:index", (req, res) => {
//   res.send(rocks[req.params.index]);
// });

// EXPORT
module.exports = app;