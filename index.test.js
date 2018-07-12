const index = require('./index.js')


describe('testing static data files are set', () => {
  test('allergies file is set', () => {
    var stream = index.getAllergies()
    expect(stream).not.toBe('')

  })

  test('courses file is set', () => {
    var stream = index.getCourses()
    expect(stream).not.toBe('')
  })

  test('cuisines file is set', () => {
    var stream = index.getCuisines()
    expect(stream).not.toBe('')
  })

  test('diets file is set', () => {
    var stream = index.getDiets()
    expect(stream).not.toBe('')
  })

  test('holidays file is set', () => {
    var stream = index.getHolidays()
    expect(stream).not.toBe('')
  })

  test('ingredients file is set', () => {
    var stream = index.getIngredients()
    expect(stream).not.toBe('')
  })

  test('ingredients2 file is set', () => {
    var stream = index.getIngredients2()
    expect(stream).not.toBe('')
  })

  test('measurements file is set', () => {
    var stream = index.getMeasurements()
    expect(stream).not.toBe('')
  })

  test('ingredientsData file is set', () => {
    var stream = index.getIngredientsData()
    expect(stream).not.toBe('')
  })

  test('groderyData file is set', () => {
    var stream = index.getGrocery()
    expect(stream).not.toBe('')
  })

  test('usersData file is set', () => {
    var stream = index.getUsers()
    expect(stream).not.toBe('')
  })

  test('departmentsData file is set', () => {
    var stream = index.getDepartments()
    expect(stream).not.toBe('')
  })
})
