const search       = require('./search.js');
const groceristar  = require('./groceristar.js');
const chickenKyiv  = require('./chickenKyiv.js');
const mealCalendar = require('./mealCalendar.js');

// groceristar.count();

// module.count = function() {
const _ = require('lodash')
	console.log('ingredient ' +  _.size(groceristar.getIngredients() ) )
	console.log('department ' +  _.size(groceristar.getDepartments() ) )
	console.log('grocery '    +  _.size(groceristar.getGrocery() ) )
	console.log('users '      +  _.size(groceristar.getUsers() ) )



// };

module.exports = module;
