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

const zi = function(){
  return 'faggot';
}

// module.pathToJson = function (){
//   // path.dirname(__filename)
//   return path.dirname('./data/Allergy/allergies.json');
// };

// module.getAttribute = function (attribute) {
//   switch (attribute) {
//     case 'allergy':
//       return parser(allergies);
//       break;
//     case 'cuisine':
//       return parser(cuisines);
//       break;
//     case 'course':
//       return parser(courses);
//       break;
//     case 'holidays':
//       return parser(holidays);
//       break;
//     case 'diets':
//       return parser(diets);
//       break;

//     default: return "Incorrect attribute or empty argument";

//   }
// }

// // module.getAllergies = function () {
// // 	return parser( allergies );
// // }
// //
// // module.getCourses = function () {
// // 	return parser( courses );
// // }
// //
// // module.getCuisines = function () {
// // 	return parser( cuisines );
// // }
// //
// // module.getDiets = function () {
// // 	return parser( diets );
// // }
// //
// // module.getHolidays = function () {
// // 	return parser( holidays );
// // }

// module.getIngredients1 = function () {
// 	return parser( ingredients1 );
// }

// module.getIngredients2 = function () {
// 	return parser( ingredients2 );
// }

// module.getMeasurements = function () {
// 	return parser( measurements );
// }

// module.exports = module;

module.exports = {
  zaza: zi
}
