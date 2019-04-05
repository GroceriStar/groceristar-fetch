/* global test, describe, it, expect, jest */
// This will be our separated file with tests, related to this method
// main test file are huuuge, so let's keep new tests here

const groceristar = require('../groceristar.js')

describe('getGroceriesWithDepIngKey method', () => {

  const mainGroceries = groceristar.getGroceriesWithDepIngKey()

  const groceryHasProperty = property => {
    test(`Grocery property ${property}`, () => {
      const result = mainGroceries[property]
      expect(result).is(Array)
    })
  }

  groceryHasProperty('name')
  groceryHasProperty('groceryId')
  groceryHasProperty('messages')
  groceryHasProperty('departments')

  const groceryDepartmentHasProperty = property => {
    test(`Grocery departments has property ${property}`, () => {
      const result = mainGroceries.departments[property]
      expect(result).is(Array)
    })
  }

  groceryDepartmentHasProperty('id')
  groceryDepartmentHasProperty('name')
  groceryDepartmentHasProperty('type')
  groceryDepartmentHasProperty('ingridients')

  // @TODO test ID on match with nested object properties is ugly
  test('Main grocery ID is unique among inner object ID\'s', () => {

    mainGroceries.forEach( mainGrocery => {
      const mainGroceryId = mainGrocery.groceryId

      mainGrocery.forEach( grocery => {
        if (grocery.name !== mainGrocery.name)
          expect(mainGroceryId).not.toBe(grocery.groceryId)

        grocery.departments.forEach((department) => {
          expect(groceryID).not.toBe(department.id)

          // @TODO hmm, i don't like the last expect... so we assuming that ing has groceryid as 0...
          // it might works, but it's make my impression of this `describe` broken
          department.ingredients.forEach((ingredient) => {
            expect(groceryID).not.toBe(ingredient[0])
          })
        })
      })
    })
  })
})

// @TODO not clear what should be tested in departments ingridients
// describe('testing property ingredients in department', () => {
//   var result = groceristar.getGroceriesWithDepIngKey()
//
//   test('testing ingredient have length 3', () => {
//     result.forEach((grocery) => {
//       grocery.departments.forEach((department) => {
//         department.ingredients.forEach((ingredient) => {
//           expect(ingredient.length).toBe(3)
//         })
//       })
//     })
//   })
// })
