/* global test, describe, it, expect, jest */

const showcase = require('../showcase.js')

const methodsList = {
  getGrocery: showcase.__find('groceries', showcase.files)
}

describe('testing static data files returns array', () => {
  const testFileIsNotEmpty = (method) => {
    test('method {$method}()', () => {
      var result = methodsList[method]
      expect(result).not.toBe('')
    })
  }

  testFileIsNotEmpty('getGrocery')

})
