/* global describe, it, test, expect */

const { getMealCalendar, getFVGLMC } = require('../src/files')

// @TODO delete it later?
const methodsList = {
  getMealCalendar: getMealCalendar,
  getFVGLMC: getFVGLMC
}

describe('testing static data files returns array', () => {
  const testFileIsNotEmpty = (method) => {
    it('method ' + method + '()', () => {
      var result = methodsList[method]
      expect(result).not.toBe('')
    })
  }
  testFileIsNotEmpty('getMealCalendar')
  testFileIsNotEmpty('getFVGLMC')
})

describe('testing static data files returns array', () => {
  test('getMealCalendar should return some data', () => {
    var result = methodsList.getMealCalendar()
    expect(result).not.toBe('')
  })

  // @TODO yes, it's a bad name
  test('getFVGLMC should return data from second file', () => {
    var result = methodsList.getFVGLMC()
    expect(result).not.toBe('')
  })
})
