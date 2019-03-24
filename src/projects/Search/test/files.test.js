/* global test, describe, it, expect, jest */
const search = require('../search.js')

const methodsList = {
  allergies: search.__find('allergies', search.files),
  courses: search.__find('courses', search.files),
  cuisines: search.__find('cuisines', search.files),
  diets: search.__find('diets', search.files),
  holidays: search.__find('holidays', search.files),
  ingredients1: search.__find('ingredients1', search.files),
  measurements: search.__find('measurements', search.files)
}

describe('testing static data files returns array', () => {
  const testFileIsNotEmpty = (method) => {
    test('method {$method}()', () => {
      var result = methodsList[method]
      expect(result).not.toBe('')
    })
  }

  testFileIsNotEmpty('allergies')
  testFileIsNotEmpty('courses')
  testFileIsNotEmpty('cuisines')
  testFileIsNotEmpty('diets')
  testFileIsNotEmpty('holidays')
  testFileIsNotEmpty('ingredients1')
  testFileIsNotEmpty('measurements')
})
