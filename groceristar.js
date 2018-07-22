const departments = require('./data/Departments/departments.json');
const grocery = require('./data/Grocery/grocery.json');
const ingredients  = require('./data/Ingredients/ingredients.json');
const users = require('./data/Users/users.json');
const ingredients3 = require('./data/Ingredients/ingredients3.json');
const menu = require('./data/Menu/menu.json');
const recipe = require('./data/Recipe4/recipe.json');

var _ = require('lodash');

const parser = function ( filename ){

	return JSON.parse( JSON.stringify(filename) )

}

module.getIngredients = function() {
	return parser( ingredients )
}

module.getGrocery = function() {
	return parser( grocery )
}

module.getUsers = function() {
	return parser( users )
}

module.getDepartments = function() {
	return parser( departments )
}

module.getAllDepartments = function(){
	return _.map(grocery[0]["departments"])
}

module.getAllIngredientsByOneDepartment = function(department){

	var ingredientsByOneDepartment =
									_.filter(parser(ingredients),function(o){
										return o.department === department;
									});
	return _.map(ingredientsByOneDepartment,'name');
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
