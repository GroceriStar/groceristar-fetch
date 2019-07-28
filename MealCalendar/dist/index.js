import _ from 'lodash'
import { __find } from '../../utils'

var _this = this

var _require = require('./files')

var mealCalendar = _require.mealCalendar

var firstVeganGLMC = _require.firstVeganGLMC // module.getDishByDay = function(day, maxDishes = mealCalendar.length) {
//   return _.filter(parser(mealCalendar), (meal, index) => {
//     if (index < maxDishes) {
//       return {
//         ...meal,
//         recipes: _.filter(meal.recipes, { day })
//       };
//     }
//   });
// };

var getDishByDay = function getDishByDay (day) {
  var result = [] // _.map(mealCalendar, function (item) {
  //   return _.filter(item['recipes'], function (arr) {
  //     if (arr[0].day === day) {
  //       arr[0].id = item.id
  //       result.push(arr[0])
  //     }
  //   })
  // })

  return result
}

var getDishByMonth = function getDishByMonth (monthNumb) {
  if (monthNumb < 1 || monthNumb > 5) return []
  var totalWeeks = monthNumb * 4 + 1

  var weeks = _.range(totalWeeks - 4, totalWeeks)

  return _.map(weeks, function (week) {
    return _this.getDishByWeek('week '.concat(week))[0]
  })
}

var getDishByWeek = function getDishByWeek (week) {
  // return _.filter(parser(mealCalendar), {
  //   id: week
  // })
  return []
}

export { getDishByWeek, getDishByMonth, getDishByDay, __find }
