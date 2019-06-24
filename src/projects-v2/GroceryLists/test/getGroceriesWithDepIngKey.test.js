/* global describe, it, expect */
// This will be our separated file with its, related to this method
// main it file are huuuge, so let's keep new its here

const { getGroceriesWithDepIngKey } = require('../index.js')

describe('getGroceriesWithDepIngKey method', () => {
  const mainGroceries = getGroceriesWithDepIngKey()

  const groceryHasProperty = property => {
    it(`Grocery property ${property}`, () => {
      expect(mainGroceries).toHaveProperty(property)
    })
  }

  groceryHasProperty('name')
  groceryHasProperty('groceryId')
  groceryHasProperty('messages')
  groceryHasProperty('departments')

  const groceryDepartmentHasProperty = property => {
    it(`Grocery departments has property ${property}`, () => {
      expect(mainGroceries.departments).toHaveProperty(property)
    })
  }

  groceryDepartmentHasProperty('id')
  groceryDepartmentHasProperty('name')
  groceryDepartmentHasProperty('type')
  groceryDepartmentHasProperty('ingredients')

  // @TODO it ID on match with nested object properties is ugly
  // it('Main grocery ID is unique among inner object ID\'s', () => {
  //     const mainGroceryId = mainGrocery.groceryId
  //     mainGrocery.forEach(grocery => {
  //       if (grocery.name !== mainGrocery.name) { expect(mainGroceryId).not.toBe(grocery.groceryId) }
  //       grocery.departments.forEach((department) => {
  //         expect(mainGroceryId).not.toBe(department.id)
  //         // @TODO hmm, i don't like the last expect... so we assuming that ing has groceryid as 0...
  //         // it might works, but it's make my impression of this `describe` broken
  //         department.ingredients.forEach((ingredient) => {
  //           expect(mainGroceryId).not.toBe(ingredient[0])
  //         })
  //       })
  //     })
  // })
})

// @TODO not clear what should be ited in departments ingridients
// describe('iting property ingredients in department', () => {
//   var result = groceristar.getGroceriesWithDepIngKey()
//
//   it('iting ingredient have length 3', () => {
//     result.forEach((grocery) => {
//       grocery.departments.forEach((department) => {
//         department.ingredients.forEach((ingredient) => {
//           expect(ingredient.length).toBe(3)
//         })
//       })
//     })
//   })
// })
