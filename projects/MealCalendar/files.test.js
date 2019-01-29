// const files = require("./files.js");
const mealCalendarMethods = require('./mealCalendar.js');

describe("testing static data files returns array", () => {

  test('getMealCalendar should return some data', () => {
    var stream = mealCalendarMethods.getMealCalendar()
    expect(stream).not.toBe('')
  })

//@TODO yes, it's a bad name
  test('getFVGLMC should return data from second file', () => {
    var stream = mealCalendarMethods.getFVGLMC()
    expect(stream).not.toBe('')
  })

})
