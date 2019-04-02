/* global test, describe, it, expect, jest */
const chickenKyiv = require('../chickenKyiv.js')


// @TODO OK, but i don't like when you put everything in long line inside of your ass @hirdbluebird. Looks not better.
describe('testing static data files are set', () => {
  test('generate basic Weekly Menu objects', () => {
    expect(chickenKyiv.getMenuGenerator(1)).not.toBe('')
  })

  test('fetching random recipe method is set', () => {
    expect(chickenKyiv.getRandomRecipe()).not.toBe('')
  })

  test('recipe method getting by Title is set', () => {
    expect(chickenKyiv.getRecipeByTitle('Lemonade')).not.toBe('')
  })

  test('getFiveRandomIngredients', () => {
    expect(chickenKyiv.getFiveRandomIngredients()).not.toBe('')
  })

  test('getFirstFiveRecipes method', () => {
    expect(chickenKyiv.getFirstFiveRecipes()).not.toBe('')
  })
})
