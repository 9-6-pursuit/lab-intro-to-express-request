/** @format */

const pokemonData = require("./models/pokemon.json");
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
	res.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
	const { verb, adjective, noun } = req.params;
	const projectName = `${verb}-${adjective}-${noun}`;
	res.send(
		`Congratulations on starting a new project called ${projectName}!`
	);
});

app.get("/bugs", (req, res) => {
	const numberOfBugs = 99;
	const link = `<a href="/bugs/101">Pull one down, patch it around</a>`;
	res.send(`${numberOfBugs} little bugs in the code<br>${link}`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
	const { numberOfBugs } = req.params;

	if (numberOfBugs >= 200) {
		const link = "Start over!";
		res.send(`Too many bugs!! ${link}`);
	} else {
		const nextNumberOfBugs = parseInt(numberOfBugs) + 2;
		const link = `<a href="/bugs/${nextNumberOfBugs}">Pull one down, patch it around</a>`;
		res.send(`${numberOfBugs} little bugs in the code<br>${link}`);
	}
});

app.get("/pokemon", (req, res) => {
	res.send(pokemonData);
});

app.get("/pokemon/search", (req, res) => {
	const { name } = req.query;
	const foundPokemon = pokemonData.filter(
		(pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
	);

	if (foundPokemon.length > 0) {
		res.send(foundPokemon);
	} else {
		res.send([]);
	}
});

app.get("/pokemon/:indexOfArray", (req, res) => {
	const { indexOfArray } = req.params;
	if (indexOfArray > pokemonData.length) {
		res.send(`Sorry, no pokemon found at ${indexOfArray}`);
	} else {
		const pokemon = pokemonData[indexOfArray];
		if (pokemon) {
			res.send(pokemon);
		} else {
			res.send([]);
		}
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

module.exports = app;
