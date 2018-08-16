const _            = require('lodash');
const departments  = require('./data/Departments/departments.json');
const groceries    = require('./data/Grocery/grocery.json');
const ingredients  = require('./data/Ingredients/ingredients.json');
const users        = require('./data/Users/users.json');
const mealPlan1    = require('./data/MealCalendar/meal_plan1.json');
const weeklyPlan2  = require('./data/MealCalendar/weekly_plan2.json');
const weeklyPlan3  = require('./data/MealCalendar/weekly_plan3.json');
const weeklyPlan4  = require('./data/MealCalendar/weekly_plan4.json');
const weeklyPlan5  = require('./data/MealCalendar/weekly_plan5.json');
const weeklyPlan6  = require('./data/MealCalendar/weekly_plan6.json');
const weeklyPlan7  = require('./data/MealCalendar/weekly_plan7.json');
const weeklyPlan8  = require('./data/MealCalendar/weekly_plan8.json');
const weeklyPlan9  = require('./data/MealCalendar/weekly_plan9.json');
const weeklyPlan10  = require('./data/MealCalendar/weekly_plan10.json');
const weeklyPlan11  = require('./data/MealCalendar/weekly_plan11.json');
const weeklyPlan12  = require('./data/MealCalendar/weekly_plan12.json');
const weeklyPlan13  = require('./data/MealCalendar/weekly_plan13.json');
const weeklyPlan14  = require('./data/MealCalendar/weekly_plan14.json');
const weeklyPlan15  = require('./data/MealCalendar/weekly_plan15.json');
const planningWeek16 = require('./data/MealCalendar/planning_week_16.json');
const planningWeek17 = require('./data/MealCalendar/planning_week_17.json');
const planningWeek18 = require('./data/MealCalendar/planning_week_18.json');
const planningWeek19 = require('./data/MealCalendar/planning_week_19.json');
const planningWeek20 = require('./data/MealCalendar/planning_week_20.json');




const parser = function ( filename ){

	return JSON.parse( JSON.stringify(filename) )

}

module.getIngredients = function() {
	return parser( ingredients )
}

module.getGrocery = function() {
	return parser( groceries )
}

module.getUsers = function() {
	return parser( users )
}

module.getDepartments = function() {
	return parser( departments )
}

module.getMealPlan1 = function() {
  return parser( mealPlan1 );
}

module.getWeekPlan2 = function() {
  return parser( weeklyPlan2 );
}

module.getWeekPlan3 = function() {
  return parser( weeklyPlan3 );
}

module.getWeekPlan4 = function() {
  return parser( weeklyPlan4 );
}

module.getWeekPlan5 = function() {
  return parser( weeklyPlan5 );
}

module.getWeekPlan6 = function() {
  return parser( weeklyPlan6 );
}

module.getWeekPlan7 = function() {
  return parser( weeklyPlan7 );
}

module.getWeekPlan8 = function() {
  return parser( weeklyPlan8 );
}

module.getWeekPlan9 = function() {
  return parser( weeklyPlan9 );
}

module.getWeekPlan10 = function() {
  return parser( weeklyPlan10 );
}

module.getWeekPlan11 = function() {
  return parser( weeklyPlan11 );
}

module.getWeekPlan12 = function() {
  return parser( weeklyPlan12 );
}

module.getWeekPlan13 = function() {
  return parser( weeklyPlan13 );
}

module.getWeekPlan14 = function() {
  return parser( weeklyPlan14 );
}

module.getWeekPlan15 = function() {
  return parser( weeklyPlan15 );
}

module.getPlanningWeek16 = function() {
  return parser( planningWeek16 );
}

module.getPlanningWeek17 = function() {
  return parser( planningWeek17 );
}

module.getPlanningWeek18 = function() {
  return parser( planningWeek18 );
}

module.getPlanningWeek19 = function() {
  return parser( planningWeek19 );
}

module.getPlanningWeek20 = function() {
  return parser( planningWeek20 );
}

// @TODO will work only when we have one grocery list
module.getAllDepartments = function(){
	return _.map(groceries[0]["departments"])
}

module.getAllIngredientsByOneDepartment = function(department){

	var ingredientsList =
		_.filter(parser(ingredients),function(item){
			return item.department === department;
		});
	return _.map(ingredientsList,'name');
}



module.exports = module;
