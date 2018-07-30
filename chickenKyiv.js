const ingredients3 = require('./data/Ingredients/ingredients3.json');
const menu         = require('./data/Menu/menu.json');
const recipe       = require('./data/Recipe4/recipe.json');
const nutritions1  = require('./data/Nutrition/nutritions1.json');
const nutritions2  = require('./data/Nutrition/nutritions2.json');


const parser = function ( filename ){

	return JSON.parse( JSON.stringify(filename) )
}

module.getIngredients3 = function(){
	return parser(ingredients3)
}

module.getMenu = function() {
	return parser(menu)
}

module.getRecipe = function(){
	return parser(recipe)
}

module.getNutritions1() = function(){
	return parser(nutritions1)
}

module.getNutritions2 = function() {
	return parser(nutritions2)
}

module.exports = module;
