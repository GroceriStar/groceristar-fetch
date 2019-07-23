var staticData = require('@groceristar/mini-sd'); // const staticData = require('@groceristar/sd-wrapper')
// const ingredients3 = staticData.ingredients3


var menus = staticData.menu;
var recipes = staticData.recipes;
var nutritions1 = staticData.nutritions;
var nutritions2 = staticData.nutritions2;
var departments = staticData.departments;
var users = staticData.users; // require('@groceristar/sd-wrapper/dist/data/Recipe4/recipe.json')

module.exports = {
  // ingredients3,
  menus: menus,
  recipes: recipes,
  nutritions1: nutritions1,
  nutritions2: nutritions2,
  departments: departments,
  users: users
};