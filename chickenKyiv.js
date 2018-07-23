const ingredients3 = require('./data/Ingredients/ingredients3.json');
const menu         = require('./data/Menu/menu.json');
const recipe       = require('./data/Recipe4/recipe.json');

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

module.exports = module;
