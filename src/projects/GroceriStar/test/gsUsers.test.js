/* global test, describe, it, expect, jest */
const groceristar = require('../groceristar.js')

describe('testing objects inside users', () => {
  // @TODO make users variable export in groceristar.js file
  const users = groceristar.getUsers();

  const userObjectIsValid = property => {
    test(`User object is contain \'${property}\' property in \'String\' type`, () => {
      users.forEach( obj => {
        expect(obj).toHaveProperty(property)
        expect(obj[property]).is(String)
      })
    })
  }

  userObjectIsValid('name')
  userObjectIsValid('email')
  userObjectIsValid('password')
  userObjectIsValid('password')
})
