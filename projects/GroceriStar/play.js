const _            = require('lodash');
// const uuidv1         = require('uuid/v1');

const departments  = require('../../data/Departments/departments.json');
let groceries      = require('../../data/Grocery/grocery.json');
const ingredients  = require('../../data/Ingredients/ingredients.json');
const users        = require('../../data/Users/users.json');
const fs           = require('fs');


const groceristar = require('../GroceriStar/groceristar');
const search      = require('../Search/search');


const parser = function ( filename ){

	return JSON.parse( JSON.stringify(filename) )

}


//can be used in order to count stuff and adjust tests, that we have at StaticFiles.test.js
// const count = function() {
//
// 	// console.log('ingredient ' +  _.size(departments) )
// 	console.log('department ' +  _.size(departments) )
// 	console.log('grocery '    +  _.size(groceries) )
// 	console.log('users '      +  _.size(users) )
// 	console.log('ingredient ' +  _.size(ingredients) )
//
//
// };
// count();
// -----

// console.log(groceristar.getAllIngredientsByOneDepartmentKey("Fresh vegetables"));
// console.log(groceristar.getGroceryByNameWithDepAndIngKey("Ultimate Grocery List"));
// console.log(groceristar.getGroceriesWithDepIngKey());

// console.log(groceristar.getAllIngredientsWithId());
// console.log(groceristar.getAllDepartmentsWithId());

// console.log(groceristar.getAllIngredientsList("Fresh vegetables"));



// getGroceryListsByDepartment = department => {
//   capitalisedDepartment = department[0].toUpperCase() + department.toLowerCase().substr(1);
// 	let parsedGroceries = parser(groceries),groceryList = [];
// 	parsedGroceries.map(grocery => {
// 		if(grocery.departments.includes(department.toLowerCase()) ||
//         grocery.departments.includes(department.toUpperCase()) ||
//         grocery.departments.includes(capitalisedDepartment)
//       ) {
//         groceryList.push({name: grocery.name, id: grocery.id});
//       }
//
// 	})
//   return groceryList;
// }
//
//
// console.log(getGroceryListsByDepartment('protein'));
