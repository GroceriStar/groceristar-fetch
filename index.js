const search       = require('./search.js');
const groceristar  = require('./groceristar.js');
const chickenKyiv  = require('./chickenKyiv.js');
const mealCalendar = require('./mealCalendar.js');

// groceristar.count();

// module.count = function() {

// ing 619
// dep 58
// grocery 7
// users 3

// dep
// [
//   {
//     "name": "Fresh vegetables",
//     "type": "food"
//   },

// grocery
// [{
//     "departments": [
//     ],
//     "id": 1,
//     "name": "Ultimate Grocery List",
//     "img": false,
//     "desc": false,
//     "slug": false

// ingredient
// [{
//     "name": "Asparagus",
//     "department": "Fresh vegetables"
//   },

// users
// [{
//      "name": "john",
//      "email": "john.doe@ibm.com",
//      "password": "john1"
//    },

const _ = require('lodash')
	console.log('ingredient ' +  _.size(groceristar.getIngredients() ) )
	console.log('department ' +  _.size(groceristar.getDepartments() ) )
	console.log('grocery '    +  _.size(groceristar.getGrocery() ) )
	console.log('users '      +  _.size(groceristar.getUsers() ) )



// };

module.exports = module;
