const _            = require('lodash');
const fs           = require('fs');
const uuidv1       = require('uuid/v1');
const { parser }   = require('../../helper');

const groceristar = require('../GroceriStar/groceristar');


const getGroceryShowcase = function() {
  //@TODO can we just merge together 2 arrays instead of adding this 2 values?
  //maybe it can be better

  //@TODO can be replaced later when we'll have __.get methods
  let groceries = groceristar.getGrocery();
  // console.log(parsedGroceries);

  let result = groceries.map((item) => {
    item.height = 200;
    item.css = "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
    return item;
  });
  // console.log(result);

  return result;
}

module.exports = {
  getGroceryShowcase
}
