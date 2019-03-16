// const files = require("./files.js");
const mealCalendarMethods = require('./mealCalendar.js')

const methodsList = {
  getMealCalendar: mealCalendarMethods.getMealCalendar(),
  getFVGLMC: mealCalendarMethods.getFVGLMC(),
}
describe('testing static data files returns array', () => {
  const testFileIsNotEmpty = (method) => {
    test('method {$method}()', () => {
      var result = methodsList[method]
      expect(result).not.toBe('')
    })
  }
  testFileIsNotEmpty('getMealCalendar')
  testFileIsNotEmpty('getFVGLMC')
})

/*
describe('testing static data files returns array', () => {
  test('getMealCalendar should return some data', () => {
    var result = mealCalendarMethods.getMealCalendar()
    expect(result).not.toBe('')
  })

  // @TODO yes, it's a bad name
  test('getFVGLMC should return data from second file', () => {
    var result = mealCalendarMethods.getFVGLMC()
    expect(result).not.toBe('')
  })
})
*/