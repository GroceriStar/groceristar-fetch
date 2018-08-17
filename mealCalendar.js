const mealCalendar = require('./data/MealCalendar/mealcalendar.json');

const parser = function (filename) {
  return JSON.parse(JSON.stringify(filename))
}

module.getMealCalendar = function () {
  return parser(mealCalendar);
}

module.getDishByDay = function (day) {
  return parser(mealCalendar.filter(meal => meal.day === day));
}

module.getDishByWeek = function (week) {
  return parser(mealCalendar.filter(meal => meal.id === week));
}

module.exports = module;