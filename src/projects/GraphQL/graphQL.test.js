const graphQL = require('./graphQL.js')

describe('graphQL methods should return data', () => {
  test('method getDepartmentsGraphQL()', () => {
    var result = graphQL.getDepartmentsGraphQL()
    expect(result).not.toBe('')
  })

  test('method getDepartmentsGraphQLKey()', () => {
    var result = graphQL.getDepartmentsGraphQLKey()
    expect(result).not.toBe('')
  })

  test('method getGroceryGraphQL()', () => {
    var result = graphQL.getGroceryGraphQL()
    expect(result).not.toBe('')
  })

  test('method getGroceryGraphQLKey()', () => {
    var result = graphQL.getGroceryGraphQLKey()
    expect(result).not.toBe('')
  })

  test('method getIngredientsGraphQL()', () => {
    var result = graphQL.getIngredientsGraphQL()
    expect(result).not.toBe('')
  })

  test('method getIngredientsGraphQLKey()', () => {
    var result = graphQL.getIngredientsGraphQLKey()
    expect(result).not.toBe('')
  })

  test('method getUsersGraphQL()', () => {
    var result = graphQL.getUsersGraphQL()
    expect(result).not.toBe('')
  })

  test('method getUsersGraphQLKey()', () => {
    var result = graphQL.getUsersGraphQLKey()
    expect(result).not.toBe('')
  })
})
