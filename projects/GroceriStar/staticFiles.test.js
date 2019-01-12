const groceristar = require("./groceristar.js");



describe("testing static data files returns array", () => {
  test("ingredients.json are array", () => {
    var result = groceristar.getIngredients();
    expect(Array.isArray(result)).toBe(true);
  })
  test("groceries.json are array", () => {
    var result = groceristar.getGrocery();
    expect(Array.isArray(result)).toBe(true);
  })
  test("departments.json are array", () => {
    var result = groceristar.getDepartments();
    expect(Array.isArray(result)).toBe(true);
  })
  test("users.json are array", () => {
    var result = groceristar.getUsers();
    expect(Array.isArray(result)).toBe(true);
  })
})

describe("testing static data files are not empty", () => {
  test("ingredients file is not empty", () => {
    var result = groceristar.getIngredients();
    expect(result).not.toBe("");
  });

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


  test("grocery file is not empty", () => {
    var stream = groceristar.getGrocery();
    expect(stream).not.toBe("");
  });

  test("users file is not empty", () => {
    var stream = groceristar.getUsers();
    expect(stream).not.toBe("");
  });

  test("departments file is not empty", () => {
    var stream = groceristar.getDepartments();
    expect(stream).not.toBe("");
  });
});


describe("comparing length of arrays that we have inside of our static data files. If you receive this error", () => {

  // this is a place that should be updated in order to fix build issue.
  // in order to get a new count of items from our files, you need to run `playground` script
  const ingredientCount = 13634;
  const departmentCount = 58;
  const groceryCount    = 8;
  const userCount       = 3;

  test("ingredients array count", () => {
    var result = groceristar.getIngredients();
    expect(result).toHaveLength(ingredientCount);
  });

  test("department array count", () => {
    var result = groceristar.getDepartments();
    expect(result).toHaveLength(departmentCount);
  });

  test("grocery array count", () => {
    var result = groceristar.getGrocery();

    expect(result).toHaveLength(groceryCount);
  });

  test("users array count", () => {
    var result = groceristar.getUsers();
    expect(result).toHaveLength(userCount);
  });

});
