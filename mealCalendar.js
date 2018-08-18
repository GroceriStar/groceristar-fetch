const mealCalendar = require('./data/MealCalendar/mealcalendar.json');

const parser = function (filename) {
  return JSON.parse(JSON.stringify(filename))
}

module.getMealCalendar = function () {
  return parser(mealCalendar);
}

module.getDishByDay = function (day) {
  const dishes = [];
  mealCalendar.map(meal =>
    meal.recipes.map(recipe => {
      if (recipe.day === day) {
        dishes.push({ id: meal.id, recipes: [recipe] });
      }
    })
  );
  return dishes;
}

module.getDishByWeek = function (week) {
  return parser(mealCalendar).filter(meal => meal.id === week);
}

module.exports = module;