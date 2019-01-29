const search       = require("./projects/Search/search.js");

describe("testing static data files returns array", () => {

  test("method getDepartmentsGraphQL()", () => {
    var result = graphQL.getDepartmentsGraphQL();
    expect(result).not.toBe("");
  })
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
