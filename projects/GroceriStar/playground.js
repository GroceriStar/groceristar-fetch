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
