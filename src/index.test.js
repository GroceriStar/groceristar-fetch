/* global test, describe, it, expect, jest */
// @TODO we need to have all "projects"
const chickenKyiv = require('./projects/ChickenKyiv/chickenKyiv.js')
const graphQL=require('./projects/GraphQL/graphQL.js')
const loopback=require('./projects/GS-Loopback/loopback.js')
const groceristar = require('./projects/GroceriStar/groceristar.js')
const mealCalendar = require('./projects/MealCalendar/mealCalendar.js')
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
  
    test('[GS-Loopback] fetch Ultimate Grocery List', () => {
    var stream = loopback.getUltimateGrocery()
    expect(stream).not.toBe('')
  })
  
    test('[GS-Loopback] fetch grocery with user relations', () => {
    var stream = loopback.getGLwithUserRelations()
    expect(stream).not.toBe('')
  })

  
     test('[GS-Loopback] get loopback sample data', () => {
    var stream = loopback.getIngredientsSampleFromDB()
    expect(stream).not.toBe('')
  })
  
   test('[GS-Loopback] fetch a useronject data with a name argument in loopback ', () => {
    var stream = loopback.getUserObject('Vadim')
    expect(stream).not.toBe('')
  })

})

//graphQL methods check
describe('testing if methods inside the files are accessible from the outside', () => {

  // test for getDepartments method 
    test('[GraphQL] fetch list of departments', () => {
    var stream = graphQL.getDepartments()
    expect(stream).not.toBe('')
  })
  
  //test for getDepartmentsKey method
    test('[GraphQL] fetch keys for department', () => {
    var stream = graphQL.getDepartmentsKey()
    expect(stream).not.toBe('')
  })

  //test for getGrocery method
     test('[GraphQL] get grocery', () => {
    var stream = graphQL.getGrocery()
    expect(stream).not.toBe('')
  })
  
  //test for getGroceryKey method
   test('[GraphQL] fetch a keys from a grocery', () => {
    var stream = graphQL.getGroceryKey()
    expect(stream).not.toBe('')
  })
  
  //test for getIngredients method
    test('[GraphQL] fetch a list of ingredient', () => {
    var stream = graphQL.getIngredients()
    expect(stream).not.toBe('')
  })
  
  
  //test for getIngredientsKey method
     test('[GraphQL] fetch a list keys of ingredient', () => {
    var stream = graphQL.getIngredientsKey()
    expect(stream).not.toBe('')
  })
  
  
  //test for getUsers method
     test('[GraphQL] fetch a list of User', () => {
    var stream =graphQL.getUsers()
    expect(stream).not.toBe('')
  })
  
  //test for getUsersKey method
     test('[GraphQL] fetch a list keys of users', () => {
    var stream = graphQL.getUsersKey()
    expect(stream).not.toBe('')
  })
  
  //test for getFavorites method
  test('[GraphQL] fetch a list of favorite', () => {
    var stream = graphQL.getFavorites()
    expect(stream).not.toBe('')
  })
  
   //test for getItems method
    test('[GraphQL] fetch a list of item', () => {
    var stream = graphQL.getItems()
    expect(stream).not.toBe('')
  })
  
  //test for getUserGrocery method
    test('[GraphQL] gets a grocies of user', () => {
    var stream = graphQL.getUserGrocery()
    expect(stream).not.toBe('')
  })
  
  //test for getFavoritesKey method
    test('[GraphQL] fetch a list keys of favorite', () => {
    var stream = graphQL.getFavoritesKey()
    expect(stream).not.toBe('')
  })
  
  //test for getItemsKey method
   test('[GraphQL] fetch a list keys of items', () => {
    var stream = graphQL.getItemsKey()
    expect(stream).not.toBe('')
  })
  
    //test for getUserGroceryKey method
   test('[GraphQL] fetch a list keys of user grocery', () => {
    var stream = graphQL.getUserGroceryKey()
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

//MealCalendar methods check
describe('MealCalendar methods check', () => {
  // @TODO format it later
   //test for getDishByDay method
  test('[MealCalendar] gets dish by day', () => {
    var stream = mealCalendar.getDishByDay('Monday')
    expect(stream).not.toBe('')
  })

  //test for getDishByMonth method
  test('[MealCalendar] gets dish by Month', () => {
    var data = mealCalendar.getDishByMonth(2)
    expect(data).not.toBe('')
  })
  
   //test for getDishByWeek method
  test('[MealCalendar] gets dish by Week', () => {
    var data = mealCalendar.getDishByWeek(3)
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

//ShowCase method check
describe('ShowCase methods check', () => {
  // @TODO format it later
  
  //testing getGroceryShowcase method isnt empty
  test('[ShowCase] showcase checking', () => {
    var stream = showcase.getGroceryShowcase()
    expect(stream).not.toBe('')
  })
})
