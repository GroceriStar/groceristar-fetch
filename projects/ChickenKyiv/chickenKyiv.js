const _            = require('lodash');
const uuidv1       = require('uuid//v1');
const dayjs        = require('dayjs');

const { parser, sliceArray }   = require('../../helper');


















// const ingredients3 = require('../../data/Ingredients/ingredients3.json');
const ingredients3     =
require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');
// const ingredients  = require('../../data/Ingredients/ingredients.json');

// const menus        = require('../../data/Menu/menu.json');
// const recipes      = require('../../data/Recipe4/recipe.json');
const menus     = require('@groceristar/sd-wrapper/lib/data/Menu/menu.json');
const recipes   = require('@groceristar/sd-wrapper/lib/data/Recipe4/recipe.json');

// const nutritions1  = require('../../data/Nutrition/nutritions1.json');
// const nutritions2  = require('../../data/Nutrition/nutritions2.json');
const nutritions1     = require('@groceristar/sd-wrapper/lib/data/Nutrition/nutritions1.json');
const nutritions2     = require('@groceristar/sd-wrapper/lib/data/Nutrition/nutritions2.json');

// const departments  = require('../../data/Departments/departments.json');
const departments     = require('@groceristar/sd-wrapper/lib/data/Departments/departments.json');

// const users        = require('../../data/Users/users.json');
const users     = require('@groceristar/sd-wrapper/lib/data/Users/users.json');






const getIngredients3 = function() {
  return parser(ingredients3)
}

const getMenu = function() {
  return parser(menus)
}

const getRecipe = function() {
  return parser(recipes)
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




//@TODO delete file menu.json from main set of files, but create a note at some place,
// that Menu file is no longer needed because we replace it with fake data. you can use method ABC in order to generate that data.
const getMenuGenerator = ( number_of_weeks ) => {
  let result
  result = _.times(number_of_weeks, ( index ) => ({
    id: uuidv1(),
    title: "Weekly menu #${index}",
    date: dayjs().toDate(),
    description: "description for Weekly menu #${index}",
    notes: "This is a chef notes for wm #${index}"
  }))
  return result;
}


// @TODO replace it later. we don't need it after introducing sliceArray method.
const getNRecipes = (n) => {
  let recipes = getRecipe();

  return sliceArray(recipes, n);
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
  getMenuGenerator,

  getDepartments,
  getUsers
}
