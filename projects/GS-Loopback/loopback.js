const _            = require('lodash');
const fs           = require('fs');
const uuidv1       = require('uuid/v1');

const { parser }   = require('../../helper');

const ultimateGroceryList = require('../../data/Grocery/example/ultimate-gl-from-loopback-server-example.json');

const getUltimateGrocery = function() {
  return parser(ultimateGroceryList)
}



module.exports = {
  getUltimateGrocery
}
