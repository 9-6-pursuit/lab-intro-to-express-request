// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Express Minerals App");
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    let pokemonName = req.query.name
    let targetPokemon = pokemon.find(poke => {
        return poke.name.toLowerCase() === pokemonName.toLowerCase()
    })
    res.send(targetPokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    if (pokemon[req.params.indexOfArray]) {
        res.send(pokemon[req.params.indexOfArray]);
    } else {
        res.send(`sorry, no pokemon found at /pokemon/${req.params.indexOfArray}`);
    }
});



app.get("/bugs", (req, res) => {
    res.send(`<div>
        <h3> 99 little bugs in the code, 99 little bugs</h3>
        <a href="/bugs/101">Pull one down, Patch it around</a>
    </div>`
    );
});

app.get("/bugs/:number", (req, res) => {
    const { number } = req.params;
    if (number <= 200) {
        res.send(`<div>
            <h3> ${number} little bugs in the code, 99 little bugs</h3>
            <a href=${Number(number) + 2}>Pull one down, Patch it around</a>
        </div>`
        );
    } else {
    res.send(`<div>
        <h3> ${number} little bugs in the code, 99 little bugs</h3>
        <a href="/bugs">Start Over</a>
    </div>`
    );
    }

});

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb } = req.params;
    const { adjective } = req.params;
    const { noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});
// EXPORT
module.exports = app;