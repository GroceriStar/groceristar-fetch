/* global describe, it, expect */
const { getKeyArrayDepAndIng } = require('../src/index.js')

describe('getKeyArrayDepending method', () => {
  const result = getKeyArrayDepAndIng()
  it('testing the method returns an array', () => {
    expect(Array.isArray(result)).toBe(true)
  })
  it('testing the returned array is not empty', () => {
    expect(result).not.toBe('')
  })
})
