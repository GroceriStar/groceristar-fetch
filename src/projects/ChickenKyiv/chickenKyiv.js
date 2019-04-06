const _ = require('lodash')
const uuidv1 = require('uuid//v1')
const dayjs = require('dayjs')

const { __find, __get, __generateDate } = require('../../helper')

const files = {
  ingredients3,
  menus,
  recipes,
  nutritions1,
  nutritions2,
  departments,
  users
} = require('./files')

// @TODO update this method
const getFiveRandomId = function () {
  return [
    uuidv1(),
    uuidv1(),
    uuidv1(),
    uuidv1(),
    uuidv1()
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
          id: uuidv1(),
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
    id: uuidv1(),
    title: 'Weekly menu #${index}',
    date: dayjs().toDate(),
    description: 'description for Weekly menu #${index}',
    notes: 'This is a chef notes for wm #${index}'
  }))
  return result
}

// @TODO replace it later. may need it at helper.js
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
// @TODO i don't like this long stuff....
const getRandomRecipe = (n = 1) => {
  let recipes = getNRecipes(20)
  // const randomInt = Math.floor(Math.random() * (recipes.length - 1))
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
    key: uuidv1(),
    recipe: item
  }))

  return result
}

const getFiveRandomIngredients = () => _.map(getRandomRecipe(5), (recipe)=> ({
  'id': uuidv1(),
  'ingredient': recipe['ingredients']
}));

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
