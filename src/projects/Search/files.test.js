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
/*
describe('testing static data files returns array', () => {
  test('checking allergy attribute', () => {
    var result = search.__find('allergies')
    expect(result).not.toBe('')
  })

  test('checking courses attribute', () => {
    var result = search.__find('courses')
    expect(result).not.toBe('')
  })

  test('checking cuisines attribute', () => {
    var result = search.__find('cuisines')
    expect(result).not.toBe('')
  })

  test('checking diets attribute', () => {
    var result = search.__find('diets')
    expect(result).not.toBe('')
  })

  test('checking holidays attribute', () => {
    var result = search.__find('holidays')
    expect(result).not.toBe('')
  })

  test('checking ingredients1 attribute', () => {
    var result = search.__find('ingredients1')
    expect(result).not.toBe('')
  })

  test('checking measurements attribute', () => {
    var result = search.__find('measurements')
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
})
*/