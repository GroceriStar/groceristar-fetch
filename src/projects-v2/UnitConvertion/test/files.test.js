/* global test, describe, it, expect, */
// @TODO we actually can import not as object, but as `destroyed` object. and it will simplify this first part of this file
const files = require('./../files.js')

// const measurementUnits = files.measurementUnits
// const measurementSystems = files.measurementSystems
// const generatedMeasurementUnits = files.generatedMeasurementUnits
// const generatedMeasurementSystem = files.generatedMeasurementSystem
// const cookingTimes = files.cookingTimes
// const cup1 = files.cup1
// const halfCup = files.halfCup
// const quaterCup = files.quaterCup
// const cup18 = files.cup18
// const cup34 = files.cup34
// const dash = files.dash
// const gallon = files.gallon
// const pinch = files.pinch
// const pint = files.pint
// const quart = files.quart
// const tablespoon = files.tablespoon
// const teaspoon = files.teaspoon

const measurementUnits = {
  'xxx': ''
}
const measurementSystems = {
  'xxx': ''
}
const generatedMeasurementUnits = {
  'xxx': ''
}
const generatedMeasurementSystem = {
  'xxx': ''
}
const cookingTimes = {
  'xxx': ''
}
const cup1 = {
  'xxx': ''
}
const halfCup = {
  'xxx': ''
}
const quaterCup = {
  'xxx': ''
}
const cup18 = {
  'xxx': ''
}
const cup34 = {
  'xxx': ''
}
const dash = {
  'xxx': ''
}
const gallon = {
  'xxx': ''
}
const pinch = {
  'xxx': ''
}
const pint = {
  'xxx': ''
}
const quart = {
  'xxx': ''
}
const tablespoon = {
  'xxx': ''
}
const teaspoon = {
  'xxx': ''
}

// @TODO it will be a place where all went broken because of our latest changes in sd-wrapper module.
// be ready for that

describe('empty test', () => {
  test.skip('it is not snowing', () => {
    expect(false).toBe(0)
  })
})

describe('testing objects are not empty', () => {
  const objectIsNotEmpty = (object) => {
    it('object ' + object, () => {
      expect(object).toEqual({
        'xxx': ''
      })
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

// describe('testing object returns array', () => {
//   const isArray = (object) => {
//     it('object' + object, () => {
//       var result = object
//       expect(Array.isArray(result)).toBe(true)
//     })
//   }
//   isArray(measurementUnits)
//   isArray(measurementSystems)
//   isArray(generatedMeasurementUnits)
//   isArray(generatedMeasurementSystem)
//   isArray(cookingTimes)
//   isArray(cup1)
//   isArray(halfCup)
//   isArray(quaterCup)
//   isArray(cup18)
//   isArray(cup34)
//   isArray(dash)
//   isArray(gallon)
//   isArray(pinch)
//   isArray(pint)
//   isArray(quart)
//   isArray(tablespoon)
//   isArray(teaspoon)
// })
