const _            = require('lodash');
const uuidv1       = require('uuid//v1');
const { parser }   = require('../../helper');

const ingredients3 = require('../../data/Ingredients/ingredients3.json');
// const ingredients  = require('../../data/Ingredients/ingredients.json');

const menus        = require('../../data/Menu/menu.json');
const recipes      = require('../../data/Recipe4/recipe.json');
const nutritions1  = require('../../data/Nutrition/nutritions1.json');
const nutritions2  = require('../../data/Nutrition/nutritions2.json');


const departments  = require('../../data/Departments/departments.json');
const users        = require('../../data/Users/users.json');

const getIngredients3 = function() {
  return parser(ingredients3)
}

const getMenu = function() {
  return parser(menus)
}

const getRecipe = function() {
  return parser(recipes)
}

const getNRecipes = (n) => {
  let recipes = getRecipe();

  return recipes.slice(0, n);
}

/**
 * Fetches one recipe by title
 * @param  {string} title title of the recipe
 * @return {object}       recipe object
 */
const getRecipeByTitle = title => {
  let recipe, recipes = getRecipe();

  //@TODO yeah it works, but if we'll replace it with lodash it'll be better.
  recipe = recipes.filter(recipe => recipe.title === title)
  return recipe[0];
}

/**
 * Fetches random recipe
 * @return {object} recipe object
 */
 //@TODO i don't like this long stuff....
const getRandomRecipe = () => {
  let recipes = getNRecipes(20);

  const randomInt = Math.floor(Math.random() * (recipes.length - 1));
  return recipes[randomInt];
}

/**
 * Fetches first five recipes
 * @return {array} recipe objects
 */
//@TODO can be updated in order to change the number of recipes that we can return
const getFirstFiveRecipes = () => {
  let recipes = getNRecipes(5);

  let result = _.map(recipes, item => ({
    key: uuidv1(),
    recipe: item
  }))

  return result;
}


// @TODO there should be another way to do this. less complitated at least
const getFiveRandomIngredients = () => {
  let recipes = getRecipe();
  let result = [];
  let random_key = -1;
  let countIngredients = 5;


  //@TODO replace with a map functions
  for (var i = 0; i < countIngredients; i++) {

    random_key = Math.floor(Math.random() * 101);

    let ingredient = {
      "id": uuidv1(),
      "ingredient": recipes[random_key]["ingredients"]
    }
    result.push(ingredient);
  }
  return result;
}

const getNutritions1 = function() {
  return parser(nutritions1)
}

const getNutritions2 = function() {
  return parser(nutritions2)
}


// duplicates from GS
const getDepartments = function() {
  return parser(departments)
}

const getUsers = function() {
  return parser(users)
}


module.exports = {
  getIngredients3,
  getMenu,
  getRecipe,
  getNRecipes,

  getRecipeByTitle,
  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getNutritions1,
  getNutritions2,

  getDepartments,
  getUsers
}
