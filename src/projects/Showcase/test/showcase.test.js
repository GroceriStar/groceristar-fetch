/* global test, describe, it, expect, jest */
const showcase = require('../showcase.js')

describe('testing statics file are set', () => {
//   test('method getGroceryShowcase()', () => {
//     var result = showcase.getGroceryShowcase()
//     expect(result).not.toBe('')
//   })

  const methodList = {
    getGroceryShowcase: showcase.getGroceryShowcase()

  }

  methodReturnsArray = method => {
    test(`showcase  method ${method} is returning array`, () => {
      const result = methodList[method]
      expect(result).is(Array)
    })
  }

  methodReturnsArray('getGroceryShowcase')
})
