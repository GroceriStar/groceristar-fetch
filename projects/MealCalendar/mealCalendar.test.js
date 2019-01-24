const mealCalendarMethods = require('./mealCalendar.js');

const { mealCalendar }  = require('./files');

describe('testing static data files are set', () => {

  test('getMealCalendar', () => {
    var stream = mealCalendarMethods.getMealCalendar()
    expect(stream).not.toBe('')
  })

  test('getDishByDay', () => {
    var stream = mealCalendarMethods.getDishByDay('Monday')
    expect(stream).not.toBe('')
  })

  test('getDishByWeek', () => {
    mealCalendar.map(meal => {
      var stream = mealCalendarMethods.getDishByWeek(meal.id)
      expect(stream).not.toBe('')
    })
  })

  test('getDishByMonth', () => {
    for (let i = 1; i <= 5; i++) {
      var stream = mealCalendarMethods.getDishByMonth(i)
      expect(stream).not.toBe('')
    }
  })

})
