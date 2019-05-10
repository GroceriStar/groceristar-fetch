const files= require('./files.js');
const measurementUnits = files.measurementUnits;
const measurementSystems = files.measurementSystems;

/* global test, describe, it, expect, jest */

describe('empty test', () => {
  test.skip('it is not snowing', () => {
    expect(false).toBe(0)
  })
})

describe('testing objects are not empty', () => {
  const objectIsNotEmpty = (object) => {
    test('object ' + object, () => {
      var result = object
      expect(result).not.toBe('')
    })
  }
objectIsNotEmpty(measurementUnits)
objectIsNotEmpty(measurementSystems)

})
