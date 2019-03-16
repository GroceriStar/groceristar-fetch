const _ = require('lodash')
const uuidv1 = require('uuid/v1')
const path = require('path')
const {
  parser, pathToJson, __get
} = require('../../helper')

// const { 
//   allergies, 
//   courses, 
//   cuisines, 
//   diets, 
//   holidays, 
//   ingredients1, 
//   measurements 
// } = require('./files')

const files = { 
  allergies, 
  courses, 
  cuisines, 
  diets, 
  holidays, 
  ingredients1, 
  measurements,
  file
} = require('./files')

// @TODO why we name files as plurals but attributes as singular noun?
// please advice
// const getRawFiles = function () {
//   return {
//     'allergy': allergies,
//     'course': courses,
//     'cuisine': cuisines,
//     'diet': diets,
//     'holiday': holidays,
//     'ingredient': ingredients1,
//     'measurement': measurements
//   }
// }

// const object = {
//   'allergy': allergies,
//   'course': courses,
//   'cuisine': cuisines,
//   'diet': diets,
//   'holiday': holidays,
//   'ingredient': ingredients1,
//   'measurement': measurements
// }

// experimental method, like getRawFiles
// first of all lodash has _.get method.
// second - this method is not good, and it should be used only inside the plugin
// @TODO update/change it later, when we'll separate files with business logic.
const __find = (alias) => {
  // const files = getRawFiles()
  // const result = files[alias]
  const result = _.get(files, alias)
  // console.log(alias)
  console.log(files)
  return __get(result)
}

// we got this array [ one, two, three ]
// return [ { label: one, value:one } ]
const proceedData = (array) => {
  const result = _.map(array, item => ({
    label: item,
    value: _.camelCase(item)
  }))
  return result
}

// return data, related to recipe attributes by name of attribute(read category of meal)
// maybe it's better to name it getAttributeData....
const getAttribute = function (attribute) {
  switch (attribute) {
    case 'allergies':
      return __get(allergies)
      break
    case 'cuisines':
      return __get(cuisines)
      break
    case 'courses':
      return __get(courses)
      break
    case 'holidays':
      return __get(holidays)
      break
    case 'diets':
      return __get(diets)
      break

    default:
      return 'Incorrect attribute or empty argument'
  }
}

const getFormattedAttributes = function (attribute) {
  return proceedData(getAttribute(attribute))
}

const getPlaceholder = function (attribute, flag = false) {
  if (attribute == 'allergy') {
    return 'Allergies'
  }
  if (attribute == 'diets') {
    return 'Specific Diets'
  }
  if (attribute == 'cuisine') {
    return 'Specific Cuisine '
  }
  if (attribute == 'course') {
    return 'Course'
  }
  if (attribute == 'holidays') {
    return 'Holiday'
  }
  // case for ingredients, not for attributes...
  if (attribute == 'ingredient') {
    return (flag) ? 'Ingredients you have' : "Ingredients you don't have"
  }

  // @TODO use this instead of ifs
  // switch (attribute) {
  //   case 'allergies':
  //     return parser(allergies);
  //     break;
  //   case 'cuisines':
  //     return parser(cuisines);
  //     break;
  //   case 'courses':
  //     return parser(courses);
  //     break;
  //   case 'holidays':
  //     return parser(holidays);
  //     break;
  //   case 'diets':
  //     return parser(diets);
  //     break;
  //
  //   default: return "Incorrect attribute or empty argument";
  // }
}

// this method can have a duplicates..... related to another project
const getIngredients = function () {
  return __get(ingredients1)
}

const getFormattedIngredients = function () {
  return proceedData(getIngredients())
}

// @TODO check if this method will work fine with situation where we have disabled values.
// @TODO check if this structure can be passed at React-Select module as well and
// will it generate a working select or not - I assume no, but we should test it
// we'll use it at recipe-search-react/SearchForm.js

// toOpt is a method from react-select plugin
// @TODO change name later and also buzz me - so we'll replace the name at our other sources....
// i like this name - Prepare Data for Select Field
const toOpt = function (data) {
  // console.log('react-select case');

  if (_.isArray(data)) {
    const result = _.map(data, ({
      value,
      label,
      disabled
    }) => ({
      key: uuidv1(),
      value,
      label,
      disabled: (disabled) || false
    }))

    return result
  }

  // for cases with issues.
  return []
}

// similar to previous method, but we have this structure.
// i think it's better to split it into 2 methods and don't f**k with brain
// antD receive this for select option: { key, label, disabled }
// react-select receive this for option: { value, label, disabled }
const toOptAntD = (data) => {
  // console.log('antD case');

  if (_.isArray(data)) {
    // const a = _.map(data, item => {
    //   console.log(item);
    // })

    const result = _.map(data, ({
      value,
      label,
      disabled
    }) => ({
      key: uuidv1(),
      value,
      label,
      isDisabled: (disabled) || false
    }))

    return result
    // return 0;
  }

  // for cases with issues.
  return []
}

module.exports = {
  // getRawFiles,
  __find,

  pathToJson,
  proceedData,
  getAttribute,
  getFormattedAttributes,
  getPlaceholder,
  getIngredients,
  getFormattedIngredients,

  toOpt,
  toOptAntD
}

// module.exports = module;
