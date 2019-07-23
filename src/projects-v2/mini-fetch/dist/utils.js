// const path = require('path')
var uuidv1 = require('uuid/v1');

var dayjs = require('dayjs');

var _ = require('lodash'); // main reason for having this file, because i'm trying to move away repetetive functions
// @TODO Arthur have at least 3-5 different modules, that should replace this method
// @TODO do we need it? https://github.com/sindresorhus/parse-json
// const parser = function (file) {
//   // return JSON.parse(JSON.stringify(file))
//   return file
// }


var __l = function __l(value) {
  return console.log(value);
};

var __get = function __get(value) {
  return parser(value);
};

var __find = function __find(alias, files) {
  // console.log(files);
  var result = _.get(files, alias); // console.log(alias);
  // console.log(result);


  return __get(result);
}; // function that will improve work with uuid id generator


var __generateId = function __generateId() {
  return _.uniqueId(uuidv1());
}; // @TODO can be one method with different types.


var __generateDate = function __generateDate() {
  return dayjs().toDate();
};

module.exports = {
  // parser,
  __l: __l,
  __find: __find,
  __get: __get,
  __generateId: __generateId,
  __generateDate: __generateDate
};