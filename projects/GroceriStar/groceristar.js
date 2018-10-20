const _            = require('lodash');
const departments  = require('../../data/Departments/departments.json');
let groceries      = require('../../data/Grocery/grocery.json');
const ingredients  = require('../../data/Ingredients/ingredients.json');
const users        = require('../../data/Users/users.json');
const fs           = require('fs');
const uuid         = require('uuid');

const parser = function ( filename ){

	return JSON.parse( JSON.stringify(filename) )

}



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

module.getAllDepartmentList = function() {
  return _.map(this.getDepartments(), item => ({
    key: uuid(),
    departmentName: item
  }));
};

module.getAllIngredientsList = function(department) {
  const ings = this.getAllIngredientsByOneDepartment(department);
  return ings.map(item => ({
    key: uuid(),
    name: item.name,
    isChecked: false
  }));
};

module.getAllGrocery = function() {
  return _.map(parser(groceries), item => ({
    key: uuid(),
    ...item
  }));
};

module.getAllGroceryDepartment = function(departmentArray) {
  const departmentArrayObject = departmentArray.map(item => ({
    key: uuid(),
    departmentName: item,
    isChecked: false
  }));
  return departmentArrayObject;
};

module.createNewGroceryList = function(newDepartment) {
  const nameExists = _.find(
    groceries,
    item => item.name === newDepartment.name
  );
  !nameExists && newGroceryList(newDepartment);
};

//@TODO should work now.
function newGroceryList(newDepartment) {
  const groceriesFile = fs.createWriteStream('./data/Grocery/grocery.json');
  const newGrocery = [...parser(groceries), newDepartment];
  groceriesFile.write(JSON.stringify(newGrocery, null, 2));
  groceries = newGrocery;
}

module.exports = module;
