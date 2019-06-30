// const staticData = require('@groceristar/sd-wrapper')
const staticData = require('@groceristar/mini-sd')

const departments = staticData.departments
const groceries = staticData.grocery
const ingredients = staticData.ingredients
const users = staticData.users

console.log(departments)
console.log(groceries)

module.exports = {
  departments,
  groceries,
  ingredients,
  users
}
