const mealCalendarMethods = require('./mealCalendar.js');

const { mealCalendar }  = require('./files');

describe('Meal Calendar. basic methods should work', () => {


  test('getDishByDay', () => {
    var stream = mealCalendarMethods.getDishByDay('Monday')
    expect(stream).not.toBe('')
  })

  test('getDishByWeek', () => {
    //@TODO maybe we can remove include from files...
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
