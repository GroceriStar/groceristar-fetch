const chickenKyiv = require('./chickenKyiv.js')

describe('testing static data files are set', () => {

  test('ingredients3 file is set', () => {
    var stream = chickenKyiv.getIngredients3()
    expect(stream).not.toBe('')
  })

  test('menu file is set', () => {
    var stream = chickenKyiv.getMenu()
    expect(stream).not.toBe('')
  })

  test('recipe file is set', () => {
    var stream = chickenKyiv.getRecipe()
    expect(stream).not.toBe('')
  })

  test('nutritions1 file is set', () => {
    var stream = chickenKyiv.getNutritions1()
    expect(stream).not.toBe('')
  })

  test('nutritions2 file is set', () => {
    var stream = chickenKyiv.getNutritions2()
    expect(stream).not.toBe('')
  })

})
