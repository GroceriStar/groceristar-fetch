const staticData = require('@groceristar/sd-wrapper')
const groceristar = require('../GroceriStar/groceristar')

const favorites =
  require('@groceristar/sd-wrapper/dist/data/Ingredients/favorites.json')

const items =
  require('@groceristar/sd-wrapper/dist/data/Ingredients/items.json')

const userGrocery =
  require('@groceristar/sd-wrapper/dist/data/Users/userGrocery.json')

module.exports = {
  groceristar,
  favorites,
  items,
  userGrocery
}
