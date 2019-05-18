const files= require('./files.js');

const measurementUnits = files.measurementUnits;
const measurementSystems = files.measurementSystems;

const generatedMeasurementUnits = files.generatedMeasurementUnits;
const generatedMeasurementSystem =files.generatedMeasurementSystem;

const cooking_times = files.cooking_times;
const cup1 = files.cup1;
const cup1_2 = files.cup1_2;
const cup1_4 = files.cup1_4;
const cup1_8 = files.cup1_8;
const cup3_4 = files.cup3_4;
const dash = files.dash;
const gallon1 = files.gallon1;
const pinch = files.pinch;
const pint1 = files.pint1;
const quart1 = files.quart1;
const tablespoon_1 = files.tablespoon_1;
const teaspoon_1 = files.teaspoon_1;
                     

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
  objectIsNotEmpty(generatedMeasurementUnits)
  objectIsNotEmpty(generatedMeasurementSystem)
  objectIsNotEmpty(cooking_times)
  objectIsNotEmpty(cup1)
  objectIsNotEmpty(cup1_2)
  objectIsNotEmpty(cup1_4)
  objectIsNotEmpty(cup1_8)
  objectIsNotEmpty(cup3_4)
  objectIsNotEmpty(dash)
  objectIsNotEmpty(gallon1)
  objectIsNotEmpty(pinch)
  objectIsNotEmpty(pint1)
  objectIsNotEmpty(quart1)
  objectIsNotEmpty(tablespoon_1)
  objectIsNotEmpty(teaspoon_1)


})


describe('testing object returns array',() => {
  const isArray = (object) => {
    test('object' + object, () => {
      var result = object
      expect(Array.isArray(result)).toBe(true)
    })
  }
  
  isArray(measurementUnits)
  isArray(measurementSystems)
  isArray(generatedMeasurementUnits)
  isArray(generatedMeasurementSystem)
  isArray(cooking_times)
  isArray(cup1)
  isArray(cup1_2)
  isArray(cup1_4)
  isArray(cup1_8)
  isArray(cup3_4)
  isArray(dash)
  isArray(gallon1)
  isArray(pinch)
  isArray(pint1)
  isArray(quart1)
  isArray(tablespoon_1)
  isArray(teaspoon_1)

})

