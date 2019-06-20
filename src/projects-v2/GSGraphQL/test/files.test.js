/* global describe, it, expect */
const graphQL = require('../graphQL.js')

// @TODO move to beforeIt
const methodsList = {
  getFavorites: graphQL.__find('favorites', graphQL.files),
  getItems: graphQL.__find('items', graphQL.files),
  getUserGrocery: graphQL.__find('userGrocery', graphQL.files)
}

describe('testing static data files returns array', () => {
  const testFileIsNotEmpty = (method) => {
    it('method ' + method + '()', () => {
      var result = methodsList[method]

      expect(result).not.toBe('')
    })
  }

  testFileIsNotEmpty('getFavorites')
  testFileIsNotEmpty('getItems')
  testFileIsNotEmpty('getUserGrocery')
})
