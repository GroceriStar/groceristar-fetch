var _require2;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ = require('lodash');

var _require = require("../../utils"),
    __find = _require.__find,
    __generateDate = _require.__generateDate,
    __generateId = _require.__generateId;

var files = (_require2 = require("./files"), ingredients3 = _require2.ingredients3, menus = _require2.menus, recipes = _require2.recipes, nutritions1 = _require2.nutritions1, nutritions2 = _require2.nutritions2, departments = _require2.departments, users = _require2.users, _require2); // @TODO update this method, use stuff from utils.js

var getFiveRandomId = function getFiveRandomId() {
  return [__generateId(), __generateId(), __generateId(), __generateId(), __generateId()];
};

var getRecipes = function getRecipes() {
  var recipes = __get(files.recipes); // let recipes = []


  var randomFiveIds = getFiveRandomId();

  var result = _.map(recipes, function (recipe, index) {
    // console.log(ingredientsId);
    return _objectSpread({}, recipe, {
      created_at: __generateDate(),
      updated_at: __generateDate(),
      id: __generateId(),
      ingredients: randomFiveIds,
      diets: randomFiveIds,
      courses: randomFiveIds,
      cuisines: randomFiveIds,
      holidays: randomFiveIds,
      nutritions: randomFiveIds
    });
  });

  return result;
}; // @TODO delete file menu.json from main set of files, but create a note at some place,
// that Menu file is no longer needed because we replace it with fake data. you can use method ABC in order to generate that data.


var getMenuGenerator = function getMenuGenerator(numberOfWeeks) {
  var result;
  result = _.times(numberOfWeeks, function (index) {
    return {
      id: __generateId(),
      title: "Weekly menu ".concat(index),
      date: __generateDate(),
      description: "description for Weekly menu ".concat(index),
      notes: "This is a chef notes for wm ".concat(index)
    };
  });
  return result;
}; // @TODO replace it later. may need it at utils.js


var getNRecipes = function getNRecipes(n) {
  return _.slice(recipes, n);
};
/**
 * Fetches one recipe by title
 * @param  {string} title title of the recipe
 * @return {object}       recipe object
 */


var getRecipeByTitle = function getRecipeByTitle(title) {
  var recipes = __get(files.recipes);

  return _.filter(recipes, function (recipe) {
    return recipe.title === title;
  })[0]; // return []
};
/**
 * Fetches random recipe
 * @return {object} recipe object
 */


var getRandomRecipe = function getRandomRecipe() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var recipes = getNRecipes(20);
  return _.sampleSize(recipes, n);
};
/**
 * Fetches first five recipes
 * @return {array} recipe objects
 */
// @TODO can be updated in order to change the number of recipes that we can return


var getFirstFiveRecipes = function getFirstFiveRecipes() {
  var recipes = getNRecipes(5);

  var result = _.map(recipes, function (item) {
    return {
      key: __generateId(),
      recipe: item
    };
  });

  return result;
};

var getFiveRandomIngredients = function getFiveRandomIngredients() {
  var result = _.map(getRandomRecipe(5), function (recipe) {
    return {
      'id': __generateId(),
      'ingredient': recipe['ingredients']
    };
  });

  return result;
};

module.exports = {
  getNRecipes: getNRecipes,
  getRecipeByTitle: getRecipeByTitle,
  getRandomRecipe: getRandomRecipe,
  getFirstFiveRecipes: getFirstFiveRecipes,
  getFiveRandomIngredients: getFiveRandomIngredients,
  getMenuGenerator: getMenuGenerator,
  getRecipes: getRecipes,
  files: files,
  __find: __find
};