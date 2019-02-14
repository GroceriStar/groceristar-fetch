const _            = require('lodash');
const fs           = require('fs');
const uuidv1       = require('uuid/v1');
const dayjs        = require('dayjs');

const { parser, sliceArray }   = require('../../helper');

const groceristar = require('../GroceriStar/groceristar');
















// 
// const favorites   = require('../../data/Ingredients/favorites.json');
// // const ingredients3     = require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');
//
// const items       = require('../../data/Ingredients/items.json');
// // const ingredients3     = require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');
//
// const userGrocery = require('../../data/Users/userGrocery.json');
// // const ingredients3     = require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');
//


//@TODO return measurements

const getFavorites = function(){
  return parser(favorites)
}

const getItems = function(){
  return parser(items)
}

const getUserGrocery = function(){
  return parser(userGrocery)
}




//---------
// As we move our methods away we don't need GraphQL in methods name anymore ...
// @TODO update it

const getFavoritesGraphQL = function(){
  let favorites = getFavorites();

  return _.map(favorites, (favorite, index) => {
    return {
      key: ++index,
      ...favorite
    }
  })
}

const getFavoritesGraphQLKey = function(){
  let favorites = getFavorites();

  return _.map(favorites, (favorite, index) => {
    return {
      key: uuidv1(),
      ...favorite
    }
  })
}

const getItemsGraphQL = function(){
  let favorites = getItems();

  return _.map(items, (item, index) => {
    return {
      key: ++index,
      ...item
    }
  })
}

const getItemsGraphQLKey = function(){
  let items = getItems();

  return _.map(items, (item, index) => {
    return {
      key: uuidv1(),
      ...item
    }
  })
}

const getUserGroceryGraphQL = function(){
  let userGroceries = getUserGrocery();

  return _.map(userGroceries, (userGrocery, index) => {
    return {
      key: ++index,
      ...userGrocery
    }
  })
}

const getUserGroceryGraphQLKey = function(){
  let userGroceries = getUserGrocery();

  return _.map(userGroceries, (userGrocery, index) => {
    return {
      key: uuidv1(),
      ...userGrocery
    }
  })
}

const getDepartmentsGraphQL = function(){

  let results = groceristar.getDepartments();
  return results.map((item, index) => ({
    department_id: ++index,
    name: item.name,
    desc: "description for department1",

    created_at: dayjs().toDate(),
    updated_at: dayjs().toDate()
    // created_at: Date.now(),
    // updated_at: Date.now()
    }))
};

const getDepartmentsGraphQLKey = function(){
  let results = groceristar.getDepartments();
  return results.map((item, index) => ({
    department_id: uuidv1(),
    name: item.name,
    desc: "description for department1",
    created_at: dayjs().toDate(),
    updated_at: dayjs().toDate()
    }))
};

const getGroceryGraphQL = function(){
  let results = groceristar.getGrocery();
  return results.map((item, index) => ({
    grocery_id: ++index,
    name: item.name,
    img:  item.img,
    desc: item.desc,
    slug: item.slug,
    created_at: dayjs().toDate(),
    updated_at: dayjs().toDate(),
    id_1: 1,
    favs: false
    }))
};

const getGroceryGraphQLKey = function(){
  let results = groceristar.getGrocery();
  return results.map((item, index) => ({
    grocery_id: uuidv1(),
    name: item.name,
    img:  item.img,
    desc: item.desc,
    slug: item.slug,
    created_at: dayjs().toDate(),
    updated_at: dayjs().toDate(),
    id_1: 1,
    favs: false
    }))
};

const getIngredientsGraphQL = function(limit = false){
  let results = groceristar.getIngredients();
  if( limit ){
    results = sliceArray(results, 100);
  }

  return results.map((item, index) => ({
    ingredient_id: ++index,
    favs:'',
    name: item.name,
    description: "description",
    custom: false,
    created_at: dayjs().toDate(),
    updated_at: dayjs().toDate(),
    id_1: 1,
    department_id: 1
    }))
};

const getIngredientsGraphQLKey = function(limit = false){
  let results = groceristar.getIngredients();
  if( limit ){
    results = sliceArray(results, 100);
  }


  return results.map((item, index) => ({
    ingredient_id: uuidv1(),
    favs:'',
    name: item.name,
    description: "description",
    custom: false,
    created_at: dayjs().toDate(),
    updated_at: dayjs().toDate(),
    id_1: 1,
    department_id: 1
    }))
};
// add groceryIds, favs are arrays with ids...
const getUsersGraphQL = function(){
  let results = groceristar.getUsers();
  return results.map((item, index) => ({
    userId: ++index,
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
    }))
};

const getUsersGraphQLKey = function(){
  let results = groceristar.getUsers();
  return results.map((item, index) => ({
    userId: uuidv1(),
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
    }))
};

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
  getUserGroceryGraphQLKey
}
