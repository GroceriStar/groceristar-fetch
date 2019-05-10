/* global test, describe, it, expect, jest */
const graphQL = require('../graphQL.js')

describe('graphQL methods should return data', () => {
//   const nonEmptyMethodOutput = method => {
//     test(`${method} is returning non empty string`, () => {
//       const result = graphQL[method](parameter)
//       expect(result).not.toBe('')
//     })
    const methodList = {
              getDepartments: graphQL.getDepartments(),
              getDepartmentsKey: graphQL.getDepartmentsKey(),
              getGrocery: graphQL.getGrocery(),
              getGroceryKey: graphQL.getGroceryKey(),
              getIngredients:graphQL.getIngredients(),
              getIngredientsKeys:graphQL.getIngredientsKey(),
              getUsers:graphQL.getUsers(),
              getUsersKey:graphQL.getUsersKey(),
              getFavorites:graphQL.getFavorites(),
              getItems:graphQL.getItems(),
              getUserGrocery:graphQL.getUserGrocery(),
              getFavoritesKey:graphQL.getFavoritesKey(),
              getItemsKey:graphQL.getItemsKey(),
              getUserGroceryKey:graphQL.getUserGroceryKey()          
  }
    
      methodReturnsArray = method => {
    test(`graphQL method ${method} is returning array`, () => {
      const result = methodList[method]
      expect(result).is(Array)
    })

//   nonEmptyMethodOutput('getDepartmentsGraphQLKey')
//   nonEmptyMethodOutput('getGroceryGraphQL')
//   nonEmptyMethodOutput('getGroceryGraphQLKey')
//   nonEmptyMethodOutput('getIngredientsGraphQL')
//   nonEmptyMethodOutput('getIngredientsGraphQLKey')
//   nonEmptyMethodOutput('getUsersGraphQL')
//   nonEmptyMethodOutput('getUsersGraphQLKey')
        
          methodReturnsArray('getDepartments'),
          methodReturnsArray('getDepartmentsKey'),
          methodReturnsArray('getGrocery'),
          methodReturnsArray('getGroceryKey'),
          methodReturnsArray('getIngredients'),
          methodReturnsArray('getIngredientsKeys'),
          methodReturnsArray('getUsers'),
          methodReturnsArray('getUsersKey'),
          methodReturnsArray('getFavorites'),
          methodReturnsArray('getFavoritesKey'),
          methodReturnsArray('getItems'),
          methodReturnsArray('getItemsKey'),
          methodReturnsArray('getUserGrocery'),
          methodReturnsArray('getUserGroceryKey')
        
})
