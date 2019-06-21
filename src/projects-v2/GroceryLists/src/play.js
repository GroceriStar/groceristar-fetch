// const _ = require('lodash')

// const files = {
//   departments,
//   groceries,
//   ingredients,
//   users
// } = require('./files')
// const fs = require('fs')

import {
  // parser,
  __l
} from '../../utils'

// console.log(JSON.parse( JSON.stringify(departments) ))

import groceristar from '../GroceriStar/groceristar'

import methods from './index'
// const search = require('../Search/search')

// can be used in order to count stuff and adjust tests, that we have at StaticFiles.test.js
// const count = function() {
//

//  console.log('department ' +  _.size(departments) )
//  console.log('grocery '    +  _.size(groceries) )
//  console.log('users '      +  _.size(users) )
//  console.log('ingredient ' +  _.size(ingredients) )
//
//
// };
// count();
// -----
// groceristar.getGroceriesWithDepIngKey("Grocery List Essentials")

__l(groceristar.getGroceriesWithDepIngKey('Grocery List Essentials'))
// __l(groceristar.getGroceriesWithDepIngKey("Ultimate Grocery List"))
// __l(groceristar.getGroceriesWithDepIngKey("19 Gluten-Free Foods Shopping List"))

// console.log(groceristar.getAllIngredientsByOneDepartmentKey("Fresh vegetables"));
// console.log(groceristar.getGroceryByNameWithDepAndIngKey("Ultimate Grocery List"));
// console.log(groceristar.getGroceriesWithDepIngKey());

// console.log(groceristar.getAllIngredientsWithId());
// console.log(groceristar.getAllDepartmentsWithId());

// console.log(groceristar.getAllIngredientsList("Fresh vegetables"));

// console.log(groceristar.getGroceriesWithDepIngKey());

// console.log(groceristar.getAllIngredientsByOneDepartmentKey("Condiments / Sauces", "888383883"));
// console.log(groceristar.getGroceriesWithDepIngKey());

// getGroceryListsByDepartment = department => {
//  capitalisedDepartment = department[0].toUpperCase() + department.toLowerCase().substr(1);
//  let parsedGroceries = parser(groceries),groceryList = [];
//  parsedGroceries.map(grocery => {
//  if(grocery.departments.includes(department.toLowerCase()) ||
//         grocery.departments.includes(department.toUpperCase()) ||
//         grocery.departments.includes(capitalisedDepartment)
//       ) {
//         groceryList.push({name: grocery.name, id: grocery.id});
//       }
//
//  })
//   return groceryList;
// }
//
//
// console.log(getGroceryListsByDepartment('protein'));
