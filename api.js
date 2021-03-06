// var unirest = require("unirest");
require('dotenv').config();
const API_KEY = process.env.API_KEY_SPOONACULAR

var unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search");

req.query({
	"query": "burger",
	"diet": "vegetarian",
	"excludeIngredients": "coconut",
	"intolerances": "egg, gluten",
	"number": "10",
	"offset": "0",
	"type": "main course"
});

req.headers({
	"x-rapidapi-key": API_KEY,
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});