/* global test, describe, it, expect, jest */
const chickenKyiv = require('../chickenKyiv.js')

describe('testing static data files are set', () => {
  test('generate basic Weekly Menu objects', () => {
    var result = chickenKyiv.getMenuGenerator(1)
    expect(result).not.toBe('')
  })

  test('fetching random recipe method is set', () => {
    var result = chickenKyiv.getRandomRecipe()
    expect(result).not.toBe('')
  })

  test('recipe method getting by Title is set', () => {
    var result = chickenKyiv.getRecipeByTitle('Lemonade')
    expect(result).not.toBe('')
  })

  test('getFiveRandomIngredients', () => {
    var result = chickenKyiv.getFiveRandomIngredients()
    expect(result).not.toBe('')
  })

  test('getFirstFiveRecipes method', () => {
    var result = chickenKyiv.getFirstFiveRecipes()
    expect(result).not.toBe('')
  })
})
