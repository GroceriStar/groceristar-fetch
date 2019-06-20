const staticData = require('@groceristar/sd-wrapper')

const departments = staticData.departments
const groceries = staticData.grocery
const ingredients = staticData.ingredients
const users = staticData.users

module.exports = {
  departments,
  groceries,
  ingredients,
  users
}
