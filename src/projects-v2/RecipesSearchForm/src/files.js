// yes it's bad, but it works, some sort of...
// @TODO https://github.com/GroceriStar/sd/issues/3


// @TODO i think from now it can easily improved by exporting into
// object without these middlenam constants

import {
  allergies,
  courses,
  cuisines,
  diets,
  holidays,
  ingredients1,
  measurements
} from '@groceristar/sd-wrapper'


// @TODO update sd-wrapepr module. we return an actual file, not it's parsed version.
// or should we apply parser stuff?
// const { file } = require('@groceristar/sd-wrapper')

export {
  allergies,
  courses,
  cuisines,
  diets,
  holidays,
  ingredients1,
  measurements

  // file
}
