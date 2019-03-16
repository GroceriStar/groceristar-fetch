const groceristar = require('./groceristar.js')

const INGREDIENT_COUNT = 13634
const DEPARTMENT_COUNT = 58
const GROCERY_COUNT = 28
const USER_COUNT = 3

const methodsList1 = {
  getIngredients: groceristar.getIngredients(),
  getGrocery: groceristar.getGrocery(),
  getDepartments: groceristar.getDepartments(),
  getUsers: groceristar.getUsers()
}

describe('testing static data files returns array', () => {
  const testIsArrayy = (method1) => {
    test('method {$method}()', () => {
      var result = methodsList1[method1]
      expect(Array.isArray(result)).toBe(true)
    })
  }

  testIsArrayy('getIngredients')
  testIsArrayy('getGrocery')
  testIsArrayy('getDepartments')
  testIsArrayy('getUsers')
})



/*
describe('testing static data files returns array', () => {
  test('ingredients.json are array', () => {
    var result = groceristar.getIngredients()
    expect(Array.isArray(result)).toBe(true)
  })

  test('groceries.json are array', () => {
    var result = groceristar.getGrocery()
    expect(Array.isArray(result)).toBe(true)
  })

  test('departments.json are array', () => {
    var result = groceristar.getDepartments()
    expect(Array.isArray(result)).toBe(true)
  })

  test('users.json are array', () => {
    var result = groceristar.getUsers()
    expect(Array.isArray(result)).toBe(true)
  })
})
*/
const methodsList2 = {
  getIngredients: groceristar.getIngredients(),
  getGrocery: groceristar.getGrocery(),
  getDepartments: groceristar.getDepartments(),
  getUsers: groceristar.getUsers()
}

describe('testing static data files returns array', () => {
  const testFileIsNotEmpty = (method) => {
    test('method {$method}()', () => {
      var result = methodsList2[method]
      expect(result).not.toBe('')
    })
  }

  testFileIsNotEmpty('getIngredients')
  testFileIsNotEmpty('getGrocery')
  testFileIsNotEmpty('getDepartments')
  testFileIsNotEmpty('getUsers')
})
/*
describe('testing static data files are not empty', () => {
  test('ingredients file is not empty', () => {
    var result = groceristar.getIngredients()
    expect(result).not.toBe('')
  })

  // test("array have length", () => {
  //   expect(['apple', 'milk', 'bread']).toHaveLength(3);
  // });
  //
  // test("array contain 'milk'", () => {
  //   expect(['apple', 'milk', 'bread']).toContain('milk');
  // });

  // expect(['apple', 'milk', 'bread']).toHaveLength(3);
  // expect(['apple', 'milk', 'bread']).toContain('milk');
  // expect(['apple', 'milk', 'bread']).toEqual(
  // expect.arrayContaining(['milk','apple'])
  // );
  // expect([{name: 'apple'}, {name: 'milk'}, {name: 'bread'}]).toContainEqual(
  // {name: 'bread'}
  // );

  // expect(result).toEqual([
  //   expect
  //   // expect.objectContaining({})
  // ]);

  test('grocery file is not empty', () => {
    var stream = groceristar.getGrocery()
    expect(stream).not.toBe('')
  })

  test('users file is not empty', () => {
    var stream = groceristar.getUsers()
    expect(stream).not.toBe('')
  })

  test('departments file is not empty', () => {
    var stream = groceristar.getDepartments()
    expect(stream).not.toBe('')
  })
})
*/
const methodsList3 = {
  getIngredients: groceristar.getIngredients(),
  getGrocery: groceristar.getGrocery(),
  getDepartments: groceristar.getDepartments(),
  getUsers: groceristar.getUsers()
}

describe('comparing length of arrays that we have inside of our static data files. If you receive this error', () => {
  const testLength = (method,length) => {
    test('method {$method}()', () => {
      var result = methodsList3[method]
      expect(result).toHaveLength(length)
    })
  }

  testLength('getIngredients',INGREDIENT_COUNT)
  testLength('getGrocery',GROCERY_COUNT)
  testLength('getDepartments',DEPARTMENT_COUNT)
  testLength('getUsers',USER_COUNT)
})

/*
describe('comparing length of arrays that we have inside of our static data files. If you receive this error', () => {
  // this is a place that should be updated in order to fix build issue.
  // in order to get a new count of items from our files, you need to run `playground` script

  test('ingredients array count', () => {
    var result = groceristar.getIngredients()
    expect(result).toHaveLength(INGREDIENT_COUNT)
  })

  test('department array count', () => {
    var result = groceristar.getDepartments()
    expect(result).toHaveLength(DEPARTMENT_COUNT)
  })

  test('grocery array count', () => {
    var result = groceristar.getGrocery()

    expect(result).toHaveLength(GROCERY_COUNT)
  })

  test('users array count', () => {
    var result = groceristar.getUsers()
    expect(result).toHaveLength(USER_COUNT)
  })
})
*/