// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json")

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
    console.log(pokemon[0])
    res.send(`
        <div>
            <h1>Welcome 99 Pokemon</h1>
            <ul>
                <li> <a href="/bugs">Bugs</a></li>
                <li> <a href="/pokemon">Pokemon</a></li>
            </ul>
            <a href="github.com/sarai-ii">Github</a>
            <style>
            body {  
                background: pink;
                display: grid;
                grid-template: row;
                text-align: center;
            }
            </style>
        </div>
    `);
});
//DESCRIPTION, ADJECTIVES, VERBS, NOUNS

app.get("/:verb/:adjective/:noun", (req, res) => {
    // res.send(req.params);
    res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}`);
});

//BUGS
app.get("/bugs", (req, res) => {
    res.send(`
        <div>
            <h3> 99 little bugs in the code</h3>
            <a href="bugs/101">pull one down, patch it around</a>
            <style>
            body {
                    
                background: pink;
                display: grid;
                grid-template: row;
                text-align: center;
            }
            </style>
            <a href="/">Back To Home Page</a>
        </div>
    `);
  });
app.get("/bugs/:numberOfBugs", (req, res) => {
    if(req.params.numberOfBugs <= 200)
    {res.send(`
        <div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="${Number(req.params.numberOfBugs) + 2}">Pull one down, patch it around</a>
            <style>
                body {
                    
                    background: pink;
                    display: grid;
                    grid-template: row;
                    text-align: center;
                }
                a {
                    color: white;
                }
            </style>
            <br>
            <a href="/">Back To Home Page</a>
        </div>`);
    }else{
        res.send(`
        <div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="/bugs">"Too many bugs!! Start over!"</a>
            <style>
                body {
                    background: pink;
                }
                a {
                    color: white;
                    text-align:center;
                }
            </style>
            <a href="/">Back To Home Page</a>
        </div>`)
    }
  });
//POKEMON
app.get("/pokemon", (req, res) => {
    res.send(pokemon);
  });

app.get("/pokemon/search", (req, res) => {
    let pokemonName = req.query.name
    let targetPokemon = pokemon.find((poke)=> {
        return poke.name.toLowerCase() === pokemonName.toLowerCase()
    })
    res.send(targetPokemon);
  });

app.get("/pokemon/:index", (req, res) => {
    let index = req.params.index
    if(pokemon[index]){
        res.send(pokemon[index]);
    }else{
        res.send(`sorry, no pokemon found at ${index}`)
        
    }
});


// EXPORT
module.exports = app;