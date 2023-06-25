// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    let pokemonName = req.query.name
    let targetPokemon = pokemon.find(poke => {
        return poke.name.toLowerCase() === pokemonName.toLowerCase()
    })
    let arr = [targetPokemon]
    res.send(targetPokemon ? arr : []);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    if (pokemon[req.params.indexOfArray]) {
        res.send(pokemon[req.params.indexOfArray]);
    } else {
        res.send(`Sorry, no pokemon found at ${req.params.indexOfArray}`);
    }
});



app.get("/bugs", (req, res) => {
    res.send(`<div>
        <h3> 99 little bugs in the code, 99 little bugs</h3>
        <a href="/bugs/101">Pull one down, Patch it around</a>
    </div>`
    );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    console.log(numberOfBugs)
    if (numberOfBugs < 200) {
        res.send(`<div>
            <h3> ${numberOfBugs} little bugs in the code, 99 little bugs</h3>
            <a href=${Number(numberOfBugs) + 2}>Pull one down, patch it around</a>
        </div>`
        );
    } else {
    res.send(`<div>
        <h3> ${numberOfBugs} little bugs in the code, 201 little bugs in the code</h3>
        <a href="/bugs">Too many bugs!! Start over!</a>
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