const _            = require('lodash');
const departments  = require('./data/Departments/departments.json');
const groceries    = require('./data/Grocery/grocery.json');
const ingredients  = require('./data/Ingredients/ingredients.json');
const users        = require('./data/Users/users.json');




const parser = function ( filename ){

	return JSON.parse( JSON.stringify(filename) )

}

// module.count = function() {
//
// 	console.log('ingredient ' +  _.size() )
// 	console.log('department ' +  _.size() )
// 	console.log('grocery ' +  _.size() )
// 	console.log('users ' +  _.size() )
// 	console.log('ingredient ' +  _.size() )
//
//
// };

module.getIngredients = function() {
	return parser( ingredients )
}

module.getGrocery = function() {
	return parser( groceries )
}

// @TODO i think as showcase is a separated project, we can move this method to
// a separated place, in order to make it cleaner
module.getGroceryShowcase = function() {

	return parser( groceries ).map((item)=>{
		item.height = 200;
		item.css = "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
		return item;
	})
}

module.getUsers = function() {
	return parser( users )
}

module.getDepartments = function() {
	return parser( departments )
}

module.getGroceryById = function(id) {
  return [_.find(parser(groceries), ['id', id])];
};

module.getGroceryByName = function(name){
	return _.filter(parser(groceries),function(item){
		return item.name === name;
	})
}

module.getGroceryByNameWithDepAndIng = function(name){
	let grocery = _.filter(parser(groceries),
	function(item){
		return item.name === name;
	});

	let result = [];
	grocery[0]["departments"].forEach(
		function(department){
		result.push(
			{	"department": department,
				"ingredients" : module.getAllIngredientsByOneDepartment(department)
			});
	});
	return result;
}

module.getGroceryListsWithCountDepartments = function() {
  return _.map(parser(groceries), glist => {
    const obj = {
      id: glist.id,
      name: glist.name,
      departmentsCount: glist.departments.length
    };
    delete obj.departments;
    return obj;
  });
};

module.getAllDepartments = function() {
  const departments = [];
  _.forEach(_.range(0, groceries.length), value =>
    departments.push(..._.map(groceries[value]['departments']))
  );
  return departments;
};

module.getAllIngredientsByOneDepartment = function(department){

	var ingredientsList =
		_.filter(parser(ingredients),function(item){
			return item.department === department;
		});
	return _.map(ingredientsList,'name');
}



module.exports = module;
