// DEPENDENCIES
const express = require("express");
const pokemon = require('./models/pokemon.json')

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
  });


app.get("/:verb/:adjective/:noun", (req, res) => {
    const words = req.params

    res.send(`Congratulations on starting a new project called ${words.verb}-${words.adjective}-${words.noun}!`);
  });


app.get("/bugs", (req, res) => {
    res.send(`<div>
        <h3>99 little bugs in the code</h3>
        <a href="/bugs/101">pull one down, patch it around</a>
        </div>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    if (req.params.numberOfBugs < 200){
        res.send(`<div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="${Number(req.params.numberOfBugs) + 2}"> Pull one down, patch it around</a>
        </div>`)
    }else{
        res.send(`<div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="/bugs">Too many bugs!! Start over!</a>
        </div>`)
    }
})


app.get("/pokemon", (req,res) =>{
    res.send(pokemon)
})

app.get("/pokemon/search", (req,res) =>{
    let pokemonName = req.query.name
    let targetPokemon = pokemon.find((poke) => {return poke.name.toLowerCase() === pokemonName.toLowerCase()} )

    if (targetPokemon){
        res.send([targetPokemon])
    }else{
        res.send([])
    }
})

app.get("/pokemon/:indexOfArray", (req,res) =>{
    if (!pokemon[req.params.indexOfArray]){
        res.send(`Sorry, no pokemon found at ${req.params.indexOfArray}`)
    }else{
        res.send(pokemon[req.params.indexOfArray])
    }
})


  module.exports = app;