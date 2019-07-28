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

  const returnIsArray = (method) => {
    it('method ' + method + '()', () => {
      var result = methodList[method]
      expect(result).toEqual(
        expect.arrayContaining(result)
      )
    })
  }

  returnIsArray('getGroceryShowcase')
})
