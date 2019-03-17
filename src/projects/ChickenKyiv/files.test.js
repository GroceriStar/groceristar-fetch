const chickenKyiv = require('./chickenKyiv.js')

const methodsList = {
  getIngredients3: chickenKyiv.getIngredients3(),
  getMenu: chickenKyiv.getMenu(),
  getRecipe: chickenKyiv.getRecipe(),
  getNutritions1: chickenKyiv.getNutritions1(),
  getNutritions2: chickenKyiv.getNutritions2()
}

describe('testing static data files are set', () => {
  const testFileIsNotEmpty = (method) => {
    test('method {$method}()', () => {
      var result = methodsList[method]

      expect(result).not.toBe('')
    })
  }
  testFileIsNotEmpty('getIngredients3')
  testFileIsNotEmpty('getMenu')
  testFileIsNotEmpty('getRecipe')
  testFileIsNotEmpty('getNutritions1')
  testFileIsNotEmpty('getNutritions2')
})

/*  ------------- MY METHOD --------------------------
describe('testing static data files are set', () => {
function testFunction(getAlert){
  test('testElement is set', () => {
    var stream = getAlert()
    expect(stream).not.toBe('')
  })
}
  testFunction(chickenKyiv.getIngredients3)
  testFunction(chickenKyiv.getMenu)
  testFunction(chickenKyiv.getRecipe)
  testFunction(chickenKyiv.getNutritions1)
  testFunction(chickenKyiv.getNutritions2)
})
-------------------------------------------------------
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
*/
