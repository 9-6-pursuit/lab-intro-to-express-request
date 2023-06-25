// DEPENDENCIES
const express = require("express");
const pokemon =require("./models/pokemon.json");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
    res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`);
});

//99 Little Bugs In the Code
app.get("/bugs", (req, res)=> {
    res.send(`
    <h1>99 little bugs in the code</h1>
    <a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
   const { numberOfBugs } = req.params;
   if(Number(numberOfBugs) >= 200){
    res.send(`
    <h1>Too many bugs!! Start over!</h1>
    <a href="http://localhost:8888/bugs">start over</a>`);
      } else {
       res.send(`
       <h1>${numberOfBugs} little bugs in the code</h1>
       <a href="${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`);
      } 
})

//Poke-Express
app.get("/pokemon", (req, res)=> {
    res.json(pokemon);
 });


app.get("/pokemon/search", (req, res) => {
   const { name } = req.query;
   const searchedPoke = pokemon.find((poke) =>
     poke.name.toLowerCase() === name.toLowerCase()
   );
   if (searchedPoke) {
    res.send([searchedPoke])
    } else {
        res.send([])
    }

 });


app.get("/pokemon/:index", (req, res)=> {
   const {index} = req.params;
   if(index > 150){
       res.send(`Sorry, no pokemon found at ${index}`);
   }else{
       res.send(pokemon[index])
   }  
});

app.get("/pokemon-pretty/", (req, res)=> {
   const html = pokemon.map((poke, index) => 
       `<ul>
       <a href="http://localhost:8888/pokemon-pretty/${index}">${poke.name}</a>
       </ul>`).join("");
   res.send(html);
})

app.get("/pokemon-pretty/:index", (req, res)=> {
   const {index} = req.params;
   if(index > 150){
       res.send(`Sorry, no pokemon found at ${index}`);
   }else{
       res.send(pokemon[index])
   }  
});


app.get("*", (req, res) => {
    res.status(404).send("This is not the page you are looking for")
})

// EXPORT
module.exports = app;