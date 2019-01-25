const _            = require('lodash');
const fs           = require('fs');
const uuidv1       = require('uuid/v1');
const { parser, sliceArray }   = require('../../helper');

const groceristar = require('../GroceriStar/groceristar');

const getDepartmentsGraphQL = function(){

  let results = groceristar.getDepartments();
  return results.map((item, index) => ({
    department_id: ++index,
    name: item.name,
    desc: "description for department1",
    created_at: Date.now(),
    updated_at: Date.now()
    }))
};

const getDepartmentsGraphQLKey = function(){
  let results = groceristar.getDepartments();
  return results.map((item, index) => ({
    department_id: uuidv1(),
    name: item.name,
    desc: "description for department1",
    created_at: Date.now(),
    updated_at: Date.now()
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
    created_at: Date.now(),
    updated_at: Date.now(),
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
    created_at: Date.now(),
    updated_at: Date.now(),
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
    created_at: Date.now(),
    updated_at: Date.now(),
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
    created_at: Date.now(),
    updated_at: Date.now(),
    id_1: 1,
    department_id: 1
    }))
};

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

//---------
// As we move our methods away we don't need GraphQL in methods name anymore ...
const getUsersGrocery = function(){
  // let results = groceristar.getUsers();
  // return results.map((item, index) => ({
  //   userId: ++index,
  //   favs: false,
  //   ingredient_id: 1,
  //   grocery_id: 1
  //   }))
};

const getUsersGroceryKey = function(){
  // let results = groceristar.getUsers();
  // return results.map((item, index) => ({
  //   userId: uuidv1(),
  //   favs: false,
  //   ingredient_id: 1,
  //   grocery_id: 1
  //   }))
};

module.exports = {
  getDepartmentsGraphQL,
  getDepartmentsGraphQLKey,
  getGroceryGraphQL,
  getGroceryGraphQLKey,
  getIngredientsGraphQL,
  getIngredientsGraphQLKey,
  getUsersGraphQL,
  getUsersGraphQLKey,

  getUsersGrocery,
  getUsersGroceryKey
}
