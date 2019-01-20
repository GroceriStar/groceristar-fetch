const _            = require('lodash');
const fs           = require('fs');
const uuidv1       = require('uuid/v1');

const groceristar = require('../GroceriStar/groceristar');

// @TODO i think as showcase is a separated project, we can move this method to
// a separated place, in order to make it cleaner
const getGroceryShowcase = function() {
  //@TODO can we just merge together 2 arrays instead of adding this 2 values?
  //maybe it can be better

  let parsedGroceries = groceristar.getGrocery();
  // console.log(parsedGroceries);

  let groceriesWithCss = parsedGroceries.map((item) => {
    item.height = 200;
    item.css = "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
    return item;
  });
  // console.log(groceriesWithCss);

  return groceriesWithCss;
}

module.exports = {
  getGroceryShowcase
}
