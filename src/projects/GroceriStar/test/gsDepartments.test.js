const groceristar = require('../groceristar.js')

describe('testing objects inside departments', () => {
  test("each object have property 'name'", () => {
    var result = groceristar.getDepartments()
    result.forEach((obj) => {
      expect(obj).toHaveProperty('name')
    })
  })

  test("each object have property 'type'", () => {
    var result = groceristar.getDepartments()
    result.forEach((obj) => {
      expect(obj).toHaveProperty('type')
    })
  })

  test("objects property 'name' is String", () => {
    var result = groceristar.getDepartments()
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        name: expect.any(String)
      })
    })
  })

  test("objects property 'type' is String", () => {
    var result = groceristar.getDepartments()
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        type: expect.any(String)
      })
    })
  })
})
