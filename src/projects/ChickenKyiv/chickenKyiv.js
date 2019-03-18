const _ = require('lodash')
const uuidv1 = require('uuid//v1')
const dayjs = require('dayjs')

const { parser, sliceArray, __get } = require('../../helper')

const {
  ingredients3,
  menus,
  recipes,
  nutritions1,
  nutritions2,
  departments,
  users
} = require('./files')

// @TODO can we update our methods - but we'll need to go step by step,
// because these methods used in our react projects.
// so I propose do it very carefully
const getIngredients3 = function () {
  return __get(ingredients3)
}

const getMenu = function () {
  return __get(menus)
}

const getRecipe = function () {
  return __get(recipes)
}

const getNutritions1 = function () {
  return __get(nutritions1)
}

const getNutritions2 = function () {
  return __get(nutritions2)
}

// duplicates from GS
const getDepartments = function () {
  return __get(departments)
}

const getUsers = function () {
  return __get(users)
}

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
  let recipes = getRecipe()
  let randomFiveIds = getFiveRandomId()

  let result =
      _.map(recipes, (recipe, index) => {
        // console.log(ingredientsId);
        return {
          ...recipe,
          created_at: Date(), // @TODO we have a module day.js use it instead
          updated_at: Date(), // @TODO we have a module day.js use it instead
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

// @TODO replace it later. we don't need it after introducing sliceArray method.
const getNRecipes = (n) => {
  let recipes = getRecipe()

  return sliceArray(recipes, n)
}

/**
 * Fetches one recipe by title
 * @param  {string} title title of the recipe
 * @return {object}       recipe object
 */
const getRecipeByTitle = title => {
  let recipe; let recipes = getRecipe()

  // @TODO yeah it works, but if we'll replace it with lodash it'll be better.
  recipe = recipes.filter(recipe => recipe.title === title)
  return recipe[0]
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

// @TODO there should be another way to do this. less complitated at least
const getFiveRandomIngredients = () => {
  // let recipes = getRecipe()
  let recipes = getRandomRecipe(5)
  let result = []
  // let random_key = -1
  let countIngredients = 5

  // @TODO replace with a map functions
  for (var i = 0; i < countIngredients; i++) {
    // random_key = Math.floor(Math.random() * 101)

    let ingredient = {
      'id': uuidv1(),
      // 'ingredient': recipes[random_key]['ingredients']
      'ingredient': recipes[i]['ingredients']
    }
    result.push(ingredient)
  }
  return result
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
  getUsers,
  getRecipes
}
