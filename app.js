//Dependencies
const express = require("express")

//Configaration
const app =express()



//Routes
app.get("/", (request, response)=>{
    response.send("Welcome 99 Pokemon")
    })


    app.get("/pokemon", (request, response)=>{
        response.send(pokemon)
        })

    //Search pokemon
    app.get("/pokemon/search", (request, response)=>{
        let pokemonName = request.query.name
        let targetPokemon = pokemon.find((poke)=>{
            return poke.name.toLowerCase() ===pokemonName.toLowerCase()
        })
        if(targetPokemon){
            response.send([targetPokemon])
        } else {
            response.send([])
        }
        }) 

    //Pokemon by Index
    app.get("/pokemon/:indexOfPokemon", (request, response)=>{
        let index = request.params.indexOfPokemon
        if(pokemon[index]){
            response.send(pokemon[index])
        } else {
            response.send(`Sorry, no pokemon found at ${index}`)
        }
        })

   


app.get("/:verb/:adjective/:noun", (req, res)=>{
    res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`)
    })

app.get("/bugs", (req, res)=>{
    res.send(`
   <h3> 199 little bugs in the code </h3> <br>
        <a href ="bugs/101">Pull one down, patch it around</a>
        `)
})

app.get("/bugs/:numberOfBugs", (req, res)=>{
    if(req.params.numberOfBugs <=200){
        res.send(`<div>
        <h3>${req.params.numberOfBugs} little bugs in the code </h3>
        <a href="${Number(req.params.numberOfBugs)+2}">next</a>
        </div>`)
    } else {
        res.send("Too many bugs!! Start over!" )
    }
})




const pokemon = require("./models/pokemon.json")



//Export
module.exports = app;