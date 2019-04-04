// const path = require('path')
// const uuidv1 = require('uuid/v1')
// const dayjs = require('dayjs')

const _ = require('lodash')

// main reason for having this file, because i'm trying to move away repetetive functions
// @TODO Arthur have at least 3-5 different modules, that should replace this method
// @TODO do we need it? https://github.com/sindresorhus/parse-json
const parser = function (file) {
  // return JSON.parse(JSON.stringify(file))
  return file
}

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

// function that will improve work with uuid id generator
const __generateId(){
  // uuidv1()
  // return ''
}

//@TODO can be one method with different types.
const __generateDate(){
  // dayjs().toDate()
  // return ''

}

module.exports = {
  parser,
  __l,
  __find,
  __get
}
