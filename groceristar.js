const _            = require('lodash');
const departments  = require('./data/Departments/departments.json');
const groceries    = require('./data/Grocery/grocery.json');
const ingredients  = require('./data/Ingredients/ingredients.json');
const users        = require('./data/Users/users.json');




const parser = function ( filename ){

	return JSON.parse( JSON.stringify(filename) )

}

module.getIngredients = function() {
	return parser( ingredients )
}

module.getGrocery = function() {
	return parser( groceries )
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
