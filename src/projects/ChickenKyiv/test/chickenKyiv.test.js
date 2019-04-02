/* global test, describe, it, expect, jest */
const chickenKyiv = require('../chickenKyiv.js')

describe('testing static data files are set', () => {

  const methodList = {
    getMenuGenerator: chickenKyiv.getMenuGenerator(1),
    getRandomRecipe: chickenKyiv.getRandomRecipe(),
    getRecipeByTitle: chickenKyiv.getRecipeByTitle('Lemonade'),
    getFiveRandomIngredients: chickenKyiv.getFiveRandomIngredients(),
    getFirstFiveRecipes: chickenKyiv.getFirstFiveRecipes(),
  }

  methodReturnsArray = method => {
    test(`chickenKyiv method ${method} is returning array`, () => {
      const result = methodList[method]
      expect(Array.isArray(result)).toBe(true)
    })
  }

  methodReturnsArray('getMenuGenerator')
  methodReturnsArray('getRandomRecipe')
  methodReturnsArray('getRecipeByTitle')
  methodReturnsArray('getFiveRandomIngredients')
  methodReturnsArray('getFirstFiveRecipes')
})
