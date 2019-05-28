const files = require('../files.js')

const measurementUnits = files.measurementUnits
const measurementSystems = files.measurementSystems

const generatedMeasurementUnits = files.generatedMeasurementUnits
const generatedMeasurementSystem = files.generatedMeasurementSystem

//@TODO it will be a place where all went broken because of our latest changes in sd-wrapper module.
// be ready for that
const cookingTimes = files.cookingTimes
const cup1 = files.cup1
const halfCup = files.halfCup
const quaterCup = files.quaterCup
const cup18 = files.cup18
const cup34 = files.cup34
const dash = files.dash
const gallon = files.gallon
const pinch = files.pinch
const pint = files.pint
const quart = files.quart
const tablespoon = files.tablespoon
const teaspoon = files.teaspoon

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
  objectIsNotEmpty(halfCup)
  objectIsNotEmpty(quaterCup)
  objectIsNotEmpty(cup18)
  objectIsNotEmpty(cup34)
  objectIsNotEmpty(dash)
  objectIsNotEmpty(gallon)
  objectIsNotEmpty(pinch)
  objectIsNotEmpty(pint)
  objectIsNotEmpty(quart)
  objectIsNotEmpty(tablespoon)
  objectIsNotEmpty(teaspoon)
})

describe('testing object returns array', () => {
  const isArray = (object) => {
    it('object' + object, () => {
      var result = object
      expect(Array.isArray(result)).toBe(true)
    })
  }

  isArray(measurementUnits)
  isArray(measurementSystems)
  isArray(generatedMeasurementUnits)
  isArray(generatedMeasurementSystem)
  isArray(cookingTimes)
  isArray(cup1)
  isArray(halfCup)
  isArray(quaterCup)
  isArray(cup18)
  isArray(cup34)
  isArray(dash)
  isArray(gallon)
  isArray(pinch)
  isArray(pint)
  isArray(quart)
  isArray(tablespoon)
  isArray(teaspoon)
})
