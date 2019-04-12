const _ = require('lodash')

const { __get, __find, __generateId, __generateDate } = require('../../utils')

const files = {
  groceristar, groceries,
  favorites, items, userGrocery
} = require('./files')

// @TODO return measurements


// ---------
// As we move our methods away we don't need GraphQL in methods name anymore ...
// @TODO update it

// @TODO This function is
// what should return same function without 'GraphQL' prefix.
//const getFavorites = () => {
//  return [{
//    name: 'John Doe',
//    email: 'johndoe@mail.com',
//    password: 'password',
//  }];
//}

const getFavoritesGraphQL = function () {
  // let favorites = favorites

  return _.map(favorites, (favorite, index) => {
    return {
      key: ++index,
      ...favorite
    }
  })
}

const getFavoritesGraphQLKey = function () {
  // let favorites = getFavorites()

  return _.map(favorites, (favorite, index) => {
    return {
      key: __generateId(),
      ...favorite
    }
  })
}

const getItemsGraphQL = function () {
  // let favorites = getItems()

  return _.map(items, (item, index) => {
    return {
      key: ++index,
      ...item
    }
  })
}

const getItemsGraphQLKey = function () {
  // let items = getItems()

  return _.map(items, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getUserGroceryGraphQL = function () {

  return _.map(userGrocery, (item, index) => {
    return {
      key: ++index,
      ...item
    }
  })
}

const getUserGroceryGraphQLKey = function () {
  let userGroceries = getUserGrocery()

  return _.map(userGrocery, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getDepartmentsGraphQL = function () {
  let results = departments
  return results.map((item, index) => ({
    department_id: ++index,
    name: item.name,
    desc: 'description for department1',
    created_at: __generateDate(),
    updated_at: __generateDate()
  }))
}

const getDepartmentsGraphQLKey = function () {
  let results = departments
  return results.map((item, index) => ({
    department_id: __generateId(),
    name: item.name,
    desc: 'description for department1',
    created_at: __generateDate(),
    updated_at: __generateDate()
  }))
}

const getGroceryGraphQL = function () {
  let results = groceries
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
  let results = ingredients
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
  let results = ingredients
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
  let results = users
  return results.map((item, index) => ({
    userId: ++index,
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
  }))
}

const getUsersGraphQLKey = function () {
  let results = users
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
