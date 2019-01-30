const loopback = require("./loopback.js");

describe("testing static data files returns array", () => {

  test('getMealCalendar should return some data', () => {
    var result = loopback.getUltimateGrocery()
    expect(result).not.toBe('')
  })

})
