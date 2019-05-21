/* global test, describe, it, expect, jest */
const mealCalendar = require('../mealCalendar.js')

// const { mealCalendar } = require('../files')

// describe('Meal Calendar. basic methods should work', () => {
//   test('getDishByDay', () => {
//     var result = mealCalendarMethods.getDishByDay('Monday')
//     expect(result).not.toBe('')
//   })

//   test('getDishByWeek', () => {
//     // @TODO maybe we can remove include from files...
//     mealCalendar.map(meal => {
//       var result = mealCalendarMethods.getDishByWeek(meal.id)
//       expect(result).not.toBe('')
//     })
//   })

//   test('getDishByMonth', () => {
//     for (let i = 1; i <= 5; i++) {
//       var result = mealCalendarMethods.getDishByMonth(i)
//       expect(result).not.toBe('')
//     }
//   })
// })

describe('testing static data files are set', () => {
  const methodList = {
    getDishByWeek: mealCalendar.getDishByWeek(40),
    getDishByMonth: mealCalendar.getDishByMonth(3),
    getDishByDay: mealCalendar.getDishByDay('tuesday')
  }

  methodReturnsArray = method => {
    test(`MealCalendar method ${method} is returning array`, () => {
      const result = methodList[method]
      expect(result).is(Array)
    })
  }

  methodReturnsArray('getDishByWeek')
  methodReturnsArray('getDishByMonth')
  methodReturnsArray('getDishByDay')
})
