const allergies     = require('./data/Allergy/allergies.json');
const courses       = require('./data/Course/courses.json');
const cuisines      = require('./data/Cuisine/cuisines.json');
const diets         = require('./data/Diet/diets.json');
const holidays      = require('./data/Holiday/holidays.json');
const ingredients1  = require('./data/Ingredients/ingredients1.json');
const ingredients2  = require('./data/Ingredients/ingredients2.json');
const measurements  = require('./data/Measurement/measurements.json');

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

module.getPlaceholder = function(attribute) {
  if (attribute == 'Allergy') {
    return "Allergies";
  }
  if (attribute == 'Diets') {
    return "Specific Diets";
  }
  if (attribute == 'Cuisine') {
    return "Specific Cuisine ";
  }
  if (attribute == 'Course') {
    return "Course";
  }
  if (attribute == 'Holidays') {
    return "Holiday";
  }
}

module.exports = module;
