// // DEPENDENCIES
// const express = require("express");

// // CONFIGURATION
// const app = express();

// // ROUTES
// app.get("/", (req, res) => {
//   res.send("Homepage.");
// });

// app.get("/:verb/:adjective/:noun", (req, res) => {
// const { verb, adjective, noun } = req.params;
// res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
// });


// app.get("/bugs", (req, res) => {
// res.send(`99 little bugs in the code. <a href="/bugs/101">pull one down, patch it around</a>`);
// });

// app.get("/bugs/:numberOfBugs", (req, res) => {
// const { numberOfBugs } = req.params;
// if(numberOfBugs < 200) {
//     res.send(`${numberOfBugs} little bugs in the code. <a href="/bugs/${parseInt(numberOfBugs)+2}">pull one down, patch it around</a>`);
// } else {
//     res.send(`${numberOfBugs} little bugs in the code. <a href="/bugs">Start over</a>`);
// }
// });  

// // Load the Pokemon JSON
// const pokemon = require("./models/pokemon.json");

// // ROUTES
// app.get("/pokemon", (req, res) => {
//     res.send(pokemon);
//   });


//   app.get("/pokemon/search", (req, res) => {
//     const { name } = req.query;
//     const result = pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());

//         if(result) {
//             res.send(result);
//         } else {
//             res.send(`No pokemon found with the name: ${name}`);
//         }
// });

// app.get("/pokemon/:indexOfArray", (req, res) => {
//     const index = parseInt(req.params.indexOfArray);

//         if(index >= 0 && index < pokemon.length) {
//             res.send(pokemon[index]);
//         } else {
//             res.send(`Sorry, no pokemon found at /pokemon/${index}`);
//         }
// });


// // EXPORT
// module.exports = app;





// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// Load the Pokemon JSON
const pokemon = require("./models/pokemon.json");

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

app.get("/bugs", (req, res) => {
  res.send(`99 little bugs in the code. <a href="/bugs/101">pull one down, patch it around</a>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    if(numberOfBugs < 200) {
        res.send(`${numberOfBugs} little bugs in the code. <a href="/bugs/${parseInt(numberOfBugs)+2}">Pull one down, patch it around</a>`);
    } else {
        res.send("Too many bugs!! Start over!");
    }
});


// ROUTES FOR POKEMON
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const result = pokemon.find(p => p.name.toLowerCase() === name.toLowerCase());
    if(result) {
        res.json([result]);  // Changed to json response
    } else {
        res.json([]); // Respond with an empty array instead of a string
    }
});



app.get("/pokemon/:indexOfArray", (req, res) => {
    const index = parseInt(req.params.indexOfArray);
    if(index >= 0 && index < pokemon.length) {
        res.send(pokemon[index]);
    } else {
        res.send(`Sorry, no pokemon found at ${index}`);
    }
});


// EXPORT
module.exports = app;
