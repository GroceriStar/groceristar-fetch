const _ = require('lodash')

// const uuidv1 = require('uuid/v1')
// const dayjs = require('dayjs')

const { __get, __find, __generateId, __generateDate } = require('../../helper')

const files = { groceristar, groceries, favorites, items, userGrocery } = require('./files')

// @TODO return measurements

// @TODO can we update our methods - but we'll need to go step by step,
// because these methods used in our react projects.
// so I propose do it very carefully
const getFavorites = function () {
  return __get(favorites)
}

const getItems = function () {
  return __get(items)
}

const getUserGrocery = function () {
  return __get(userGrocery)
}

// ---------
// As we move our methods away we don't need GraphQL in methods name anymore ...
// @TODO update it

const getFavoritesGraphQL = function () {
  let favorites = getFavorites()

  return _.map(favorites, (favorite, index) => {
    return {
      key: ++index,
      ...favorite
    }
  })
}

const getFavoritesGraphQLKey = function () {
  let favorites = getFavorites()

  return _.map(favorites, (favorite, index) => {
    return {
      key: __generateId(),
      ...favorite
    }
  })
}

const getItemsGraphQL = function () {
  let favorites = getItems()

  return _.map(items, (item, index) => {
    return {
      key: ++index,
      ...item
    }
  })
}

const getItemsGraphQLKey = function () {
  let items = getItems()

  return _.map(items, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getUserGroceryGraphQL = function () {
  let userGroceries = getUserGrocery()

  return _.map(userGroceries, (userGrocery, index) => {
    return {
      key: ++index,
      ...userGrocery
    }
  })
}

const getUserGroceryGraphQLKey = function () {
  let userGroceries = getUserGrocery()

  return _.map(userGroceries, (userGrocery, index) => {
    return {
      key: __generateId(),
      ...userGrocery
    }
  })
}

const getDepartmentsGraphQL = function () {
  let results = groceristar.getDepartments()
  return results.map((item, index) => ({
    department_id: ++index,
    name: item.name,
    desc: 'description for department1',
    created_at: __generateDate(),
    updated_at: __generateDate()
  }))
}

const getDepartmentsGraphQLKey = function () {
  let results = groceristar.getDepartments()
  return results.map((item, index) => ({
    department_id: __generateId(),
    name: item.name,
    desc: 'description for department1',
    created_at: __generateDate(),
    updated_at: __generateDate()
  }))
}

const getGroceryGraphQL = function () {
  let results = groceristar.getGrocery()
  return results.map((item, index) => ({
    grocery_id: ++index,
    name: item.name,
    img: item.img,
    desc: item.desc,
    slug: item.slug,
    created_at: __generateDate(),
    updated_at: __generateDate(),
    id_1: 1,
    favs: false
  }))
}

const getGroceryGraphQLKey = function () {
  let results = groceries
  return results.map((item, index) => ({
    grocery_id: __generateId(),
    name: item.name,
    img: item.img,
    desc: item.desc,
    slug: item.slug,
    created_at: __generateDate(),
    updated_at: __generateDate(),
    id_1: 1,
    favs: false
  }))
}

const getIngredientsGraphQL = function (limit = false) {
  let results = groceristar.getIngredients()
  if (limit) {
    results = _.slice(results, 100)
  }

  return results.map((item, index) => ({
    ingredient_id: ++index,
    favs: '',
    name: item.name,
    description: 'description',
    custom: false,
    created_at: __generateDate(),
    updated_at: __generateDate(),
    id_1: 1,
    department_id: 1
  }))
}

const getIngredientsGraphQLKey = function (limit = false) {
  let results = groceristar.getIngredients()
  if (limit) {
    results = _.slice(results, 100)
  }

  return results.map((item, index) => ({
    ingredient_id: __generateId(),
    favs: '',
    name: item.name,
    description: 'description',
    custom: false,
    created_at: __generateDate(),
    updated_at: __generateDate(),
    id_1: 1,
    department_id: 1
  }))
}
// add groceryIds, favs are arrays with ids...
const getUsersGraphQL = function () {
  let results = groceristar.getUsers()
  return results.map((item, index) => ({
    userId: ++index,
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
  }))
}

const getUsersGraphQLKey = function () {
  let results = groceristar.getUsers()
  return results.map((item, index) => ({
    userId: __generateId(),
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
  }))
}

// const getUsersGrocery = function(){
// let results = groceristar.getUsers();
// return results.map((item, index) => ({
//   userId: ++index,
//   favs: false,
//   ingredient_id: 1,
//   grocery_id: 1
//   }))
// };

// const getUsersGroceryKey = function(){
// let results = groceristar.getUsers();
// return results.map((item, index) => ({
//   userId: uuidv1(),
//   favs: false,
//   ingredient_id: 1,
//   grocery_id: 1
//   }))
// };

module.exports = {
  getDepartmentsGraphQL,
  getDepartmentsGraphQLKey,
  getGroceryGraphQL,
  getGroceryGraphQLKey,
  getIngredientsGraphQL,
  getIngredientsGraphQLKey,
  getUsersGraphQL,
  getUsersGraphQLKey,
  //
  // getUsersGrocery,
  // getUsersGroceryKey,

  getFavorites,
  getItems,
  getUserGrocery,

  getFavoritesGraphQL,
  getFavoritesGraphQLKey,
  getItemsGraphQL,
  getItemsGraphQLKey,
  getUserGroceryGraphQL,
  getUserGroceryGraphQLKey,

  files,

  __find
}
