const staticData = require('@groceristar/sd-wrapper')
const measurementSystems = staticData.measurementSystems
const measurementUnits = staticData.measurementUnits
const generatedMeasurementUnits = staticData.generatedMeasurementUnits
const generatedMeasurementSystem = staticData.generatedMeasurementSystem

// @TODO it will be a place where all went broken because of our latest changes in sd-wrapper module.
// be ready for that

const cookingTimes = staticData.cookingTimes
const cup1 = staticData.cup1
const halfCup = staticData.halfCup
const quaterCup = staticData.quaterCup
const cup18 = staticData.cup1_8
const cup34 = staticData.cup3_4
const dash = staticData.dash
const gallon = staticData.gallon
const pinch = staticData.pinch
const pint = staticData.pint
const quart = staticData.quart
const tablespoon = staticData.tablespoon
const teaspoon = staticData.teaspoon

module.exports = {
  measurementSystems,
  measurementUnits,
  generatedMeasurementUnits,
  generatedMeasurementSystem,
  cookingTimes,
  cup1,
  halfCup,
  quaterCup,
  cup18,
  cup34,
  dash,
  gallon,
  pinch,
  pint,
  quart,
  tablespoon,
  teaspoon
}
