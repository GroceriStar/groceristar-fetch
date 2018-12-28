const allergies     = require('../../data/Allergy/allergies.json');
const courses       = require('../../data/Course/courses.json');
const cuisines      = require('../../data/Cuisine/cuisines.json');
const diets         = require('../../data/Diet/diets.json');
const holidays      = require('../../data/Holiday/holidays.json');
const ingredients1  = require('../../data/Ingredients/ingredients1.json');
const measurements  = require('../../data/Measurement/measurements.json');




const path = require('path')

const parser = function ( filename ){

    return JSON.parse( JSON.stringify(filename) )

}


module.pathToJson = function (){
  // path.dirname(__filename)
  return path.dirname('./data/Allergy/allergies.json');
};

module.getAttribute = function (attribute) {
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

    default: return "Incorrect attribute or empty argument";

  }
}

module.getPlaceholder = function(attribute, flag = false) {
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
  if( attribute == 'ingredient' ) {
     return  ( flag ) ? "Ingredients you have" : "Ingredients you don't have";
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


module.getIngredientsRelatedToSearch = function() {
	return parser( ingredients1 )
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
module.getOptionsForSelectFieldV1 = function(attribute){
    const data = getAttribute(attribute);
    console.log(data);
    //....
}

module.exports = module;
