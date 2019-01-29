const graphQL = require("./graphQL.js");

// @TODO move to beforeIt
const methodsList = {
  getFavorites: graphQL.getFavorites(),
  getItems: graphQL.getItems(),
  getUserGrocery: graphQL.getUserGrocery()
}

describe("testing static data files returns array", () => {

  const testFileNotEmpty = ( method ) => {

  }

  test("method getFavorites()", () => {
    var stream = graphQL.getFavorites();

    expect(stream).not.toBe("");
  })

  test("method getItems()", () => {
    var stream = graphQL.getItems();
    expect(stream).not.toBe("");
  })

  test("method getUserGrocery()", () => {
    var stream = graphQL.getUserGrocery();
    expect(stream).not.toBe("");
  })

})
