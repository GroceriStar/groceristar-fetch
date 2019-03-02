const search      = require('./search.js')

describe("testing static data files returns array", () => {

  test("checking allergy attribute", () => {
    var result = search.__get('allergy');
    expect(result).not.toBe("");
  })

// @TODO replace this files with new version -  __.get() method
    // test('ingredients1 file is set', () => {
  //   var result = search.getIngredients1()
  //   expect(result).not.toBe('')
  // })

  // test('ingredients2 file is set', () => {
  //   var result = search.getIngredients2()
  //   expect(result).not.toBe('')
  // })

  // test('measurements file is set', () => {
  //   var result = search.getMeasurements()
  //   expect(result).not.toBe('')
  // })

});
