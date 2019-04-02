const path = require('path')
const _ = require('lodash')

// main reason for having this file, because i'm trying to move away repetetive functions
// @TODO Arthur have at least 3-5 different modules, that should replace this method
// @TODO do we need it? https://github.com/sindresorhus/parse-json
const parser = function (file) {
  // return JSON.parse(JSON.stringify(file))
  return file
}


// @TODO Arthur have at least 3 different modules, that should replace this method
// const pathToJson = function () {
//   // path.dirname(__filename)
//   return path.dirname('./data/Allergy/allergies.json')
// }

const __l = function (value) {
  return console.log(value)
}

const __get = (value) => {
  return parser(value)
}

const __find = (alias, files) => {
  // console.log(files);
  const result = _.get(files, alias)
  // console.log(alias);
  // console.log(result);
  return __get(result)
}

module.exports = {
  parser,
  // pathToJson,
  sliceArray,
  __l,
  __find,
  __get
}
