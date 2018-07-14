const allergies    = require('./data/Allergy/allergies.json');
const courses      = require('./data/Course/courses.json');
const cuisines     = require('./data/Cuisine/cuisines.json');
const diets        = require('./data/Diet/diets.json');
const holidays     = require('./data/Holiday/holidays.json');
const ingredients1  = require('./data/Ingredient/ingredients1.json');
const ingredients2 = require('./data/Ingredient/ingredients2.json');
const measurements = require('./data/Measurement/measurements.json');

const parser = function ( filename ){

	return JSON.parse( JSON.stringify(filename) )

}

module.getAllergies = function () {
	// var x = fs.readFileSync(allergies, 'utf-8')
	// if(x === ''){
	// 	console.log('File does not exist')
	// 	return 'error';
	// }
	// else{
	// 	// console.log(x)
	// 	return JSON.parse(x);
	// }

	return parser( allergies );
}

module.getCourses = function () {
	// var x = fs.readFileSync(courses, 'utf-8')
	// if(x === ''){
	// 	console.log('File does not exist')
	// 	return 'error';
	// }
	// else{
	// 	// console.log(x)
	// 	return JSON.parse(x);
	// }
	return parser( courses );
}

module.getCuisines = function () {
	// var x = fs.readFileSync(cuisines, 'utf-8')
	// if(x === ''){
	// 	console.log('File does not exist')
	// 	return 'error';
	// }
	// else{
	// 	// console.log(x)
	// 	return JSON.parse(x);
	// }
	return parser( cuisines );
}

module.getDiets = function () {
	// var x = fs.readFileSync(diets, 'utf-8')
	// if(x === ''){
	// 	console.log('File does not exist')
	// 	return 'error';
	// }
	// else{
	// 	// console.log(x)
	// 	return JSON.parse(x);
	// }
	return parser( diets );
}

module.getHolidays = function () {
	// var x = fs.readFileSync(holidays, 'utf-8')
	// if(x === ''){
	// 	console.log('File does not exist')
	// 	return 'error';
	// }
	// else{
	// 	// console.log(x)
	// 	return JSON.parse(x);
	// }
	return parser( holidays );
}

module.getIngredients1 = function () {
	// var x = fs.readFileSync(ingredients, 'utf-8')
	// if(x === ''){
	// 	console.log('File does not exist')
	// 	return 'error';
	// }
	// else{
	// 	// console.log(x)
	// 	return JSON.parse(x);
	// }
	return parser( ingredients1 );
}

module.getIngredients2 = function () {
	// var x = fs.readFileSync(ingredients2, 'utf-8')
	// if(x === ''){
	// 	console.log('File does not exist')
	// 	return 'error';
	// }
	// else{
	// 	// console.log(x)
	// 	return JSON.parse(x);
	// 	}
	return parser( ingredients2 );
}

module.getMeasurements = function () {
	// var x = fs.readFileSync(measurements, 'utf-8')
	// if(x === ''){
	// 	console.log('File does not exist')
	// 	return 'error';
	// }
	// else{
	// 	// console.log(x)
	// 	return JSON.parse(x);
	// }
	return parser( measurements );
}
module.exports = module;
