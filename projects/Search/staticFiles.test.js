const search       = require("./projects/Search/search.js");

describe("testing static data files returns array", () => { 

  test("method getDepartmentsGraphQL()", () => {
    var stream = graphQL.getDepartmentsGraphQL();
    expect(stream).not.toBe("");
  })
    // test('ingredients1 file is set', () => {
  //   var stream = search.getIngredients1()
  //   expect(stream).not.toBe('')
  // })

  // test('ingredients2 file is set', () => {
  //   var stream = search.getIngredients2()
  //   expect(stream).not.toBe('')
  // })

  // test('measurements file is set', () => {
  //   var stream = search.getMeasurements()
  //   expect(stream).not.toBe('')
  // })
});
