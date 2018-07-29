const _            = require('lodash');
const departments  = require('./data/Departments/departments.json');
const grocery      = require('./data/Grocery/grocery.json');
const ingredients  = require('./data/Ingredients/ingredients.json');
const users        = require('./data/Users/users.json');




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

// @TODO will work only when we have one grocery list
module.getAllDepartments = function(){
	return _.map(grocery[0]["departments"])
}

module.getAllIngredientsByOneDepartment = function(department){

	var ingredientsList = 
		_.filter(parser(ingredients),function(item){
			return item.department === department;
		});
	return _.map(ingredientsList,'name');
}



module.exports = module;
