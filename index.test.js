const search = require('./search.js')
const groceristar = require('./groceristar.js')


describe('testing static data files are set', () => {
  test('allergies file is set', () => {
    var stream = search.getAllergies()
    expect(stream).not.toBe('')

  })

  test('courses file is set', () => {
    var stream = search.getCourses()
    expect(stream).not.toBe('')
  })

  test('cuisines file is set', () => {
    var stream = search.getCuisines()
    expect(stream).not.toBe('')
  })

  test('diets file is set', () => {
    var stream = search.getDiets()
    expect(stream).not.toBe('')
  })

  test('holidays file is set', () => {
    var stream = search.getHolidays()
    expect(stream).not.toBe('')
  })

  test('ingredients file is set', () => {
    var stream = search.getIngredients1()
    expect(stream).not.toBe('')
  })

  test('ingredients2 file is set', () => {
    var stream = search.getIngredients2()
    expect(stream).not.toBe('')
  })

  test('measurements file is set', () => {
    var stream = search.getMeasurements()
    expect(stream).not.toBe('')
  })

  test('ingredientsData file is set', () => {
    var stream = groceristar.getIngredients()
    expect(stream).not.toBe('')
  })

  test('groderyData file is set', () => {
    var stream = groceristar.getGrocery()
    expect(stream).not.toBe('')
  })

  test('usersData file is set', () => {
    var stream = groceristar.getUsers()
    expect(stream).not.toBe('')
  })

  test('departmentsData file is set', () => {
    var stream = groceristar.getDepartments()
    expect(stream).not.toBe('')
  })
})
