/* global test, describe, it, expect, jest */
const groceristar = require('../groceristar.js')

const files = {
  departments, ingredients, users, groceries
} = require('./files')

// @TODO separate methods, related to different datasets.
// So methods related to ingredients should have a
// separated describe, with departments methods
//
const INGREDIENT_COUNT = 13634
const DEPARTMENT_COUNT = 58
const GROCERY_COUNT = 28
const USER_COUNT = 3

describe('testing objects inside groceries', () => {

  const groceryHaveProperty = property => {
    test(`Grocery have property ${property}`, () => {
      groceries.forEach( obj => {
        expect(obj).toHaveProperty(property)
      })
    })
  }

  groceryHaveProperty('id')
  groceryHaveProperty('departments')
  groceryHaveProperty('name')
  groceryHaveProperty('img')
  groceryHaveProperty('desc')
  groceryHaveProperty('slug')

  const groceryPropertyContain = (property, type) => {
    test(`Grocery property ${property} contain as data ${type}`, () => {
        expect(groceries[property]).any(type)
    })
  }

  groceryPropertyContain('departments', Array)
  groceryPropertyContain('id', Number)
  groceryPropertyContain('name', String)
  groceryPropertyContain('img', Boolean)
  groceryPropertyContain('desc', Boolean)
  groceryPropertyContain('slug', Boolean)

  // test("objects propery  have Array", () => {
  //   // var result = groceristar.getGrocery()
  //   var result = groceries
  //   result.forEach((obj) => {
  //     expect(Array.isArray(obj.departments)).toBe(true)
  //   })
  // })

  // test("objects property 'id' is Number", () => {
  //   // var result = groceristar.getGrocery()
  //   var result = groceries
  //   result.forEach((obj) => {
  //     expect(obj).toMatchObject({
  //       id: expect.any(Number)
  //     })
  //   })
  // })

  // test("objects property 'name' is String", () => {
  //   // var result = groceristar.getGrocery()
  //   var result = groceries
  //   result.forEach((obj) => {
  //     expect(obj).toMatchObject({
  //       name: expect.any(String)
  //     })
  //   })
  // })

//   test("objects properties 'img' 'desc' 'slug' are boolean", () => {
//     // var result = groceristar.getGrocery()
//     var result = groceries
//     result.forEach((obj) => {
//       expect(obj).toMatchObject({
//         img: expect.any(Boolean),
//         desc: expect.any(Boolean),
//         slug: expect.any(Boolean)
//       })
//     })
//   })
// })

describe('testing objects inside ingredients', () => {
  test("each object have propery 'name'", () => {
    var result = groceristar.getIngredients()
    result.forEach((obj) => {
      expect(obj).toHaveProperty('name')
    })
  })

  test("each object have propery 'department'", () => {
    var result = groceristar.getIngredients()
    result.forEach((obj) => {
      expect(obj).toHaveProperty('department')
    })
  })

  test('objects propery values have String', () => {
    var result = groceristar.getIngredients()
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        name: expect.any(String),
        department: expect.any(String)
      })
    })
  })
})

describe('Groceristar project methods should return data', () => {
  test('method getGroceryByName("Clean Fatiring")', () => {
    var result = groceristar.getGroceryByName('Clean Fatiring')
    expect(result).not.toBe('')
  })

  test('method getGroceryByNameWithDepAndIng("Clean Fatiring")', () => {
    var result = groceristar.getGroceryByNameWithDepAndIng('Clean Fatiring')
    expect(result).not.toBe('')
  })

  test('getAllDepartments()', () => {
    var result = groceristar.getAllDepartments()
    expect(result).not.toBe('')
  })

  test('getAllIngredientsByOneDepartment("Fresh vegetables")', () => {
    var result = groceristar.getAllIngredientsByOneDepartment(
      'Fresh vegetables'
    )
    expect(result).not.toBe('')
  })

  test('getGroceryById()', () => {
    for (let i = 1; i <= GROCERY_COUNT; i++) {
      var result = groceristar.getGroceryById(i)
      expect(result).not.toBe('')
    }
  })

  test('getGroceryListsWithCountDepartments()', () => {
    var result = groceristar.getGroceryListsWithCountDepartments()
    expect(result).not.toBe('')
  })

  test('getAllDepartmentList()', () => {
    var result = groceristar.getAllDepartmentList()
    expect(result).not.toBe('')
  })

  test('getAllIngredientsList()', () => {
    var result = groceristar.getAllIngredientsList('Fresh vegetables')
    expect(result).not.toBe('')
  })

  test('getAllGrocery()', () => {
    var result = groceristar.getAllGrocery()
    expect(result).not.toBe('')
  })

  test('getAllGroceryDepartment()', () => {
    var result = groceristar.getAllGroceryDepartment(groceristar.getDepartments())
    expect(result).not.toBe('')
  })

  test('getGroceryListsByDepartment', () => {
    var result = groceristar.getGroceryListsByDepartment()
    expect(result).not.toBe('')
  })

  // @TODO use this case as sample of how duplicates are stored in our datasets.
  // we have a task for it https://github.com/GroceriStar/groceristar-fetch/issues/157
  test('getGroceryListsByDepartment to return a grocery list if string is lower case', () => {
    var result = groceristar.getGroceryListsByDepartment('protein')
    expect(result.length).toBeGreaterThan(1)
  })

  test('getGroceryListsByDepartment to return a grocery list if string is upper case', () => {
    var result = groceristar.getGroceryListsByDepartment('PROTEIN')
    expect(result.length).toBeGreaterThan(1)
  })

  test('getGroceryListsByDepartment to return a grocery list if string is capitalised', () => {
    var result = groceristar.getGroceryListsByDepartment('Protein')
    expect(result.length).toBeGreaterThan(1)
  })
})
