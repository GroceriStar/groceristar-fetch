const search       = require("./projects/Search/search.js");
const groceristar  = require("./projects/GroceriStar/groceristar.js");
const chickenKyiv  = require('./projects/ChickenKyiv/chickenKyiv.js');
const mealCalendar = require("./projects/MealCalendar/mealCalendar.js");
// const showcase = require("./projects/MealCalendar/showcase.js");


// i'm separating this file because it's not fit to logic of this module very well.
const CKImport     = require("./Import/CKImport");
// console.log(groceristar.getDepartmentsGraphQLKey());



module.exports = {
  search: search,
  groceristar: groceristar,
  chickenKyiv: chickenKyiv,
  mealCalendar: mealCalendar,




  CKImport: CKImport
}
