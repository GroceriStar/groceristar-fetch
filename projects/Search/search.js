const _             = require('lodash');
const uuidv1        = require('uuid/v1');
const path          = require('path');

const allergies     = require('../../data/Allergy/allergies.json');
const courses       = require('../../data/Course/courses.json');
const cuisines      = require('../../data/Cuisine/cuisines.json');
const diets         = require('../../data/Diet/diets.json');
const holidays      = require('../../data/Holiday/holidays.json');
const ingredients1  = require('../../data/Ingredients/ingredients1.json');
const measurements  = require('../../data/Measurement/measurements.json');






// @TODO why we name files as plurals but attributes as singular noun?
// please advice
const getRawFiles = function() {
  return {
    'allergy': allergies,
    'course': course,
    'cuisine': cuisines,
    'diet': diets,
    'holiday': holiday,
    'ingredient': ingredients1,
    'measurement': measurements
  }
}


const parser = function(filename) {

  return JSON.parse(JSON.stringify(filename))

}


const pathToJson = function() {
  // path.dirname(__filename)
  return path.dirname('./data/Allergy/allergies.json');
};

// we got this array [ one, two, three ]
// return [ { label: one, value:one } ]
const proceedData = (array) => {
  const result = _.map(array, item => {
    return {
      label: item,
      value: _.camelCase(item)
    }
  })
  return result;
}

// return data, related to recipe attributes by name of attribute(read category of meal)
// maybe it's better to name it getAttributeData....
const getAttribute = function(attribute) {
  switch (attribute) {
    case 'allergies':
      return parser(allergies);
      break;
    case 'cuisines':
      return parser(cuisines);
      break;
    case 'courses':
      return parser(courses);
      break;
    case 'holidays':
      return parser(holidays);
      break;
    case 'diets':
      return parser(diets);
      break;

    default:
      return "Incorrect attribute or empty argument";

  }
}

const getFormattedAttributes = function(attribute) {
  return proceedData( getAttribute(attribute) );
}


const getPlaceholder = function(attribute, flag = false) {
  if (attribute == 'allergy') {
    return "Allergies";
  }
  if (attribute == 'diets') {
    return "Specific Diets";
  }
  if (attribute == 'cuisine') {
    return "Specific Cuisine ";
  }
  if (attribute == 'course') {
    return "Course";
  }
  if (attribute == 'holidays') {
    return "Holiday";
  }
  // case for ingredients, not for attributes...
  if (attribute == 'ingredient') {
    return (flag) ? "Ingredients you have" : "Ingredients you don't have";
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
const  getIngredients = function() {
  return parser(ingredients1)
}


const getFormattedIngredients = function() {
  return proceedData( getIngredients() );
}

// for antD version of select field we should have a method that return values as this example
// const options = [
//   { value: 'chocolate',  label: 'Chocolate'},
//   { value: 'strawberry', label: 'Strawberry'},
//   { value: 'vanilla',    label: 'Vanilla'  },
//   { value: 'vanilla-ice',    label: 'Vanilla Ice'},
//   { value: 'vanilla latte',    label: 'Vanilla Latte'},
//   { value: 'vanilla Chino',    label: 'Vanilla Chino'},
//   { value: 'vanilla double',    label: 'Vanilla Double' }
// ];
// Note: let's discuss a a different ways to handle values.
// we can keep it as in our example - but for some cases you'll need to have a function that will convert a label into a value.
// or we can connect an key-generator and use it similar to read ID values.
// Both options are ok for me.

// @TODO check if this method will work fine with situation where we have disabled values.
// @TODO check if this structure can be passed at React-Select module as well and
// will it generate a working select or not - I assume no, but we should test it
// we'll use it at recipe-search-react/SearchForm.js

// how to test? getOptionsForSelectFieldV1('diets') or getOptionsForSelectFieldV1('holidays')
const getOptionsForSelectFieldV1 = function(attribute) {
  const data = getAttribute(attribute);
  console.log(data);
  //....
}



// toOpt is a method from react-select plugin
// @TODO change name later and also buzz me - so we'll replace the name at our other sources....
// i like this name - Prepare Data for Select Field
const toOpt = function(data) {

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
      disabled: (disabled) ? disabled : false
    }))

    return result;
  }

  // for cases with issues.
  return [];
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
      isDisabled: (disabled) ? disabled : false
    }))

    return result;
    // return 0;
  }

  // for cases with issues.
  return [];
}


module.exports = {
  getRawFiles,
  pathToJson,
  proceedData,
  getAttribute,
  getFormattedAttributes,
  getPlaceholder,
  getIngredients,
  getFormattedIngredients,

  getOptionsForSelectFieldV1,

  toOpt,
  toOptAntD
}

// module.exports = module;
