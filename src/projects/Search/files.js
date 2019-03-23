// yes it's bad, but it works, some sort of...
// @TODO https://github.com/GroceriStar/sd/issues/3

const staticData = require('@groceristar/sd-wrapper')

// @TODO i think from now it can easily improved by exporting into object without these middlenam constants

const allergies = staticData.allergies

const courses = staticData.course

const cuisines = staticData.cuisine

const diets = staticData.diet

const holidays = staticData.holiday

const ingredients1 = staticData.ingredients1
  // require('@groceristar/sd-wrapper/dist/data/Ingredients/ingredients1.json')

const measurements = staticData.measurements

// @TODO update sd-wrapepr module. we return an actual file, not it's parsed version.
// or should we apply parser stuff?
// const { file } = require('@groceristar/sd-wrapper')

module.exports = {
  allergies,
  courses,
  cuisines,
  diets,
  holidays,
  ingredients1,
  measurements

  // file
}
