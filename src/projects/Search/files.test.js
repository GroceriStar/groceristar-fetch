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

<<<<<<< HEAD
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
=======
  test('checking ingredients1 attribute', () => {
    var result = search.__find('ingredients1')
    expect(result).not.toBe('')
  })

  test('checking measurements attribute', () => {
    var result = search.__find('measurements')
    expect(result).not.toBe('')
  })

  test('checking sd-wrapper attribute', () => {
    var result = search.__find('file')
    expect(result).not.toBe('')
  })

  // @TODO replace this files with new version -  __.get() method
  // test('ingredients1 file is set', () => {
  //   var result = search.getIngredients1()
  //   expect(result).not.toBe('')
  // })

  // test('ingredients2 file is set', () => {
  //   var result = search.getIngredients2()
  //   expect(result).not.toBe('')
  // })

  // test('measurements file is set', () => {
  //   var result = search.getMeasurements()
  //   expect(result).not.toBe('')
  // })
>>>>>>> 1a26acafc08a9523f79b74770df91023b4ffd68f
})
