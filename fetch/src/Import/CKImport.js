// const _ = require('lodash')
const chickenKyiv = require('../projects/ChickenKyiv/chickenKyiv.js')

// @TODO change path later, duh?
const { migrateFunc } = require('./111/import/0002-migrate')

// const {  } = require('./HELPER.js')

const {
  getIdArray,
  create,
  attach
} = require('./hellper.js')

// get('menu');
// get('recipe');
// get('ingredient');
// get('recipe2');
// get('department');

// @TODO we can use this function in our other projects

const get = (tableName) => {
  let result
  switch (tableName) {
    case 'menu':
      result = chickenKyiv.getMenu()
      break

    case 'recipe':
      result = chickenKyiv.getRecipe()
      break

    case 'ingredient':
      result = chickenKyiv.getIngredients3()
      break

    case 'recipe2':
      result = chickenKyiv.getRecipesExtended()
      break

    case 'department':
      result = chickenKyiv.getDepartments()
      break

    default:
      result = chickenKyiv.getUsers()
  }

  return result
}

module.exports = {
  get: get,
  migrateFunc: migrateFunc,
  helper: {
    get_id_array: getIdArray,
    create: create,
    attach: attach
  }
}
