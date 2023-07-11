// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const pokemon = require("./models/pokemon.json");


// ROUTES
app.get("/", (req, res) => {
  console.log(pokemon[0]);
  res.send("Welcome to Express Name Generator");
});

app.get("/bugs", (req, res) => {
    res.send(`<div>
        <h3>99 little bugs in the code</h3> 
        <a href="/bugs/101">pull one down, patch it around</a>
    <div>`);
});

app.get("/bugs/:index", (req, res) => {
    const { index } = req.params
    if (index <= 200) {
        res.send(`<div>
            <h3>${index} little bugs in the code </h3> 
            <a href="${Number(req.params.index) + 2}">pull one down, patch it around</a>
        </div>`);
    } else {
        res.send(`<div>
            <h3>${index} little bugs in the code </h3> 
            <a href="/bugs">Start over</a>
        </div>`);
    }
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    let pokemonName = req.query.name
    let targetPokemon = pokemon.find((poke)=>{
        return poke.name.toLowerCase() === pokemonName
    })
    res.send(targetPokemon);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    let index = req.params.indexOfArray
    if (pokemon[index]){
        res.send(pokemon[index])
    } else {
        res.send(`sorry, no pokemon at /pokemon/${index}`)
    }
});





app.get("/:verb/:adjective/:noun", (req, res) => {
    console.log(req.params);
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});
// EXPORT
module.exports = app;