/* global test, describe, it, expect, jest */
const chickenKyiv = require('../chickenKyiv.js')

const methodsList = {
  getIngredients3: chickenKyiv.__find('ingredients3', chickenKyiv.files),
  getMenu: chickenKyiv.__find('menus', chickenKyiv.files),
  getRecipe: chickenKyiv.__find('recipes', chickenKyiv.files),
  getNutritions1: chickenKyiv.__find('nutritions1', chickenKyiv.files),
  getNutritions2: chickenKyiv.__find('nutritions2', chickenKyiv.files)
}

describe('testing static data files are set', () => {
  const testFileIsNotEmpty = (method) => {
    test('method '+method+'()', () => {
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
