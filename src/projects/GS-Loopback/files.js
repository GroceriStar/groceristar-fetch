const staticData = require('@groceristar/sd-wrapper')

const ultimateGroceryList =
  require('@groceristar/sd-wrapper/dist/data/Grocery/example/ultimate-gl-from-loopback-server-example.json')

const groceryListWithUserRelations =
  require('@groceristar/sd-wrapper/dist/data/Grocery/example/grocery-with-user-relations.json')

const dbIngredients =
  require('@groceristar/sd-wrapper/dist/data/Ingredients/example/gs-loopback-sample.json')

module.exports = {
  ultimateGroceryList,
  groceryListWithUserRelations,
  dbIngredients
}
