const _ = require('lodash')
const { __find, __get, __generateDate, __generateId } = require('../../utils')

const files = {
  ingredients3,
  menus,
  recipes,
  nutritions1,
  nutritions2,
  departments,
  users
} = require('./files')

// @TODO update this method, use stuff from utils.js
const getFiveRandomId = function () {
  return [
    __generateId(),
    __generateId(),
    __generateId(),
    __generateId(),
    __generateId()
  ]
}

const getRecipes = function () {
  let recipes = __get(files.recipes)
  let randomFiveIds = getFiveRandomId()

  let result =
      _.map(recipes, (recipe, index) => {
        // console.log(ingredientsId);
        return {
          ...recipe,
          created_at: __generateDate(),
          updated_at: __generateDate(),
          id: __generateId(),
          ingredients: randomFiveIds,
          diets: randomFiveIds,
          courses: randomFiveIds,
          cuisines: randomFiveIds,
          holidays: randomFiveIds,
          nutritions: randomFiveIds
        }
      })
  return result
}

// @TODO delete file menu.json from main set of files, but create a note at some place,
// that Menu file is no longer needed because we replace it with fake data. you can use method ABC in order to generate that data.
const getMenuGenerator = (number_of_weeks) => {
  let result
  result = _.times(number_of_weeks, (index) => ({
    id: __generateId(),
    title: 'Weekly menu #${index}',
    date: __generateDate(),
    description: 'description for Weekly menu #${index}',
    notes: 'This is a chef notes for wm #${index}'
  }))
  return result
}

// @TODO replace it later. may need it at utils.js
const getNRecipes = (n) => {
  return _.slice(recipes, n)
}

/**
 * Fetches one recipe by title
 * @param  {string} title title of the recipe
 * @return {object}       recipe object
 */
const getRecipeByTitle = (title) => {
  let recipes = __get(files.recipes)

  return _.filter(recipes, recipe => recipe.title === title)[0]
}

/**
 * Fetches random recipe
 * @return {object} recipe object
 */
const getRandomRecipe = (n = 1) => {
  let recipes = getNRecipes(20)
  return _.sampleSize(recipes, n)
}

/**
 * Fetches first five recipes
 * @return {array} recipe objects
 */
// @TODO can be updated in order to change the number of recipes that we can return
const getFirstFiveRecipes = () => {
  let recipes = getNRecipes(5)

  let result = _.map(recipes, item => ({
    key: __generateId(),
    recipe: item
  }))

  return result
}

const getFiveRandomIngredients = () => {
  let result = _.map(getRandomRecipe(5), (recipe) => ({
    'id': __generateId(),
    'ingredient': recipe['ingredients']
  }))
  return result
}

module.exports = {
  getNRecipes,
  getRecipeByTitle,
  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getMenuGenerator,
  getRecipes,

  files,

  __find
}
