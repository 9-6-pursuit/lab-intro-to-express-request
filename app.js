//Dependencies 
const express = require("express");
const app = express();
const pokemon = require("./pokemon.json");
console.log(pokemon.results[0]);
console.log(pokemon.results.length);

app.get("/", (req, res) => {
    response.send("Express Request Lab")
});

app.get("/:verb/:adjective/:noun", (req, res) => {
    console.log(req.params);
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb} ${adjective} ${noun}`);
})

app.get("/bugs", (req, res) => {
       res.send(`
            <h1>99 little bugs in the code</h1>
            <a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>
        `);
})

app.get("/bugs/:bugsRemaining", (req, res) => {
    const bugsRemaining = parseInt(req.params.bugsRemaining);
//The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN .  the main purpose of using the parseInt function is to extract a number from a string.
    if (bugsRemaining > 200) {
        res.send(`
            <h1>Too many bugs to count!</h1>
            <a href="/bugs">Start Over</a>
        `)
    } else {
        res.send(`
            <h1>${bugsRemaining} little bugs in the code </h1>
            <a href="/bugs/${bugsRemaining + 2}"> pull one down, patch it around </a>
        `)
    }
})
//search route goes before the index route because it is more specific
app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const pokemonSearch = pokemon.results.find((p) => p.name.toLowerCase() === name.toLowerCase())

    if(pokemonSearch) {
        res.json(pokemonSearch);
    } else {
        res.status(404).json({error: "Sorry, no Pokemon found with that name."})
    }  
});

app.get("/pokemon-pretty", (req,res) => {
    const pokemonList = pokemon.results.map((result, index) => {
        return `<li><a href="/pokemon-pretty/${index}">${result.name}</a></li>`
    });

    const html = `
        <html>
            <head>
                <title>Pokemon List</title>
            </head>
            <body>
                <h1>Pokemon List</h1>
                <p>Select a pokemon</p>
                <ul>${pokemonList.join("")}</ul>
            </body>
        </html>
        `;
    res.send(html);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
    const index = parseInt(req.params.indexOfArray);
    const selectedPokemon = pokemon.results[index];
    const html = `
        <html>
            <head>
                <title>${selectedPokemon.name}</title>
            </head>
            <body>
                <h2>${selectedPokemon.name}</h2>
                <ul>
                    <li>Find all its stats here: <a href=${selectedPokemon.url}> ${selectedPokemon.url}</a></li>
                </ul>
            </body>
        </html>
    `;
    if(index < pokemon.results.length) {
        res.send(html);
    } else {
        res.send(`sorry, no pokemon found at /pokemon/${[index]}`)
    }
})
//Export
module.exports = app;