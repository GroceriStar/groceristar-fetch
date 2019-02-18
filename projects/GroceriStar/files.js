const departments  = require('../../data/Departments/departments.json');
// const ingredients3     = require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');
let   groceries    = require('../../data/Grocery/grocery.json');
// const ingredients3     = require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');
const ingredients  = require('../../data/Ingredients/ingredients.json');
// const ingredients3     = require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');

// const users        = require('../../data/Users/users.json');
const users     = require('@groceristar/sd-wrapper/lib/data/Users/users.json');


module.exports = {
  departments,
  groceries,
  ingredients,
  users
}
