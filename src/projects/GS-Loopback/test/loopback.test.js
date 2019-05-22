/* global describe, it, expect */
const loopback = require('../loopback.js')

describe('testing static data files returns array', () => {
  const methodList = {
    getUltimateGrocery: loopback.getUltimateGrocery(),
    getGLwithUserRelations: loopback.getGLwithUserRelations(),
    getUserObject: loopback.getUserObject('Vadim'),
    getIngredientsSampleFromDB: loopback.getIngredientsSampleFromDB()
  }

  const methodReturnsArray = method => {
    it(`loopback method ${method} is returning array`, () => {
      const result = methodList[method]
      expect(result).is(Array)
    })
  }
  methodReturnsArray('getUltimateGrocery')
  methodReturnsArray('getGLwithUserRelations')
  methodReturnsArray('getIngredientsSampleFromDB')
  methodReturnsArray('getUserObject')
})
