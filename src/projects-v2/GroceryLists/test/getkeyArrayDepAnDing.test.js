/* global describe, it, expect */
const groceristar = require('../groceristar.js')

describe('getKeyArrayDepending method', () => {
  const result = groceristar.getKeyArrayDepAndIng()
  it('testing the method returns an array', () => {
    expect(Array.isArray(result)).toBe(true)
  })
  it('testing the returned array is not empty', () => {
    expect(result).not.toBe('')
  })
})
