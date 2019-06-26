function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as _ from 'lodash';
import { __generateId, __generateDate } from "./utils"; // @TODO this files we'll redo soon. link: https://github.com/GroceriStar/sd/issues/76
// we don't need them at this moment, but later - it'll be part of our graphql-server functionality

import { ultimateGroceryList, groceryListWithUserRelations, dbIngredients, ingredients, departments, groceries } from '@files'; // @TODO can we update our methods - but we'll need to go step by step,
// because these methods used in our react projects.
// so I propose do it very carefully

var getUltimateGrocery = function getUltimateGrocery() {
  return ultimateGroceryList;
};

var getGLwithUserRelations = function getGLwithUserRelations() {
  return groceryListWithUserRelations;
};

var getIngredientsSampleFromDB = function getIngredientsSampleFromDB() {
  return dbIngredients;
};

var getIngredients = function getIngredients() {
  return ingredients;
};

var getDepartments = function getDepartments() {
  return departments;
};

var getGroceryById = function getGroceryById(id) {
  return [_.find(groceries, ['id', id])];
}; //


var getGroceryByName = function getGroceryByName(name) {
  return _.filter(groceries, function (item) {
    return item.name === name;
  });
};

var getCountIngOfDepartment = function getCountIngOfDepartment() {
  var result = _.map(departments, function (department) {
    var ingredientsByOneDepartment = getAllIngredientsByOneDepartment(department.name);
    return _objectSpread({}, department, {
      countIngredients: ingredientsByOneDepartment.length
    });
  });

  return result;
};

var getAllDepartmentList = function getAllDepartmentList() {
  return _.map(departments, function (item) {
    return {
      key: uuidv1(),
      departmentName: item
    };
  });
};

var getAllIngredientsWithId = function getAllIngredientsWithId() {
  var ingredients = getIngredients();

  var result = _.map(ingredients, function (ingredient) {
    return _objectSpread({
      key: uuidv1()
    }, ingredient);
  });

  return result;
};

var getUserObject = function getUserObject(name) {
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
  };
  var hideIdsCount = Math.floor(Math.random() * 5);
  var purchasedIdsCount = Math.floor(Math.random() * 10);
  var ingredientIdsCount = Math.floor(Math.random() * 50);

  for (var i = 0; i < 50; i++) {
    if (i < hideIdsCount) {
      userObj.hideThisIds[i] = __generateId();
    }

    if (i < purchasedIdsCount) {
      userObj.purchasedIds[i] = __generateId();
    }

    if (i < ingredientIdsCount) {
      userObj.ingredientIds[i] = __generateId();
    }
  }

  return userObj; // return []
};

export { getUltimateGrocery, getGLwithUserRelations, getUserObject, getIngredientsSampleFromDB };