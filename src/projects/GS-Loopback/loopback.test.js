const loopback = require('./loopback.js')

describe('testing static data files returns array', () => {
  test('getUltimateGrocery method should return some data', () => {
    var result = loopback.getUltimateGrocery()
    expect(result).not.toBe('')
  })

  test('getGLwithUserRelations method should return some data', () => {
    var result = loopback.getGLwithUserRelations()
    expect(result).not.toBe('')
  })

  test('getIngredientsSampleFromDB method should return some data', () => {
    var result = loopback.getIngredientsSampleFromDB()
    expect(result).not.toBe('')
  })
})
