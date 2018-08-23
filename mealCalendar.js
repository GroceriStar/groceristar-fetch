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

module.getDishByMonth = function (monthNumb) {
  if (monthNumb < 1 || monthNumb > 5) return [];
  const totalWeeks = monthNumb * 4 + 1;
  const dishes = [];
  for (let i = totalWeeks - 4; i < totalWeeks; i++) {
    dishes.push(this.getDishByWeek(`week${i}`)[0]);
  }
  return dishes;
}

module.getDishByWeek = function (week) {
  return parser(mealCalendar).filter(meal => meal.id === week);
}

module.exports = module;