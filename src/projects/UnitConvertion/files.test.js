const files= require('./files.js');

const measurementUnits = files.measurementUnits;
const measurementSystems = files.measurementSystems;

const generatedMeasurementUnits = files.generatedMeasurementUnits;
const generatedMeasurementSystem =files.generatedMeasurementSystem;
                     

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

})


describe('testing object returns array',()=> {
  const isArray=(object) => {
    it('object' + object, () =>{
      var result = object
      expect(Array.isArray(result)).toBe(true)
    })
  }
isArray(measurementUnits)
isArray(measurementSystems)
isArray(generatedMeasurementUnits)
isArray(generatedMeasurementSystem)

})

