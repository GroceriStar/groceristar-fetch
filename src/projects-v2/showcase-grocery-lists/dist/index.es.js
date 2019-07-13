import 'lodash'

var _require = require('./utils')

var __find = _require.__find

var _require2 = require('@files')

var groceries = _require2.groceries // @TODO can we update our methods - but we'll need to go step by step,
// because these methods used in our react projects.
// so I propose do it very carefully

var getGroceryShowcase = function getGroceryShowcase () {
  // @TODO can we just merge together 2 arrays instead of adding this 2 values?
  // maybe it can be better
  // let result = files.groceries.map((item) => {
  //   item.height = 200
  //   item.css = 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
  //   return item
  // })
  // console.log(result);
  return groceries
}

export { __find, getGroceryShowcase }
