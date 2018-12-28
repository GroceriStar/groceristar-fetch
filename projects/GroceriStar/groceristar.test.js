const groceristar = require("./groceristar.js");

// @TODO separate methods, related to different datasets.
// So methods related to ingredients should have a
// separated describe, with departments methods

describe("testing objects inside our static data files", () => {

  test("testing object that have property name1", () => {
    expect({ name1: 'apple', name2: 'milk', name3: 'bread' }).toHaveProperty('name1');
  });

  test("each value of property is String and id is Number ", () => {
    expect({ name1: 'apple', name2: 'milk', name3: 'bread', id: 333 }).toMatchObject({
      name1: expect.any(String),
      name2: expect.any(String),
      id:    expect.any(Number)
    });
  });

  test("array with objects have anything and first object with property 'name' have String ", () => {
    expect([{ name: "apple" }, { name: "milk" }, { name: "bread" }]).toEqual([
      expect.objectContaining({ name: expect.any(String) }),
      expect.anything(),
      expect.anything()
    ]);
  });

  test("match object that 'name' and 'department' are String", () => {
    var result = groceristar.getIngredients();

    expect(result[0]).toMatchObject({
      name: expect.any(String),
      department: expect.any(String)
    });
  });

  test("object have property 'department' ", () => {
    var result = groceristar.getIngredients();

    expect(result[0]).toHaveProperty("department");
  });

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

  test("array with objects contain name 'Asparagus'", () => {
    var result = groceristar.getIngredients();

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Asparagus"
          })
        ])
      );
  });

  test("array with objects contain department 'Fresh vegetables' ", () => {
    var result = groceristar.getIngredients()
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          department: "Fresh vegetables"
         })
       ])
     );
   });

  test("array containing 'name','department'", () => {
      var result = groceristar.getIngredients();
      var keys = Object.keys(result[0]);

      expect(keys).toEqual(expect.arrayContaining(["name", "department"]));
    });
  });



describe("testing objects inside users", () => {
  test("each object have property 'name'",() =>{
    var result = groceristar.getUsers();
    result.forEach((obj) => {
      expect(obj).toHaveProperty("name")
    })
  })

  test("each object have property 'email'",() =>{
    var result = groceristar.getUsers();
    result.forEach((obj) => {
      expect(obj).toHaveProperty("email")
    })
  })

  test("each object have property 'password'",() =>{
    var result = groceristar.getUsers();
    result.forEach((obj) => {
      expect(obj).toHaveProperty("password")
    })
  })

  test("objects property 'name' is String",() =>{
    var result = groceristar.getUsers();
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        name: expect.any(String)
      });
    })
  })

  test("objects property 'email' is String",() =>{
    var result = groceristar.getUsers();
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        email: expect.any(String)
      });
    })
  })

  test("objects property 'password' is String",() =>{
    var result = groceristar.getUsers();
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        password: expect.any(String)
      });
    })
  })

})

describe("testing objects inside departments", () => {
  test("each object have property 'name'", () =>{
    var result = groceristar.getDepartments();
    result.forEach((obj) => {
      expect(obj).toHaveProperty("name");
    })
  })

  test("each object have property 'type'", () =>{
    var result = groceristar.getDepartments();
    result.forEach((obj) => {
      expect(obj).toHaveProperty("type");
    })
  })

  test("objects property 'name' is String", () =>{
    var result = groceristar.getDepartments();
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        name: expect.any(String)
      });
    })
  })

  test("objects property 'type' is String", () => {
    var result = groceristar.getDepartments();
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        type: expect.any(String)
      });
    })
  })
})

describe("testing objects inside groceries", () => {
    test("each object have property 'departments'", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(obj).toHaveProperty("departments");
      })
    })

    test("each object have property 'id'", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(obj).toHaveProperty("id");
      })
    })

    test("each object have property 'name'", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(obj).toHaveProperty("name");
      })
    })

    test("each object have property 'img'", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(obj).toHaveProperty("img");
      })
    })

    test("each object have property 'desc'", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(obj).toHaveProperty("desc");
      })
    })

    test("each object have property 'slug'", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(obj).toHaveProperty("slug");
      })
    })

    test("objects propery 'departments' have Array", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(Array.isArray(obj.departments)).toBe(true)
      })
    })

    test("objects property 'id' is Number", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(obj).toMatchObject({
          id: expect.any(Number)
        })
      })
    })

    test("objects property 'name' is String", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(obj).toMatchObject({
          name: expect.any(String)
        })
      })
    })

    test("objects properties 'img' 'desc' 'slug' are boolean", () => {
      var result = groceristar.getGrocery();
      result.forEach((obj) => {
        expect(obj).toMatchObject({
          img: expect.any(Boolean),
          desc: expect.any(Boolean),
          slug: expect.any(Boolean)
        })
      })
    })
})

describe("testing objects inside ingredients", () => {
  test("each object have propery 'name'", ()=> {
    var result = groceristar.getIngredients();
     result.forEach((obj) => {
       expect(obj).toHaveProperty("name");
     })
  })

  test("each object have propery 'department'", ()=> {
    var result = groceristar.getIngredients();
     result.forEach((obj) => {
       expect(obj).toHaveProperty("department");
     })
  })

  test("objects propery values have String", ()=> {
    var result = groceristar.getIngredients();
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        name: expect.any(String),
        department: expect.any(String)
      })
    })
  })

})

describe("testing static data files returns array", () => {
  test("ingredients are array", () =>{
    var result = groceristar.getIngredients();
    expect(Array.isArray(result)).toBe(true);
  })
  test("groceries are array", () =>{
    var result = groceristar.getGrocery();
    expect(Array.isArray(result)).toBe(true);
  })
  test("departments are array", () =>{
    var result = groceristar.getDepartments();
    expect(Array.isArray(result)).toBe(true);
  })
  test("users are array", () =>{
    var result = groceristar.getUsers();
    expect(Array.isArray(result)).toBe(true);
  })
})

describe("comparing length of arrays that we have inside of our static data files. If you receive this error", () => {

  test("ingredients array count", () => {
    var result = groceristar.getIngredients();
    expect(result).toHaveLength(13634);
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
  
});

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

  test('getAllDepartmentList()', () => {
    var stream = groceristar.getAllDepartmentList();
    expect(stream).not.toBe('');
  });

  test('getAllIngredientsList()', () => {
    var stream = groceristar.getAllIngredientsList('Fresh vegetables');
    expect(stream).not.toBe('');
  });

  test('getAllGrocery()', () => {
    var stream = groceristar.getAllGrocery();
    expect(stream).not.toBe('');
  });

  test('getAllGroceryDepartment()', () => {
    var stream = groceristar.getAllGroceryDepartment(groceristar.getDepartments());
    expect(stream).not.toBe('');
  });

  test('getGroceryListsByDepartment', ()=> {
    var stream = groceristar.getGroceryListsByDepartment();
    expect(stream).not.toBe('');
  })

  test('getGroceryListsByDepartment to return a grocery list if string is lower case', () => {
    var stream = groceristar.getGroceryListsByDepartment('protein');
    expect(stream.length).toBeGreaterThan(1);
  })

  test('getGroceryListsByDepartment to return a grocery list if string is upper case', () => {
    var stream = groceristar.getGroceryListsByDepartment('PROTEIN');
    expect(stream.length).toBeGreaterThan(1);
  })

  test('getGroceryListsByDepartment to return a grocery list if string is capitalised', () => {
    var stream = groceristar.getGroceryListsByDepartment('Protein');
    expect(stream.length).toBeGreaterThan(1);
  })

});
