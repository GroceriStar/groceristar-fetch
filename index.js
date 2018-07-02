const fs = require('fs');
const allergies    = './data/allergies.json';
const courses      = './data/courses.json';
const cuisines     = './data/cuisines.json';
const diets        = './data/diets.json';
const holidays     = './data/holidays.json';
const ingredients  = './data/ingredients.json';
const ingredients2 = './data/ingredients2.json';
const measurements = './data/measurements.json';

module.getAllergies = () => {
	var x = fs.readFileSync(allergies, 'utf-8')
	if( x === '' ){
		console.log('File does not exist')
		return 'error';
	}	else {
		// console.log(x)
		return JSON.parse(x);
	}
}

module.getCourses = () => {
	var x = fs.readFileSync(courses, 'utf-8')
	if(x === ''){
		console.log('File does not exist')
		return 'error';
	} else {
		// console.log(x)
		return JSON.parse(x);
	}
}

module.getCuisines = () => {
	var x = fs.readFileSync(cuisines, 'utf-8')
	if(x === ''){
		console.log('File does not exist')
		return 'error';
	} else {
		// console.log(x)
		return JSON.parse(x);
	}
}

module.getDiets = () => {
	var x = fs.readFileSync(diets, 'utf-8')
	if(x === ''){
		console.log('File does not exist')
		return 'error';
	} else {
		// console.log(x)
		return JSON.parse(x);
	}
}

module.getHolidays = () => {
	var x = fs.readFileSync(holidays, 'utf-8')
	if(x === ''){
		console.log('File does not exist')
		return 'error';
	} else {
		// console.log(x)
		return JSON.parse(x);
	}
}

module.getIngredients = () => {
	var x = fs.readFileSync(ingredients, 'utf-8')
	if(x === ''){
		console.log('File does not exist')
		return 'error';
	} else {
		// console.log(x)
		return JSON.parse(x);
	}
}

module.getIngredients2 = () => {
	var x = fs.readFileSync(ingredients2, 'utf-8')
	if(x === ''){
		console.log('File does not exist')
		return 'error';
	} else {
		// console.log(x)
		return JSON.parse(x);
	}
}

module.getMeasurements = () => {
	var x = fs.readFileSync(measurements, 'utf-8')
	if(x === ''){
		console.log('File does not exist')
		return 'error';
	} else {
		// console.log(x)
		return JSON.parse(x);
	}
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
