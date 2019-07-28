const staticData = require('@groceristar/mini-sd')

//gs


const departments = staticData.departments
const groceries = staticData.grocery
const ingredients = staticData.ingredients
const users = staticData.users



//ck
const ingredients3 = staticData.ingredients3

const menus = staticData.menu

const recipes = staticData.recipes

const nutritions1 = staticData.nutritions

const nutritions2 = staticData.nutritions2

// const departments = staticData.departments

// const users = staticData.users

describe('testing if JSON files are accessible from the outside', () => {
  // test for xxx
  it('xxx', () => {
    var stream = graphQL.getDepartments()
    expect(stream).not.toBe('')
  })

});
