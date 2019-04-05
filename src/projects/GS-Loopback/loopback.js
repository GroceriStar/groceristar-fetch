const _ = require('lodash')
// const fs = require('fs')
const uuidv1 = require('uuid/v1')
const dayjs = require('dayjs')

const { __get } = require('../../helper')

const {
  ultimateGroceryList,
  groceryListWithUserRelations,
  dbIngredients
} = require('./files')

// @TODO can we update our methods - but we'll need to go step by step,
// because these methods used in our react projects.
// so I propose do it very carefully
const getUltimateGrocery = function () {
  return __get(ultimateGroceryList)
}

const getGLwithUserRelations = () => {
  return __get(groceryListWithUserRelations)
}

const getIngredientsSampleFromDB = () => {
  return __get(dbIngredients)
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

const getUserObject = function(name) {
  var userObj = {
    "name": name,
    "img": "false",
    "desc": "false",
    "slug": "false",
    "created_at": dayjs().format(),
    "updated_at": dayjs().format(),
    "id": uuidv1(),
    "hideThisIds": [],
    "purchasedIds": [],
    "ingredientIds": []
  }
  const hideIdsCount = Math.floor(Math.random() * 5)
  const purchasedIdsCount = Math.floor(Math.random() * 10)
  const ingredientIdsCount = Math.floor(Math.random() * 50)

  for (let i = 0; i < 50; i++) {
    if (i < hideIdsCount) {
      userObj.hideThisIds[i] = uuidv1()
    }
    if (i < purchasedIdsCount) {
      userObj.purchasedIds[i] = uuidv1()
    }
    if (i < ingredientIdsCount) {
      userObj.ingredientIds[i] = uuidv1()
    }
  }
  return userObj;
}

module.exports = {
  getUltimateGrocery,
  getGLwithUserRelations,

  getUserObject,
  getIngredientsSampleFromDB

}
