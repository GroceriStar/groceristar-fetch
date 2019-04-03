/* global test, describe, it, expect, jest */
// @TODO we need to have all "projects"
const chickenKyiv = require('./projects/ChickenKyiv/chickenKyiv.js')
const groceristar = require('./projects/GroceriStar/groceristar.js')
const search = require('./projects/Search/search.js')
const showcase = require('./projects/Showcase/showcase.js')

// const ddd = require('./index')
// console.log(ddd)

describe('testing if methods inside the files are accessible from the outside', () => {

  test('[ChickenKyiv] get recipe by title file is set', () => {
    var stream = chickenKyiv.getRecipeByTitle('Lemonade')
    expect(stream).not.toBe('')
  })

  test('[ChickenKyiv] fetch random recipe file is set', () => {
    var stream = chickenKyiv.getRandomRecipe()
    expect(stream).not.toBe('')
  })
})

describe('Groceristar methods check', () => {
  // @TODO format it later
  test('[Groceristar] departments file is set', () => {
    var stream = groceristar.getDepartments()
    expect(stream).not.toBe('')
  })

  test('[Groceristar] showcase checking', () => {
    var data = showcase.getGroceryShowcase()
    expect(data).not.toBe('')
  })
})

describe('Search Form methods check', () => {
  // @TODO format it later
  test('[Search Form] getAttribute("allergy")', () => {
    var stream = search.getAttribute('allergy')
    expect(stream).not.toBe('')
  })
})
