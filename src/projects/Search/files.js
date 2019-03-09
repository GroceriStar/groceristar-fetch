// yes it's bad, but it works, some sort of...
// @TODO https://github.com/GroceriStar/sd/issues/3
const allergies =
  require('@groceristar/sd-wrapper/dist/data/Allergy/allergies.json')

const courses =
  require('@groceristar/sd-wrapper/dist/data/Course/courses.json')

const cuisines =
  require('@groceristar/sd-wrapper/dist/data/Cuisine/cuisines.json')

const diets =
  require('@groceristar/sd-wrapper/dist/data/Diet/diets.json')

const holidays =
  require('@groceristar/sd-wrapper/dist/data/Holiday/holidays.json')

const ingredients1 =
  require('@groceristar/sd-wrapper/dist/data/Ingredients/ingredients1.json')

const measurements =
  require('@groceristar/sd-wrapper/dist/data/Measurement/measurements.json')

// @TODO update sd-wrapepr module. we return an actual file, not it's parsed version.
// or should we apply parser stuff?
const { file } = require('@groceristar/sd-wrapper');

module.exports = {
  allergies,
  courses,
  cuisines,
  diets,
  holidays,
  ingredients1,
  measurements,

  file
}
