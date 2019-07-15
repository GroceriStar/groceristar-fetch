/* global describe, it, test, expect */
// change require to import
 import * as mealCalendar from '../src/index'

// describe('Meal Calendar. basic methods should work', () => {
//   it('getDishByDay', () => {
//     var result = mealCalendarMethods.getDishByDay('Monday')
//     expect(result).not.toBe('')
//   })

//   it('getDishByWeek', () => {
//     // @TODO maybe we can remove include from files...
//     mealCalendar.map(meal => {
//       var result = mealCalendarMethods.getDishByWeek(meal.id)
//       expect(result).not.toBe('')
//     })
//   })

//   it('getDishByMonth', () => {
//     for (let i = 1; i <= 5; i++) {
//       var result = mealCalendarMethods.getDishByMonth(i)
//       expect(result).not.toBe('')
//     }
//   })
// })

describe('iting static data files are set', () => {
  const methodList = {
    getDishByWeek: mealCalendar.getDishByWeek(40),
    getDishByMonth: mealCalendar.getDishByMonth(3),
    getDishByDay: mealCalendar.getDishByDay('tuesday')
  }

  const methodReturnsArray = method => {
    it(`MealCalendar method ${method} is returning array`, () => {
      const result = methodList[method]
      expect(result).toEqual(
        expect.arrayContaining(result)
      )
    })
  }

  methodReturnsArray('getDishByWeek')
  methodReturnsArray('getDishByMonth')
  methodReturnsArray('getDishByDay')
})
