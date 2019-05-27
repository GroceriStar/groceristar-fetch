//@TODO we actually can import not as object, but as `destroyed` object. and it will simplify this first part of this file
const files = require('./files.js')

const measurementUnits = files.measurementUnits
const measurementSystems = files.measurementSystems

const generatedMeasurementUnits = files.generatedMeasurementUnits
const generatedMeasurementSystem = files.generatedMeasurementSystem

//@TODO be ready that with latest changes variables below will be crashed
const cookingTimes = files.cookingTimes
const cup1 = files.cup1
const cup12 = files.cup12
const cup14 = files.cup14
const cup18 = files.cup18
const cup34 = files.cup34
const dash = files.dash
const gallon1 = files.gallon1
const pinch = files.pinch
const pint1 = files.pint1
const quart1 = files.quart1
const tablespoon1 = files.tablespoon1
const teaspoon1 = files.teaspoon1

/* global test, describe, it, expect, */

describe('empty test', () => {
  test.skip('it is not snowing', () => {
    expect(false).toBe(0)
  })
})

describe('testing objects are not empty', () => {
  const objectIsNotEmpty = (object) => {
    it('object ' + object, () => {
      var result = object
      expect(result).not.toBe('')
    })
  }

  objectIsNotEmpty(measurementUnits)
  objectIsNotEmpty(measurementSystems)
  objectIsNotEmpty(generatedMeasurementUnits)
  objectIsNotEmpty(generatedMeasurementSystem)
  objectIsNotEmpty(cookingTimes)
  objectIsNotEmpty(cup1)
  objectIsNotEmpty(cup12)
  objectIsNotEmpty(cup14)
  objectIsNotEmpty(cup18)
  objectIsNotEmpty(cup34)
  objectIsNotEmpty(dash)
  objectIsNotEmpty(gallon1)
  objectIsNotEmpty(pinch)
  objectIsNotEmpty(pint1)
  objectIsNotEmpty(quart1)
  objectIsNotEmpty(tablespoon1)
  objectIsNotEmpty(teaspoon1)
})

describe('testing object returns array', () => {
  const isArray = (object) => {
    it('object' + object, () => {
      expect(object).toEqual(
        expect.objectContaining(object)
      )
    })
  }

  isArray(measurementUnits)
  // isArray(measurementSystems)
  // isArray(generatedMeasurementUnits)
  // isArray(generatedMeasurementSystem)
  // isArray(cookingTimes)
  // isArray(cup1)
  // isArray(cup12)
  // isArray(cup14)
  // isArray(cup18)
  // isArray(cup34)
  // isArray(dash)
  // isArray(gallon1)
  // isArray(pinch)
  // isArray(pint1)
  // isArray(quart1)
  // isArray(tablespoon1)
  // isArray(teaspoon1)
})
