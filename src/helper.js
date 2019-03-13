const path = require('path')

const {
    ingredients3,
    menus,
    recipes,
    nutritions1,
    nutritions2,
    departments,
    users
} = require('./projects/ChickenKyiv/files')

// main reason for having this file, because i'm trying to move away repetetive functions
// @TODO Arthur have at least 3 different modules, that should replace this method
const parser = function (filename) {
  return JSON.parse(JSON.stringify(filename))
}

const sliceArray = (array, number) => {
  return array.slice(0, number)
}

// @TODO Arthur have at least 3 different modules, that should replace this method
const pathToJson = function () {
  // path.dirname(__filename)
  return path.dirname('./data/Allergy/allergies.json')
}

const __l = function (value) {
  return console.log(value)
}

const getIngredients3 = function() {
  return parser(ingredients3)
}

const getMenu = function () {
  return parser(menus)
}

const getRecipe = function () {
  return parser(recipes)
}

const getNutritions1 = function () {
  return parser(nutritions1)
}

const getNutritions2 = function () {
  return parser(nutritions2)
}

const getDepartments = function () {
  return parser(departments)
}

const getUsers = function () {
  return parser(users)
}

module.exports = {
  parser,
  pathToJson,
  sliceArray,
  __l,
  getIngredients3,
  getMenu,
  getRecipe,
  getNutritions1,
  getNutritions2,
  getDepartments,
  getUsers
}
