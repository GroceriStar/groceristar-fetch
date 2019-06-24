/* global describe, it, expect */
const {getUsers} = require('../index.js')

describe('testing objects inside users', () => {
  // @TODO make users variable export in groceristar.js file
  const users = groceristar.getUsers()

  const userObjectIsValid = property => {
    it(`User object is contain ${property} property in String type`, () => {
      users.forEach(user => {
        // expect(user).toMatchObject({
        //   property: expect.any(String)
        // })
        expect(user).toHaveProperty(property)
      })
    })
  }

  userObjectIsValid('name')
  userObjectIsValid('email')
  userObjectIsValid('password')
})
