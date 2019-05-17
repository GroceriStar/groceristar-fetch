/* global test, describe, it, expect, jest */
const showcase = require('../showcase.js')

describe('Showcase project methods should return data', () => {
//   test('method getGroceryShowcase()', () => {
//     var result = showcase.getGroceryShowcase()
//     expect(result).not.toBe('')
//   })
  
  const methodList={
  getGroceryShowcase:showcase.getGroceryShowcase()
  }
  
 methodReturnsArray = method => {
    test(`ShowCase method ${method} is returning array`, () => {
      const result = methodList[method]
      expect(result).is(Array)
    })
  }
 
methodReturnsArray('getGroceryShowcase')
})
