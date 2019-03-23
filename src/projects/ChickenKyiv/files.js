const staticData = require('@groceristar/sd-wrapper')

const ingredients3 = staticData.ingredients3
  // require('@groceristar/sd-wrapper/dist/data/Ingredients/ingredients3.json')

const menus = staticData.menu

const recipes = staticData.recipes
  // require('@groceristar/sd-wrapper/dist/data/Recipe4/recipe.json')

const nutritions1 = staticData.nutritions
// require('@groceristar/sd-wrapper/dist/data/Nutrition/nutritions1.json')

const nutritions2 = staticData.nutritions2
  // require('@groceristar/sd-wrapper/dist/data/Nutrition/nutritions2.json')

const departments = staticData.departments

const users = staticData.users

module.exports = {
  ingredients3,
  menus,
  recipes,
  nutritions1,
  nutritions2,
  departments,
  users
}
