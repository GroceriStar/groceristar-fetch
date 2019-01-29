const search      = require('./search.js')

describe('testing static data files are set', () => {

  test('getAttribute("allergy")', () => {
    var stream = search.getAttribute('allergies')
    expect(stream).not.toBe('')
  })

  test('getAttribute("cuisine")', () => {
    var stream = search.getAttribute('cuisines')
    expect(stream).not.toBe('')
  })

  test('getAttribute("course")', () => {
    var stream = search.getAttribute('courses')
    expect(stream).not.toBe('')
  })

  test('getAttribute("holidays")', () => {
    var stream = search.getAttribute('allergies')
    expect(stream).not.toBe('')
  })

  test('getAttribute("diets")', () => {
    var stream = search.getAttribute('diets')
    expect(stream).not.toBe('')
  })

  // test('ingredients1 file is set', () => {
  //   var stream = search.getIngredients1()
  //   expect(stream).not.toBe('')
  // })

  // test('ingredients2 file is set', () => {
  //   var stream = search.getIngredients2()
  //   expect(stream).not.toBe('')
  // })

  // test('measurements file is set', () => {
  //   var stream = search.getMeasurements()
  //   expect(stream).not.toBe('')
  // })

  test('getPlaceholder("Allergy")', () => {
    var stream = search.getPlaceholder('Allergy')
    expect(stream).not.toBe('')
  })

  test('getPlaceholder("Diets")', () => {
    var stream = search.getPlaceholder('Diets')
    expect(stream).not.toBe('')
  })

  test('getPlaceholder("Cuisine")', () => {
    var stream = search.getPlaceholder('Cuisine')
    expect(stream).not.toBe('')
  })

  test('getPlaceholder("Course")', () => {
    var stream = search.getPlaceholder('Course')
    expect(stream).not.toBe('')
  })

  test('getPlaceholder("Holidays")', () => {
    var stream = search.getPlaceholder('Holidays')
    expect(stream).not.toBe('')
  })

})
