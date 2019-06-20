const staticData = require('@groceristar/sd-wrapper')
const groceristar = require('../GroceriStar/groceristar')

const favorites = staticData.favorites
const items = staticData.items
const userGrocery = staticData.userGrocery

module.exports = {
  groceristar,
  favorites,
  items,
  userGrocery
}
