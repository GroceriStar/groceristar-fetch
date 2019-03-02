const search      = require('./search.js')


describe("testing search getAttribute method", () => {

  const testAttributes = ( attribute ) => {

    test('getAttribute("${attribute}")', () => {
      var stream = search.getAttribute(attribute)
      expect(stream).not.toBe('')
    })
  }

  testAttributes('allergies')
  testAttributes('cuisines')
  testAttributes('courses')

  testAttributes('holidays')
  testAttributes('diets')


});

describe("testing search getPlaceholder method", () => {

  const testPlaceholders = ( attribute ) => {

    test('getPlaceholder("${attribute}")', () => {
      var stream = search.getPlaceholder(attribute)
      expect(stream).not.toBe('')
    })
  }

  testPlaceholders('Allergy')
  testPlaceholders('Diets')
  testPlaceholders('Cuisine')

  testPlaceholders('Course')
  testPlaceholders('Holidays')

});
