const fs = require('fs');
const allergies    = require('./data/Allergy/allergies.json');
const courses      = require('./data/Course/courses.json');
const cuisines     = require('./data/Cuisine/cuisines.json');
const diets        = require('./data/Diet/diets.json');
const holidays     = require('./data/Holiday/holidays.json');
const ingredients  = require('./data/Ingredient/ingredients.json');
const ingredients2 = require('./data/Ingredient/ingredients2.json');
const measurements = require('./data/Measurement/measurements.json');

test('allergies file isset', () => {
  var stream = fs.readFileSync(allergies, 'utf-8')
  expect(stream).not.toBe('')

})

test('courses file isset', () => {
  var stream = fs.readFileSync(courses, 'utf-8')
  expect(stream).not.toBe('')
})

test('cuisines file isset', () => {
  var stream = fs.readFileSync(cuisines, 'utf-8')
  expect(stream).not.toBe('')
})

test('diets file isset', () => {
  var stream = fs.readFileSync(diets, 'utf-8')
  expect(stream).not.toBe('')
})

test('holidays file isset', () => {
  var stream = fs.readFileSync(holidays, 'utf-8')
  expect(stream).not.toBe('')
})

test('ingredients file isset', () => {
  var stream = fs.readFileSync(ingredients, 'utf-8')
  expect(stream).not.toBe('')
})

test('measurements file isset', () => {
  var stream = fs.readFileSync(measurements, 'utf-8')
  expect(stream).not.toBe('')
})
