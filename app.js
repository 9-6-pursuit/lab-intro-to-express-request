// DEPENDENCIES
const express = require("express");


// CONFIGURATION
const app = express();


// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

 
  // route that takes three parameters.

app.get("/:verb/:adjective/:noun", (req, res) => {
    console.log(req.params)
    res.send(`Congratulations on starting a new project called ${req.params.verb}-${req.params.adjective}-${req.params.noun}!`);
  });

  //  BUGS

app.get("/bugs", (req, res) => {
  console.log(req.params)
  res.send(`<div>
    <h1>99 little bugs in the code</h1>
    <a href="bugs/101">pPull one down, patch it around</a>
  </div>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  if (req.params.numberOfBugs < 200) {
    res.send(`<div>
      <h3>${req.params.numberOfBugs} little bugs in the code</h3>
      <a href="${Number(req.params.numberOfBugs) +2 }">Pull one down, patch it around</a>
    </div>`);
  } else {
      res.send(`<div>
        <h3>${req.params.numberOfBugs} little bugs in the code</h3>
        <a href="/bugs">Too many bugs!! Start over!</a>
      </div>`);
    }
});

    //-------- POKEMON ---------------

const pokemon = require("./models/pokemon.json");


app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});



app.get("/pokemon/search", (req, res) => {
  res.send();

  //pokemon search requirements would go here.

  
});



app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params;
  if( pokemon[index] ) {
    res.send(pokemon[index]);
  } else {
    res.send (`Sorry, no pokemon found at ${index}`);
  }
});





// EXPORT
module.exports = app;