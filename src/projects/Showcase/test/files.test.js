/* global describe, it, expect */

const showcase = require('../showcase.js')

const methodsList = {
  getGrocery: showcase.__find('groceries', showcase.files)
}

describe('testing static data files returns array', () => {
  const testFileIsNotEmpty = method => {
    it(`method ${method}()`, () => {
      var result = methodsList[method]
      expect(result).not.toBe('')
    })
  }

  testFileIsNotEmpty('getGrocery')
})
