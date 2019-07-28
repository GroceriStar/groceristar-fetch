/* global describe, it, expect, */
const chickenKyiv = require('../chickenKyiv.js')

// @TODO OK, but i don't like when you put everything in long line inside of your ass @hirdbluebird. Looks not better.
describe('testing static data files are set', () => {
  const methodList = {
    getMenuGenerator: chickenKyiv.getMenuGenerator(1),
    getRandomRecipe: chickenKyiv.getRandomRecipe(),
    getRecipeByTitle: chickenKyiv.getRecipeByTitle('Lemonade'),
    getFiveRandomIngredients: chickenKyiv.getFiveRandomIngredients(),
    getFirstFiveRecipes: chickenKyiv.getFirstFiveRecipes()
  }

  const methodReturnsArray = method => {
    it(`chickenKyiv method ${method} is returning array`, () => {
      const result = methodList[method]
      expect(result).toEqual(
        expect.arrayContaining(result)
      )
    })
  }

  methodReturnsArray('getMenuGenerator')
  methodReturnsArray('getRandomRecipe')
  methodReturnsArray('getRecipeByTitle')
  methodReturnsArray('getFiveRandomIngredients')
  methodReturnsArray('getFirstFiveRecipes')
})
