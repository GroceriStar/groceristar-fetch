const graphQL = require("./graphQL.js");

// @TODO move to beforeIt
const methodsList = {
  getFavorites: graphQL.getFavorites(),
  getItems: graphQL.getItems(),
  getUserGrocery: graphQL.getUserGrocery()
}

describe("testing static data files returns array", () => {

  const testFileIsNotEmpty = ( method ) => {

    test("method {$method}()", () => {
      var result = methodsList[method];

      expect(result).not.toBe("");
    })
  }

  testFileIsNotEmpty('getFavorites')
  testFileIsNotEmpty('getItems')
  testFileIsNotEmpty('getUserGrocery')




})
