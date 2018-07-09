// const fs = require('fs'); will work for backend uses
const allergies    = require('./data/Allergy/allergies.json');
const courses      = require('./data/Course/courses.json');
const cuisines     = require('./data/Cuisine/cuisines.json');
const diets        = require('./data/Diet/diets.json');
const departmentsData = require('./data/Departments/departmentsData.json');
const groceryData = require('./data/Grocery/groceryData.json');
const holidays     = require('./data/Holiday/holidays.json');
const ingredients  = require('./data/Ingredient/ingredients.json');
const ingredientsData  = require('./data/Ingredients/ingredientsData.json');
const ingredients2 = require('./data/Ingredient/ingredients2.json');
const measurements = require('./data/Measurement/measurements.json');
const usersData = require('./data/Users/usersData.json');

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
	return parser( ingredients );
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

module.getIngredientsData = function() {
	return parser( ingredientsData )
}

module.getGroceryData = function() {
	return parser( groceryData )
}

module.getUsersData = function() {
	return parser( usersData )
}

module.getDepartmentsData = function() {
	return parser( departmentsData )
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

// var test = module.getIngredientsData();
// console.log(test);

// var test = module.getGroceryData();
// console.log(test);

// var test = module.getUsersData();
// console.log(test);

// var test = module.getDepartmentsData();
// console.log(test);

module.exports = module;
