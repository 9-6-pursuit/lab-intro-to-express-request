const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.json");

app.get("/", (request, response)=> {
    console.log(pokemon[0])
    response.send("<h1>Welcome to the home page</h1>")
    })


app.get("/:verb/:adjective/:noun", (request, response)=> {
    response.send(`Congratulations you have made a new project called ${request.params.verb}-${request.params.adjective}-${request.params.noun}.`)
    })


app.get("/bugs", (request, response)=> {
        response.send(`<div>
        <h3>99 little bugs in the code</h3>
        <a href="bugs/101">Pull one down, Patch it around</a>
        </div>`)
        })

        
app.get("/bugs/:number", (request, response)=> {
    if(request.params.number <= 200){
       
        response.send(`<div>
        <h3>${request.params.number} little bugs in the code</h3>
        <a href="${Number(request.params.number) + 2}">Pull one down, Patch it around</a>
        </div>`);
        
    }else {
        response.send(`<div>
        <h3>${request.params.number} little bugs in the code</h3>
        <a href="/bugs">Start Over</a>
        </div>`);
    }
        })

  


module.exports = app;