const groceristar = require('./groceristar.js')

describe('testing static data files are set', () => {

  test('ingredients file is set', () => {
    var stream = groceristar.getIngredients()
    expect(stream).not.toBe('')
  })

  test('grocery file is set', () => {
    var stream = groceristar.getGrocery()
    expect(stream).not.toBe('')
  })

  test('users file is set', () => {
    var stream = groceristar.getUsers()
    expect(stream).not.toBe('')
  })

  test('departments file is set', () => {
    var stream = groceristar.getDepartments()
    expect(stream).not.toBe('')
  })

  test('getAllDepartments()', () => {
    var stream = groceristar.getAllDepartments()
    expect(stream).not.toBe('')
  })

  test('getAllIngredientsByOneDepartment("Fresh vegetables")', () => {
    var stream = groceristar.getAllIngredientsByOneDepartment('Fresh vegetables')
    expect(stream).not.toBe('')
  })

  test('getMealPlan1', () => {
    var stream = groceristar.getMealPlan1()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan2', () => {
    var stream = groceristar.getWeekPlan2()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan3', () => {
    var stream = groceristar.getWeekPlan3()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan4', () => {
    var stream = groceristar.getWeekPlan4()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan5', () => {
    var stream = groceristar.getWeekPlan5()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan6', () => {
    var stream = groceristar.getWeekPlan6()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan7', () => {
    var stream = groceristar.getWeekPlan7()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan8', () => {
    var stream = groceristar.getWeekPlan8()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan9', () => {
    var stream = groceristar.getWeekPlan9()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan10', () => {
    var stream = groceristar.getWeekPlan10()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan11', () => {
    var stream = groceristar.getWeekPlan11()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan12', () => {
    var stream = groceristar.getWeekPlan12()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan13', () => {
    var stream = groceristar.getWeekPlan13()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan14', () => {
    var stream = groceristar.getWeekPlan14()
    expect(stream).not.toBe('')
  })

  test('getWeekPlan15', () => {
    var stream = groceristar.getWeekPlan15()
    expect(stream).not.toBe('')
  })

  test('getPlanningWeek16', () => {
    var stream = groceristar.getPlanningWeek16()
    expect(stream).not.toBe('')
  })

  test('getPlanningWeek17', () => {
    var stream = groceristar.getPlanningWeek17()
    expect(stream).not.toBe('')
  })

  test('getPlanningWeek18', () => {
    var stream = groceristar.getPlanningWeek18()
    expect(stream).not.toBe('')
  })

  test('getPlanningWeek19', () => {
    var stream = groceristar.getPlanningWeek19()
    expect(stream).not.toBe('')
  })

  test('getPlanningWeek20', () => {
    var stream = groceristar.getPlanningWeek20()
    expect(stream).not.toBe('')
  })

})
