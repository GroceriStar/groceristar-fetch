const _            = require('lodash');
const uuidv1       = require('uuid//v1');

const ingredients3 = require('../../data/Ingredients/ingredients3.json');
const menus        = require('../../data/Menu/menu.json');
const recipes      = require('../../data/Recipe4/recipe.json');
const nutritions1  = require('../../data/Nutrition/nutritions1.json');
const nutritions2  = require('../../data/Nutrition/nutritions2.json');

const parser = function(filename) {

  return JSON.parse(JSON.stringify(filename))
}

module.getIngredients3 = function() {
  return parser(ingredients3)
}

module.getMenu = function() {
  return parser(menus)
}

module.getRecipe = function() {
  return parser(recipes)
}

/**
 * Fetches one recipe by title
 * @param  {string} title title of the recipe
 * @return {object}       recipe object
 */
module.getRecipeByTitle = title => {
  let recipe, parsedRecipes = parser(recipes);
  recipe = parsedRecipes.filter(recipe => recipe.title === title)
  return recipe[0];
}

/**
 * Fetches random recipe
 * @return {object} recipe object
 */
module.getRandomRecipe = () => {
  let parsedRecipes = parser(recipes);
  const randomInt = Math.floor(Math.random() * (parsedRecipes.length - 1));
  return parsedRecipes[randomInt];
}

/**
 * Fetches first five recipes
 * @return {array} recipe objects
 */
//@TODO can be updated in order to change the number of recipes that we can return
module.getFirstFiveRecipes = () => {
  let parsedRecipes = parser(recipes);

  let result = _.map(parsedRecipes.slice(0, 5), item => ({
    key: uuidv1(),
    recipe: item
  }))

  return result;
}

// @TODO there should be another way to do this. less complitated at least
module.getFiveRandomIngredients = () => {
  let ingredients = parser(recipes);
  let result = [];
  let random_key = -1;
  let countIngredients = 5;

  for (var i = 0; i < countIngredients; i++) {

    random_key = Math.floor(Math.random() * 101);

    let ingredient = {
      "id": uuidv1(),
      "ingredient": ingredients[random_key]["ingredients"]
    }
    result.push(ingredient);
  }
  return result;
}

module.getNutritions1 = function() {
  return parser(nutritions1)
}

module.getNutritions2 = function() {
  return parser(nutritions2)
}

module.exports = module;
