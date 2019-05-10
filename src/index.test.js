/* global test, describe, it, expect, jest */
// @TODO we need to have all "projects"
const chickenKyiv = require('./projects/ChickenKyiv/chickenKyiv.js')
const loopback=require('./projects/GS-Loopback/loopback.js')
const groceristar = require('./projects/GroceriStar/groceristar.js')
const search = require('./projects/Search/search.js')
const showcase = require('./projects/Showcase/showcase.js')

// const ddd = require('./index')
// console.log(ddd)

describe('testing if methods inside the files are accessible from the outside', () => {
  // Test not required as getRecepie() is obsolete
  // test('[ChickenKyiv] recipe file is set', () => {
  //   var stream = chickenKyiv.getRecipe()
  //   expect(stream).not.toBe('')
  // })

  test('[ChickenKyiv] get recipe by title file is set', () => {
    var stream = chickenKyiv.getRecipeByTitle('Lemonade')
    expect(stream).not.toBe('')
  })

  test('[ChickenKyiv] fetch random recipe file is set', () => {
    var stream = chickenKyiv.getRandomRecipe()
    expect(stream).not.toBe('')
  })
})

//GS-loopback methods check
describe('testing if methods inside the files are accessible from the outside', () => {
  // Test not required as getRecepie() is obsolete
  // test('[GS-Loopback] recipe file is set', () => {
  //   var stream = loopback.getRecipe()
  //   expect(stream).not.toBe('')
  // })
  
    test('GS-Loopback] fetch Ultimate Grocery List', () => {
    var stream = loopback.getUltimateGrocery()
    expect(stream).not.toBe('')
  })
  
    test('GS-Loopback] fetch grocery with user relations', () => {
    var stream = loopback.getGLwithUserRelations()
    expect(stream).not.toBe('')
  })

  
     test('GS-Loopback] get loopback sample data', () => {
    var stream = loopback.getIngredientsSampleFromDB()
    expect(stream).not.toBe('')
  })
  
   test('GS-Loopback] fetch a useronject data with a name argument in loopback ', () => {
    var stream = loopback.getUserObject('Vadim')
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
