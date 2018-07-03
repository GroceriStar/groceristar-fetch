const fs = require('fs');
const allergies    = './data/allergies.json';
const courses      = './data/courses.json';
const cuisines     = './data/cuisines.json';
const diets        = './data/diets.json';
const holidays     = './data/holidays.json';
const ingredients  = './data/ingredients.json';
const ingredients2 = './data/ingredients2.json';
const measurements = './data/measurements.json';

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
