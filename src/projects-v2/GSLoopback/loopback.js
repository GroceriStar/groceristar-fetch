// const _ = require('lodash')
// const fs = require('fs')

const {
  // __get,
  __generateId,
  __generateDate
} = require('../../utils')

// @TODO this files we'll redo soon. link: https://github.com/GroceriStar/sd/issues/76
// we don't need them at this moment, but later - it'll be part of our graphql-server functionality
// const {
//   ultimateGroceryList,
//   groceryListWithUserRelations,
//   dbIngredients
// } = require('./files')

// @TODO can we update our methods - but we'll need to go step by step,
// because these methods used in our react projects.
// so I propose do it very carefully
const getUltimateGrocery = function () {
  // return __get(ultimateGroceryList)
  return []
}

const getGLwithUserRelations = () => {
  // return __get(groceryListWithUserRelations)
  return []
}

const getIngredientsSampleFromDB = () => {
  // return __get(dbIngredients)
  return []
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

const getUserObject = function (name) {
  var userObj = {
    'name': name,
    'img': 'false',
    'desc': 'false',
    'slug': 'false',
    'created_at': __generateDate(),
    'updated_at': __generateDate(),
    'id': __generateId(),
    'hideThisIds': [],
    'purchasedIds': [],
    'ingredientIds': []
  }
  const hideIdsCount = Math.floor(Math.random() * 5)
  const purchasedIdsCount = Math.floor(Math.random() * 10)
  const ingredientIdsCount = Math.floor(Math.random() * 50)

  for (let i = 0; i < 50; i++) {
    if (i < hideIdsCount) {
      userObj.hideThisIds[i] = __generateId()
    }
    if (i < purchasedIdsCount) {
      userObj.purchasedIds[i] = __generateId()
    }
    if (i < ingredientIdsCount) {
      userObj.ingredientIds[i] = __generateId()
    }
  }
  // return userObj
  return []
}

module.exports = {
  getUltimateGrocery,
  getGLwithUserRelations,

  getUserObject,
  getIngredientsSampleFromDB

}
