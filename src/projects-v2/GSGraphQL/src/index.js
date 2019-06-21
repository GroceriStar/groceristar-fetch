import files from './files'

const _ = require('lodash')

const {
  // __get,
  __find,
  __generateId,
  __generateDate
} = require('../../utils')

const {
  favorites,
  items,
  userGrocery
  // groceristar,
  // groceries,
} = require('./files')

// @TODO return measurements

// ---------
// As we move our methods away we don't need GraphQL in methods name anymore ...
// @TODO update it

// @TODO This function is
// what should return same function without 'GraphQL' prefix.
// const getFavorites = () => {
//  return [{
//    name: 'John Doe',
//    email: 'johndoe@mail.com',
//    password: 'password',
//  }];
// }

const getFavorites = function () {
  return _.map(favorites, (favorite, index) => {
    return {
      key: ++index,
      ...favorite
    }
  })
}

const getFavoritesKey = function () {
  return _.map(favorites, (favorite, index) => {
    return {
      key: __generateId(),
      ...favorite
    }
  })
}

const getItems = function () {
  return _.map(items, (item, index) => {
    return {
      key: ++index,
      ...item
    }
  })
}

const getItemsKey = function () {
  let items = getItems()

  return _.map(items, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getUserGrocery = function () {
  return _.map(userGrocery, (item, index) => {
    return {
      key: ++index,
      ...item
    }
  })
}

const getUserGroceryKey = function () {
  // let userGroceries = getUserGrocery()

  return _.map(userGrocery, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getDepartments = function () {
  // let results = departments
  let results = []
  return results.map((item, index) => ({
    department_id: ++index,
    name: item.name,
    desc: 'description for department1',
    created_at: __generateDate(),
    updated_at: __generateDate()
  }))
}

const getDepartmentsKey = function () {
  // let results = departments
  let results = []
  return results.map((item, index) => ({
    department_id: __generateId(),
    name: item.name,
    desc: 'description for department1',
    created_at: __generateDate(),
    updated_at: __generateDate()
  }))
}

const getGrocery = function () {
  // let results = groceries
  let results = []
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

const getGroceryKey = function () {
  // let results = groceries
  let results = []
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

const getIngredients = function (limit = false) {
  // let results = ingredients
  let results = []
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

const getIngredientsKey = function (limit = false) {
  // let results = ingredients
  let results = []
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
const getUsers = function () {
  // let results = users
  let results = []
  return results.map((item, index) => ({
    userId: ++index,
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
  }))
}

const getUsersKey = function () {
  // let results = users
  let results = []
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
  getDepartments,
  getDepartmentsKey,
  getGrocery,
  getGroceryKey,
  getIngredients,
  getIngredientsKey,
  getUsers,
  getUsersKey,
  // getUsersGrocery,
  // getUsersGroceryKey,
  getFavorites,
  getItems,
  getUserGrocery,
  getFavoritesKey,
  getItemsKey,
  getUserGroceryKey,
  // files,
  __find
}
