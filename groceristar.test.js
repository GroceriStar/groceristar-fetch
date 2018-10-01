const groceristar = require("./groceristar.js");

// @TODO separate methods, related to different datasets.
// So methods related to ingredients should have a
// separated describe, with departments methods

describe("testing objects inside our static data files", () => {
  test("ingredients contain array of objects ", () => {
    // expect({ name1: 'apple', name2: 'milk', name3: 'bread' }).toHaveProperty('name1');
    // expect({ name1: 'apple', name2: 'milk', name3: 'bread' }).toHaveProperty('name1', 'apple');

    // expect({ name1: 'apple', name2: 'milk', name3: 'bread' }).toMatchObject({ name1: 'apple' });

    // expect({ name1: 'apple', name2: 'milk', name3: 'bread', id: 333 }).toMatchObject({
    //   name1: expect.any(String),
    //   name2: expect.any(String),
    //   id: expect.any(Number)
    // });

    expect([{ name: "apple" }, { name: "milk" }, { name: "bread" }]).toEqual([
      expect.objectContaining({ name: expect.any(String) }),
      expect.anything(),
      expect.anything()
    ]);

    var result = groceristar.getIngredients();
    // console.log(result[0])
    expect(result[0]).toMatchObject({
      name: expect.any(String),
      department: expect.any(String)
    });

    expect(result[0]).toHaveProperty("department");
    // expect(result).toEqual([
    //   expect.objectContaining({name: expect.any(String), department: expect.any(String)})
    // ]);
    // console.log(result);
    // expect(result[0]).objectContaining({
    //     name: expect.any(String),
    //     department: expect.any(String)
    //   });

    // expect(result[0]).toEqual(
    //   expect.arrayContaining([
    //     expect.objectContaining({
    //       name: expect.any(String), department: expect.any(String)
    //     })
    //   ])
    // )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Asparagus"
        })
      ])
    );

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          department: "Fresh vegetables"
        })
      ])
    );

    var keys = Object.keys(result[0]); //array with items name, department

    expect(keys).toEqual(expect.arrayContaining(["name", "department"]));

    // [{
    //     "name": "Asparagus",
    //     "department": "Fresh vegetables"
    //   },
  });
});

describe("testing static data files are not empty", () => {
  test("ingredients file is not empty", () => {
    var result = groceristar.getIngredients();
    // expect(2).equal(2);
    // expect(4).equal(2*2);

    expect(result).not.toBe("");
  });

  test("ingredients array count", () => {
    var result = groceristar.getIngredients();

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

    expect(result).toHaveLength(619);
  });

  test("department array count", () => {
    var result = groceristar.getDepartments();
    expect(result).toHaveLength(58);
  });

  test("grocery array count", () => {
    var result = groceristar.getGrocery();
    expect(result).toHaveLength(7);
  });

  test("users array count", () => {
    var result = groceristar.getUsers();
    expect(result).toHaveLength(3);
  });

  test("grocery file is not empty", () => {
    var stream = groceristar.getGrocery();
    expect(stream).not.toBe("");
  });

  test("users file is set", () => {
    var stream = groceristar.getUsers();
    expect(stream).not.toBe("");
  });

  test("departments file is set", () => {
    var stream = groceristar.getDepartments();
    expect(stream).not.toBe("");
  });
});

describe("Groceristar project methods should return data", () => {
  test("method getGroceryShowcase()", () => {
    var stream = groceristar.getGroceryShowcase();
    expect(stream).not.toBe("");
  });

  test('method getGroceryByName("Clean Fatiring")', () => {
    var stream = groceristar.getGroceryByName("Clean Fatiring");
    expect(stream).not.toBe("");
  });

  test('method getGroceryByNameWithDepAndIng("Clean Fatiring")', () => {
    var stream = groceristar.getGroceryByNameWithDepAndIng("Clean Fatiring");
    expect(stream).not.toBe("");
  });

  test("getAllDepartments()", () => {
    var stream = groceristar.getAllDepartments();
    expect(stream).not.toBe("");
  });

  test('getAllIngredientsByOneDepartment("Fresh vegetables")', () => {
    var stream = groceristar.getAllIngredientsByOneDepartment(
      "Fresh vegetables"
    );
    expect(stream).not.toBe("");
  });

  test("getGroceryById()", () => {
    for (let i = 1; i <= 7; i++) {
      var stream = groceristar.getGroceryById(i);
      expect(stream).not.toBe("");
    }
  });

  test("getGroceryListsWithCountDepartments()", () => {
    var stream = groceristar.getGroceryListsWithCountDepartments();
    expect(stream).not.toBe("");
  });
});
