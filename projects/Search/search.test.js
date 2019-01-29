const search      = require('./search.js')

describe('testing static data files are set', () => {

  test('getAttribute("allergy")', () => {
    var result = search.getAttribute('allergies')
    expect(result).not.toBe('')
  })

  test('getAttribute("cuisine")', () => {
    var result = search.getAttribute('cuisines')
    expect(result).not.toBe('')
  })

  test('getAttribute("course")', () => {
    var result = search.getAttribute('courses')
    expect(result).not.toBe('')
  })

  test('getAttribute("holidays")', () => {
    var result = search.getAttribute('allergies')
    expect(result).not.toBe('')
  })

  test('getAttribute("diets")', () => {
    var result = search.getAttribute('diets')
    expect(result).not.toBe('')
  })

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

  test('getPlaceholder("Allergy")', () => {
    var result = search.getPlaceholder('Allergy')
    expect(result).not.toBe('')
  })

  test('getPlaceholder("Diets")', () => {
    var result = search.getPlaceholder('Diets')
    expect(result).not.toBe('')
  })

  test('getPlaceholder("Cuisine")', () => {
    var result = search.getPlaceholder('Cuisine')
    expect(result).not.toBe('')
  })

  test('getPlaceholder("Course")', () => {
    var result = search.getPlaceholder('Course')
    expect(result).not.toBe('')
  })

  test('getPlaceholder("Holidays")', () => {
    var result = search.getPlaceholder('Holidays')
    expect(result).not.toBe('')
  })

})
