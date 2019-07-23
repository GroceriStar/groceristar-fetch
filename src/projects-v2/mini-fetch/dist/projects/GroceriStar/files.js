// const staticData = require('@groceristar/sd-wrapper')
var staticData = require('@groceristar/mini-sd');

var departments = staticData.departments;
var groceries = staticData.grocery; // const ingredients = staticData.ingredients

var users = staticData.users;
console.log(departments);
console.log(groceries);
module.exports = {
  departments: departments,
  groceries: groceries,
  // ingredients,
  users: users
};