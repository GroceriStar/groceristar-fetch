const staticData = require('@groceristar/sd-wrapper')
const groceristar = require('../GroceriStar/groceristar')

const favorites = staticData.favorites

const items = staticData.items

const userGrocery = staticData.userGrocery
  // require('@groceristar/sd-wrapper/dist/data/Users/userGrocery.json')

module.exports = {
  groceristar,
  favorites,
  items,
  userGrocery
}
