// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

// ROUTES
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
    res.send(`Congratulations you have made a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send(`<div>
        <h3> 99 little bugs in the code </h3>
        <a href="bugs/101"> Pull one down, Patch it around </a>
    </div>`);
  });

app.get("/bugs/:numberOfBugs", (req, res) => {
    if (req.params.numberOfBugs <= 200) {
        res.send(`<div>
            <h3> ${req.params.numberOfBugs} little bugs in the code </h3>
            <a href="${Number(req.params.numberOfBugs) + 2}"> Pull one down, Patch it around </a>
        </div>`);
    } else {
        res.send(`<div>
            <h3> ${req.params.numberOfBugs} little bugs in the code </h3>
            <a href="/bugs"> Start over </a>
        </div>`);
        
    }
  });


app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    let pokemonName = req.query.name
    let targetPokemon = pokemon.find((poke) => {
        return poke.name.toLowerCase() === pokemonName
    })
    res.send(targetPokemon);
});



app.get("/pokemon/:indexOfArray", (req, res) => {
    if(typeof pokemon[req.params.indexOfArray] === "undefined") {
        res.send(`sorry, no pokemon found at /pokemon/${req.params.indexOfArray}`)
    } else {
        res.send(pokemon[req.params.indexOfArray]);
    }
});




// EXPORT
module.exports = app;
