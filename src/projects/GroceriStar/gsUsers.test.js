const groceristar = require('./groceristar.js')

describe('testing objects inside users', () => {
  test("each object have property 'name'", () => {
    var result = groceristar.getUsers()
    result.forEach((obj) => {
      expect(obj).toHaveProperty('name')
    })
  })

  test("each object have property 'email'", () => {
    var result = groceristar.getUsers()
    result.forEach((obj) => {
      expect(obj).toHaveProperty('email')
    })
  })

  test("each object have property 'password'", () => {
    var result = groceristar.getUsers()
    result.forEach((obj) => {
      expect(obj).toHaveProperty('password')
    })
  })

  test("objects property 'name' is String", () => {
    var result = groceristar.getUsers()
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        name: expect.any(String)
      })
    })
  })

  test("objects property 'email' is String", () => {
    var result = groceristar.getUsers()
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        email: expect.any(String)
      })
    })
  })

  test("objects property 'password' is String", () => {
    var result = groceristar.getUsers()
    result.forEach((obj) => {
      expect(obj).toMatchObject({
        password: expect.any(String)
      })
    })
  })
})
