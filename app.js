const express = require("express");

const app = express();
const pokemon = require("./models/pokemon.json");

app.get("/", (request, response)=> {
    console.log(pokemon[0])
    response.send("Welcome 99 Pokemon")
    })


app.get("/pokemon", (request, response)=> {
    response.send(pokemon)
    })

//BONUS
app.get("/pokemon-pretty", (request, response)=> {
    response.send(pokemon)
    })


app.get("/pokemon", (request, response)=> {
    response.send(pokemon)
    })
// 

app.get("/pokemon/search", (request, response)=> {
    let pokemonName = request.query.name
    let targetPokemon = pokemon.find((poke) => {
        return poke.name.toLowerCase() === pokemonName.toLowerCase()
    })
    response.send(targetPokemon)
    })


app.get("/pokemon/:index", (request, response)=> {
        let index = request.params.index
        
        if(pokemon[index]){
            response.send(pokemon[index])
        }else {
            response.send(`Sorry, no pokemon found at ${index}`)
       }
    })


app.get("/:verb/:adjective/:noun", (request, response)=> {
    response.send(`Congratulations on starting a new project called ${request.params.verb}-${request.params.adjective}-${request.params.noun}!`)
    })


app.get("/bugs", (request, response)=> {
        response.send(`<div>
        <h3>99 little bugs in the code</h3>
        <a href="bugs/101">Pull one down, Patch it around</a>
        </div>`)
        })

        
app.get("/bugs/:number", (request, response)=> {
    if(request.params.number <= 199){
       
        response.send(`<div>
        <h3>${request.params.number} little bugs in the code</h3>
        <a href="${Number(request.params.number) + 2}">Pull one down, Patch it around</a>
        </div>`);
        
    }else {
        response.send(`<div>
        <h3>${request.params.number} little bugs in the code</h3>
        <a href="/bugs">Too many bugs!! Start over!</a>
        </div>`);
    }
        })

  


module.exports = app;