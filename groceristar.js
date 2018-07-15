const departments = require('./data/Departments/departments.json');
const grocery = require('./data/Grocery/grocery.json');
const ingredients  = require('./data/Ingredients/ingredients.json');
const users = require('./data/Users/users.json');

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
	let departments = getDepartments();
// return _.reduce(grocery[0]["departments"],function(acc,value){
// 	  return acc + ", " + value;
// 	});
	return _.map(grocery[0]["departments"])
}


module.getAllIngredientsByOneDepartment = function(department){

  return _.filter(getIngredients(),function(o){return o.department === department; })
}

module.exports = module;
