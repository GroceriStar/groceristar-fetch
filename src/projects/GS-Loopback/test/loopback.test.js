/* global test, describe, it, expect, jest */
const loopback = require('../loopback.js')

describe('testing static data files returns array', () => {
  const methodList = {
    getUltimateGrocery: loopback.getUltimateGrocery(),
    getGLwithUserRelations: loopback.getGLwithUserRelations(),
    getUserObject: loopback.getUserObject('Vadim'),
    getIngredientsSampleFromDB: loopback.getIngredientsSampleFromDB()
  }

  methodReturnsArray = method => {
    test(`loopback method ${method} is returning array`, () => {
      const result = methodList[method]
      expect(result).is(Array)
    })
  }
  methodReturnsArray('getUltimateGrocery')
  methodReturnsArray('getGLwithUserRelations')
  methodReturnsArray('getIngredientsSampleFromDB')
  methodReturnsArray('getUserObject')
})
