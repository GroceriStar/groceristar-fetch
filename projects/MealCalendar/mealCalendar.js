const mealCalendar = require('../../data/MealCalendar/mealcalendar.json');
const _            = require('lodash');

const parser = function (filename) {
  return JSON.parse(JSON.stringify(filename))
}

module.getMealCalendar = function () {
  return parser(mealCalendar);
}

// module.getDishByDay = function(day, maxDishes = mealCalendar.length) {
//   return _.filter(parser(mealCalendar), (meal, index) => {
//     if (index < maxDishes) {
//       return {
//         ...meal,
//         recipes: _.filter(meal.recipes, { day })
//       };
//     }
//   });
// };

module.getDishByDay = function(day){
  let result =[];
   _.map(mealCalendar, function(item){
    return _.filter(item["recipes"],function(arr){
      if(arr[0].day === day){
        arr[0].id = item.id;
        result.push(arr[0])
        }
    })

  })
  return result;
}

module.getDishByMonth = function(monthNumb) {
  if (monthNumb < 1 || monthNumb > 5) return [];
  const totalWeeks = monthNumb * 4 + 1;
  const weeks = _.range(totalWeeks - 4, totalWeeks);
  return _.map(weeks, week => this.getDishByWeek(`week${week}`)[0]);
};

module.getDishByWeek = function(week) {
  return _.filter(parser(mealCalendar), { id: week });
};

module.exports = module;
