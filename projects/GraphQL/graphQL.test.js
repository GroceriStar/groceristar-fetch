const graphQL = require('./graphQL.js');

describe("graphQL methods should return data", () => {
  
  test("method getDepartmentsGraphQL()", () => {
    var stream = graphQL.getDepartmentsGraphQL();
    expect(stream).not.toBe("");
  })
     
 test("method getDepartmentsGraphQLKey()", () => {
    var stream = graphQL.getDepartmentsGraphQLKey();
    expect(stream).not.toBe("");
  }) 

   
 test("method getGroceryGraphQL()", () => {
    var stream = graphQL.getGroceryGraphQL();
    expect(stream).not.toBe("");
  })  
    
  test("method getGroceryGraphQLKey()", () => {
    var stream = graphQL.getGroceryGraphQLKey();
    expect(stream).not.toBe("");
  })    
    
  test("method getIngredientsGraphQL()", () => {
    var stream = graphQL.getIngredientsGraphQL();
    expect(stream).not.toBe("");
  })     
  
  test("method getIngredientsGraphQLKey()", () => {
    var stream = graphQL.getIngredientsGraphQLKey();
    expect(stream).not.toBe("");
  })   
  
  test("method getUsersGraphQL()", () => {
    var stream = graphQL.getUsersGraphQL();
    expect(stream).not.toBe("");
  })   
     
  test("method getUsersGraphQLKey()", () => {
    var stream = graphQL.getUsersGraphQLKey();
    expect(stream).not.toBe("");
  })   
 
  
    
  test("method getFavorites()", () => {
    var stream = graphQL.getFavorites();
    // console.log(graphQL.getUserGroceryGraphQL());
    // console.log(graphQL.getUserGroceryGraphQLKey());
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
