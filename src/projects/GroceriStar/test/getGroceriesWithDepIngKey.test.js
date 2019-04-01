/* global test, describe, it, expect, jest */
// This will be our separated file with tests, related to this method
// main test file are huuuge, so let's keep new tests here

const groceristar = require('../groceristar.js')

describe('testing getGroceriesWithDepIngKey()', () => {

  const result = groceristar.getGroceriesWithDepIngKey()
  const requiredProperties = [
    'name',
    'groceryId',
    'messages',
    'departments'
  ]

  requiredProperties.forEach( requiredProperty => {
    test(`Grocery has ${requiredProperty} property`, () => {
      result.forEach( resultProperty => {
        expect(resultProperty).toHaveProperty(requiredProperty)
      })
    })
  })
})

describe('Department property', () => {
  const result = groceristar.getGroceriesWithDepIngKey()
  const requiredProperties = [
    'id',
    'name',
    'type',
    'ingridients'
  ]

  requiredProperties.forEach( requiredProperty => {
    test(`Grocery departments have ${requiredProperty} property`, () => {
      result.departments.forEach( departmentsProperty => {
        expect(departmentsProperty).toHaveProperty(requiredProperty)
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

// @TODO not clear why ID keys should be tested on same values
// describe('Deep structure object testing ', () => {
//   const result = groceristar.getGroceriesWithDepIngKey()
//
//   test('testing groceryId is unique among groceryId(among other groceries), department id, ingredient id ', () => {
//     result.forEach( mainGrocery => {
//       let groceryID = mainGrocery.groceryId
//
//       result.forEach((grocery) => {
//         if (grocery.name != mainGrocery.name) {
//           expect(groceryID).not.toBe(grocery.groceryId)
//         }
//
//         grocery.departments.forEach((department) => {
//           expect(groceryID).not.toBe(department.id)
//
//           // @TODO hmm, i don't like the last expect... so we assuming that ing has groceryid as 0...
//           // it might works, but it's make my шmpression of this `describe` broken
//           department.ingredients.forEach((ingredient) => {
//             expect(groceryID).not.toBe(ingredient[0])
//           })
//         })
//       })
//     })
//   })
// })
