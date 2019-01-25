const graphQL = require('./graphQL.js');

describe("graphQL methods should return data",() => {
  test("getFavorites()", () => {
    var stream = graphQL.getFavorites();
    // console.log(graphQL.getUserGroceryGraphQL());
    // console.log(graphQL.getUserGroceryGraphQLKey());
    expect(stream).not.toBe("");
  })

  test("getItems()", () => {
    var stream = graphQL.getItems();
    expect(stream).not.toBe("");
  })

  test("getUserGrocery()", () => {
    var stream = graphQL.getUserGrocery();
    expect(stream).not.toBe("");
  })
})
