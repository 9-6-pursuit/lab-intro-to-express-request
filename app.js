//DEPENDENCIES
const express = require('express');
const pokemon = require('./models/pokemon.json');
//console.log(pokemon[0]);

//CONFIGURATION
const app = express();

//WELCOME MESSAGE
app.get('/', (req, res) => {
    res.send('Welcome 99 Pokemon');
});

//NEW PROJECT NAME GENERATOR
app.get('/:verb/:adjective/:noun', (req, res) => {
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

//99 LITTLE BUGS IN THE CODE
app.get('/bugs', (req, res) => {
    res.send(`99 little bugs in the code 
    </br>
    <a href='bugs/101'>pull one down, patch it around</a>`);
});

//NUMBER OF BUGS
app.get('/bugs/:numberOfBugs', (req, res) => {
    const {numberOfBugs} = req.params
    let link;

    numberOfBugs <= 200 ? link = `<a href='${Number(numberOfBugs) + 2}'>pull one down, patch it around</a>` : link = `<a href='/bugs'>Start Over</a>`

    res.send(`Too many bugs!! Start over!
    </br>
    ${link}`);
});

//POKE-EXPRESS
app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

//POKEMON SEARCH
app.get('/pokemon/search', (req, res) => {
    const {name} = req.query;

    let poki = pokemon.filter((element) => {
        if(element.name.toLowerCase() === name.toLowerCase()){
          return element
        }
      })

    res.send(poki);
});

//INDEX 
app.get('/pokemon/:indexOfArray', (req, res) => {
    const {indexOfArray} = req.params;

    if(typeof pokemon[indexOfArray] === 'undefined') {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    } else {
        res.send(pokemon[indexOfArray])
    }
    
})


// EXPORT
module.exports = app;