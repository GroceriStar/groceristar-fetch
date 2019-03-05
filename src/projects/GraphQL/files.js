const groceristar = require('../GroceriStar/groceristar')

const favorites =
  require('@groceristar/sd-wrapper/lib/data/Ingredients/favorites.json')

const items =
  require('@groceristar/sd-wrapper/lib/data/Ingredients/items.json')

const userGrocery =
  require('@groceristar/sd-wrapper/lib/data/Users/userGrocery.json')

module.exports = {
  groceristar,
  favorites,
  items,
  userGrocery
}
