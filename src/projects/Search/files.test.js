const search = require('./search.js')

const methodsList = {
  allergies: search.__find('allergies'),
  courses: search.__find('courses'),
  cuisines: search.__find('cuisines'),
  diets: search.__find('diets'),
  holidays: search.__find('holidays'),
  ingredients1: search.__find('ingredients1'),
  measurements: search.__find('measurements')
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
