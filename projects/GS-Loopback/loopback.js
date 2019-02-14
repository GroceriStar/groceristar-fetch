const _            = require('lodash');
const fs           = require('fs');
const uuidv1       = require('uuid/v1');

const { parser }   = require('../../helper');



const ultimateGroceryList = require('../../data/Grocery/example/ultimate-gl-from-loopback-server-example.json');

const groceryListWithUserRelations = require('../../data/Grocery/example/grocery-with-user-relations.json')

const dbIngredients =  require('../../data/Ingredients/example/gs-loopback-sample.json');

const getUltimateGrocery = function() {
  return parser(ultimateGroceryList)
}

const getGLwithUserRelations = () => {
  return parser(groceryListWithUserRelations)
}

const getIngredientsSampleFromDB = () => {
  return parser(dbIngredients)
}

// const getIngredients = function() {
//   return parser(ingredients)
// }

// const getDepartments = function() {
//   return parser(departments)
// }








// const getGroceryById = function( id ) {
//
//   let groceries = getGrocery();
//   return [ _.find(groceries, ['id', id]) ];
// };
//
// const getGroceryByName = function(name) {
//   let groceries = getGrocery();
//
//   return _.filter(groceries, function(item) {
//     return item.name === name;
//   })
// }

// const getCountIngOfDepartment = function(){
//   let departments = getDepartments();
//   let result = _.map(departments, function(department){
//       let ingredientsByOneDepartment = getAllIngredientsByOneDepartment(department.name);
//     return {
//       ...department,
//       countIngredients: ingredientsByOneDepartment.length
//     }
//   })
//
//   return result;
// }

// const getAllDepartmentList = function() {
//   let departments = getDepartments();
//   return _.map(departments, item => ({
//     key: uuidv1(),
//     departmentName: item
//   }));
// };

// const getAllIngredientsWithId = function(){
//   let ingredients = getIngredients();
//
//   let result = _.map(ingredients, function(ingredient){
//     return {
//       key: uuidv1(),
//       ...ingredient
//     }
//   })
//
//   return result;
// }

module.exports = {
  getUltimateGrocery,
  getGLwithUserRelations,

  getIngredientsSampleFromDB,


}
