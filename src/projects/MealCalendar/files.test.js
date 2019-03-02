// const files = require("./files.js");
const mealCalendarMethods = require('./mealCalendar.js');

describe("testing static data files returns array", () => {

  test('getMealCalendar should return some data', () => {
    var result = mealCalendarMethods.getMealCalendar()
    expect(result).not.toBe('')
  })

//@TODO yes, it's a bad name
  test('getFVGLMC should return data from second file', () => {
    var result = mealCalendarMethods.getFVGLMC()
    expect(result).not.toBe('')
  })

})
