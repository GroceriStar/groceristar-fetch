const fs = require('fs');
const allergies = require('./data/allergies.json');
const courses = require('./data/courses.json');
const cuisines = require('./data/cuisines.json');
const diets = require('./data/diets.json');
const holidays = require('./data/holidays.json');
const ingredients = require('./data/ingredients.json');
const ingredients2 = require('./data/ingredients2.json');
const measurements = require('./data/measurements.json');

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
	
	return JSON.parse(JSON.stringify(allergies))
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
	return JSON.parse(JSON.stringify(courses))
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
	return JSON.parse(JSON.stringify(cuisines))
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
	return JSON.parse(JSON.stringify(diets))
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
	return JSON.parse(JSON.stringify(holidays))
}

module.getIngredients = function () {
	// var x = fs.readFileSync(ingredients, 'utf-8')
	// if(x === ''){
	// 	console.log('File does not exist')
	// 	return 'error';
	// }
	// else{
	// 	// console.log(x)
	// 	return JSON.parse(x);
	// }
	return JSON.parse(JSON.stringify(ingredients))
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
	return JSON.parse(JSON.stringify(ingredients2))
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
	return JSON.parse(JSON.stringify(measurements))
}

// var test = module.getAllergies();
// console.log(test[2])

// var test = module.getCourses();
// console.log(test[2])

// var test = module.getCuisines();
// console.log(test[2])

// var test = module.getDiets();
// console.log(test[2])

// var test = module.getHolidays();
// console.log(test[2])

// var test = module.getIngredients();
// console.log(test[2])

// var test = module.getIngredients2();
// console.log(test[2])

// var test = module.getMeasurements();
// console.log(test[2])

module.exports = module;
