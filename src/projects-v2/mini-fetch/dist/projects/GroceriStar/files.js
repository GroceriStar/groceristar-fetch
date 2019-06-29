var staticData = require('@groceristar/sd-wrapper');

var departments = staticData.departments;
var groceries = staticData.grocery;
var ingredients = staticData.ingredients;
var users = staticData.users;
console.log(departments);
console.log(groceries);
module.exports = {
  departments: departments,
  groceries: groceries,
  ingredients: ingredients,
  users: users
};