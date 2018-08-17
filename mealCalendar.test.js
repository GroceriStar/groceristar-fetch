const mealCalendar = require('./mealCalendar.js')

describe('testing static data files are set', () => {

  test('getMealCalendar', () => {
    var stream = mealCalendar.getMealCalendar()
    expect(stream).not.toBe('')
  })

  test('getDishByDay', () => {
    var stream = mealCalendar.getDishByDay('Monday')
    expect(stream).not.toBe('')
  })

  test('getDishByWeek', () => {
    var stream = mealCalendar.getDishByWeek('week18')
    expect(stream).not.toBe('')
  })

})
