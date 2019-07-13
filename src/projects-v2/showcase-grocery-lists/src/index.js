import * as _ from 'lodash'

const {
  __find
} = require('utils')

const {
  groceries
} = require('@files')

// @TODO can we update our methods - but we'll need to go step by step,
// because these methods used in our react projects.
// so I propose do it very carefully
const getGroceryShowcase = function () {
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

export {
  getGroceryShowcase,
  __find
}
