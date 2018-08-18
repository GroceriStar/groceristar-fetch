const mealCalendar = require('./mealCalendar.js');
const mealcalendar = require('./data/MealCalendar/mealcalendar.json');

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
    mealcalendar.map(meal => {
      var stream = mealCalendar.getDishByWeek(meal.id)
      expect(stream).not.toBe('')
    })
  })

})
