const index = require('./index.js')


describe('testing index.js file', () => {
  test('allergies file is set', () => {
    var stream = index.getAllergies()//fs.readFileSync(allergies, 'utf-8')
    expect(stream).not.toBe('')

  })

  test('courses file is set', () => {
    var stream = index.getCourses()//fs.readFileSync(courses, 'utf-8')
    expect(stream).not.toBe('')
  })

  test('cuisines file is set', () => {
    var stream = index.getCuisines()//fs.readFileSync(cuisines, 'utf-8')
    expect(stream).not.toBe('')
  })

  test('diets file is set', () => {
    var stream = index.getDiets()//fs.readFileSync(diets, 'utf-8')
    expect(stream).not.toBe('')
  })

  test('holidays file is set', () => {
    var stream = index.getHolidays()//fs.readFileSync(holidays, 'utf-8')
    expect(stream).not.toBe('')
  })

  test('ingredients file is set', () => {
    var stream = index.getIngredients()//fs.readFileSync(ingredients, 'utf-8')
    expect(stream).not.toBe('')
  })

  test('ingredients2 file is set', () => {
    var stream = index.getIngredients2()//fs.readFileSync(ingredients, 'utf-8')
    expect(stream).not.toBe('')
  })

  test('measurements file is set', () => {
    var stream = index.getMeasurements()//fs.readFileSync(measurements, 'utf-8')
    expect(stream).not.toBe('')
  })
})