//This will be our separated file with tests, related to this method
// main test file are huuuge, so let's keep new tests here

const groceristar = require("./groceristar.js");

describe("testing getGroceriesWithDepIngKey()", () => {
  var result = groceristar.getGroceriesWithDepIngKey();
  test(" Testing method getGroceriesWithDepIngKey() should return data", () => {

    expect(result).not.toBe("");
   })

   test('Testing grocery has property name', () => {

     result.forEach((obj) => {
       expect(obj).toHaveProperty("name")
     })
   })

   test('Testing grocery has property groceryId', () => {

     result.forEach((obj) => {
       expect(obj).toHaveProperty("groceryId")
     })
   })

   test('Testing grocery has property messages', () => {

      result.forEach((obj) => {
        expect(obj).toHaveProperty("messages")
      })
   })

   test('Testing grocery has property departments', () => {

     result.forEach((obj) => {
       expect(obj).toHaveProperty("departments")
     })
   })
})

describe("testing property departments",() => {
  var result = groceristar.getGroceriesWithDepIngKey();
    test("testing property departments have property id", () => {
      result.forEach((grocery) => {
        grocery.departments.forEach((department) => {
          expect(department).toHaveProperty("id")
        })
      })
    })

    test('testing departments have property id', () => {
      result.forEach((grocery) => {
        grocery.departments.forEach((department) => {
          expect(department).toHaveProperty("name")
        })
      })
    })

    test('testing departments have property type', () => {
        result.forEach((grocery) => {
          grocery.departments.forEach((department) => {
            expect(department).toHaveProperty("type")
          })
        })
    })

    test('testing departments have property ingredients', () => {
      result.forEach((grocery) => {
        grocery.departments.forEach((department) => {
          expect(department).toHaveProperty("ingredients")
        })
      })
    })


})

describe("testing property ingredients in department", () => {
    var result = groceristar.getGroceriesWithDepIngKey();

    test('testing ingredient have length 3', () => {
      result.forEach((grocery) => {
        grocery.departments.forEach((department) => {
          department.ingredients.forEach((ingredient) => {
            expect(ingredient.length).toBe(3)
          })
        })
      })
    })


})

describe("testing ", () => {
  var result = groceristar.getGroceriesWithDepIngKey();
  test('testing groceryId is unique among groceryId(among other groceries), department id, ingredient id ', ()=>{
    
    result.forEach((mainGrocery) => {
    let  groceryID = mainGrocery.groceryId;

      result.forEach((grocery) =>{
        if(grocery.name != mainGrocery.name){
        expect(groceryID).not.toBe(grocery.groceryId)
          }

          grocery.departments.forEach((department) =>{
            expect(groceryID).not.toBe(department.id)
              department.ingredients.forEach((ingredient) => {
                expect(groceryID).not.toBe(ingredient[0])
              })
        })


      })
    })

  })
})
