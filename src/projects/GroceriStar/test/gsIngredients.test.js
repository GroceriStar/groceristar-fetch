/* global test, describe, it, expect, jest */
const groceristar = require('../groceristar.js')

describe('testing objects inside our static data files', () => {
  test('testing object that have property name1', () => {
    expect({ name1: 'apple', name2: 'milk', name3: 'bread' }).toHaveProperty('name1')
  })

  test('each value of property is String and id is Number ', () => {
    expect({ name1: 'apple', name2: 'milk', name3: 'bread', id: 333 }).toMatchObject({
      name1: expect.any(String),
      name2: expect.any(String),
      id: expect.any(Number)
    })
  })

  test("array with objects have anything and first object with property 'name' have String ", () => {
    expect([{ name: 'apple' }, { name: 'milk' }, { name: 'bread' }]).toEqual([
      expect.objectContaining({ name: expect.any(String) }),
      expect.anything(),
      expect.anything()
    ])
  })

  test("match object that 'name' and 'department' are String", () => {
    var result = groceristar.getIngredients()

    expect(result[0]).toMatchObject({
      name: expect.any(String),
      department: expect.any(String)
    })
  })

  test("object have property 'department' ", () => {
    var result = groceristar.getIngredients()

    expect(result[0]).toHaveProperty('department')
  })

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
    var result = groceristar.getIngredients()

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Asparagus'
        })
      ])
    )
  })

  test("array with objects contain department 'Fresh vegetables' ", () => {
    var result = groceristar.getIngredients()
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          department: 'Fresh vegetables'
        })
      ])
    )
  })

  test("array containing 'name','department'", () => {
    var result = groceristar.getIngredients()
    var keys = Object.keys(result[0])

    expect(keys).toEqual(expect.arrayContaining(['name', 'department']))
  })
})
