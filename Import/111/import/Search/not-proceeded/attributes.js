const path    = require('path');
const _       = require('underscore');

let Allergy    = require(path.resolve(__dirname, 'allergy'));
let Course     = require(path.resolve(__dirname, 'courses'));
let Cuisine    = require(path.resolve(__dirname, 'cuisines'));
let Diet       = require(path.resolve(__dirname, 'diets'));
let Holiday    = require(path.resolve(__dirname, 'holidays'));

// let Nutritions = require(path.resolve(__dirname, 'nutritions'));

let table_name = 'Attribute'

const get = () => {

  	return 
  	_.union(
		Allergy.get(),
		Course.get(),
		Cuisine.get(),
		Diet.get(),
		Holiday.get(),
		// Nutritions.get()
	);
};


module.exports.get        = get;
module.exports.table_name = table_name;
