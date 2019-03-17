const path = require('path')

// main reason for having this file, because i'm trying to move away repetetive functions
// @TODO Arthur have at least 3-5 different modules, that should replace this method
const parser = function (filename) {
  return JSON.parse(JSON.stringify(filename))
}

const sliceArray = (array, number) => {
  return array.slice(0, number)
}

// @TODO Arthur have at least 3 different modules, that should replace this method
const pathToJson = function () {
  // path.dirname(__filename)
  return path.dirname('./data/Allergy/allergies.json')
}

const __l = function (value) {
  return console.log(value)
}

const __get = (value) => {
  return parser(value)
}

module.exports = {
  parser,
  pathToJson,
  sliceArray,
  __l,
  __get
}
