// @TODO explain about selectors.js logic and discuss current export("build") process

// @TODO finish this...
const search = require('./projects-v2/Search/dist/index.js')

const groceristar = require('./projects/GroceriStar/dist/index.js')

const chickenKyiv = require('./projects/ChickenKyiv/dist/index.js')

const mealCalendar = require('./projects/MealCalendar/dist/index.js')

const showcase = require('./projects/Showcase/dist/index.js')

const graphQL = require('./projects/GraphQL/dist/index.js')

const gsLoopback = require('./projects/GS-Loopback/dist/index.js')


// const search = require('./projects/Search/search.js')
//
// const groceristar = require('./projects/GroceriStar/groceristar.js')
//
// const chickenKyiv = require('./projects/ChickenKyiv/chickenKyiv.js')
//
// const mealCalendar = require('./projects/MealCalendar/mealCalendar.js')
//
// const showcase = require('./projects/Showcase/showcase.js')
//
// const graphQL = require('./projects/GraphQL/graphQL.js')
//
// const gsLoopback = require('./projects/GS-Loopback/loopback.js')



// i'm separating this file because it's not fit to logic of this module very well.
// const CKImport = require('./Import/CKImport')

module.exports = {
  search,
  groceristar,
  chickenKyiv,
  mealCalendar,
  showcase,
  graphQL,
  gsLoopback,

  // CKImport
}
