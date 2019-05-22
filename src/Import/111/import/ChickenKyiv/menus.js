'use strict'

// const debug = require('debug')

let tableName = 'Menu'

let attributes = [
  'recipes', // #0
  'menuIds' // #1
]

// @TODO same function at other place are async and more advanced.
const relate = async (options, results, helper) => {
  // let server
  // let database
  let raven
  ({
    // server,
    // database,
    raven
  } = options)

  if (!results || !results.recipes || !results.menus) {
    raven.captureException('cannot attach additional data to recipes')
  }

  // @TODO create a method with foreach for each attribute in order to attach data to recipe
  // helper.attach( results.recipes,  results.menus, attributes[0]);

  // console.log(results.menus)
  // console.log(results.users)

  helper.attach(results.menus, results.users, attributes[1])
}

module.exports = {
  // get: get,
  tableName: tableName,
  relate: relate
}
