const groceristar = require('./groceristar.js')

describe('testing static data files are set', () => {

  test('ingredients file is set', () => {
    var stream = groceristar.getIngredients()
    expect(stream).not.toBe('')
  })

  test('grocery file is set', () => {
    var stream = groceristar.getGrocery()
    expect(stream).not.toBe('')
  })

  test('method getGroceryShowcase()', () => {
    var stream = groceristar.getGroceryShowcase()
    expect(stream).not.toBe('')
  })

  test('method getGroceryByName("Clean Fatiring")', () => {
    var stream = groceristar.getGroceryByName("Clean Fatiring")
    expect(stream).not.toBe('')
  })

  test('method getGroceryByNameWithDepAndIng("Clean Fatiring")', () => {
    var stream = groceristar.getGroceryByNameWithDepAndIng("Clean Fatiring")
    expect(stream).not.toBe('')
  })


  test('users file is set', () => {
    var stream = groceristar.getUsers()
    expect(stream).not.toBe('')
  })

  test('departments file is set', () => {
    var stream = groceristar.getDepartments()
    expect(stream).not.toBe('')
  })

  test('getAllDepartments()', () => {
    var stream = groceristar.getAllDepartments()
    expect(stream).not.toBe('')
  })

  test('getAllIngredientsByOneDepartment("Fresh vegetables")', () => {
    var stream = groceristar.getAllIngredientsByOneDepartment('Fresh vegetables')
    expect(stream).not.toBe('')
  })

  test('getGroceryById()', () => {
    for (let i = 1; i <= 7 ; i++) {
      var stream = groceristar.getGroceryById(i)
      expect(stream).not.toBe('')
    }
  })

  test('getGroceryListsWithCountDepartments()', () => {
    var stream = groceristar.getGroceryListsWithCountDepartments()
    expect(stream).not.toBe('')
  })

})
