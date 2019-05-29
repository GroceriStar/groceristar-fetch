/* global describe, it, expect */
const showcase = require('../showcase.js')

describe('testing statics file are set', () => {
//   test('method getGroceryShowcase()', () => {
//     var result = showcase.getGroceryShowcase()
//     expect(result).not.toBe('')
//   })

  const methodList = {
    getGroceryShowcase: showcase.getGroceryShowcase()
  }

  methodList.getGroceryShowcase = method => {
    it(`showcase  method ${method}() is returning array`, () => {
      const result = methodList[method]
      expect(result).toEqual(
        expect.arrayContaining(result)
      )
    })
  }

  methodList.getGroceryShowcase('getGroceryShowcase')
})
