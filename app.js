const express = require("express")
const pokemon = require("./models/pokemon.json")

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send(`<div>
        <h3>99 little bugs in the code</h3>
        <a href="bugs/101">Link</a>
    </div>`)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    if(req.params.numberOfBugs < 200 ) {
        res.send(`<div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="${Number(req.params.numberOfBugs) + 2}">Link</a>
        </div>`)
    } else {
        res.send(
        `<div>
            <h3>${req.params.numberOfBugs} little bugs in the code</h3>
            <a href="/bugs">Too many bugs!! Start over!</a>
        </div>`
        )
    }
})


app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get(`/pokemon/search`, (req, res) => {
    let pokemonName = req.query.name
    let targetPokemon = pokemon.find((poke) => {
        return poke.name.toLowerCase() === pokemonName.toLowerCase()
    })
    res.send(targetPokemon)
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    let index = req.params.indexOfArray
    if(pokemon[index]) {
        res.send(pokemon[index])
    } else {
        res.send(`Sorry, no pokemon found at ${index}`)
    }
})




module.exports = app