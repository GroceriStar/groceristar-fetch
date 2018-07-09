# groceristar-fetch
fetch static data from files and return array to use in recipe search

var gf = require('@groceristar/groceristar-fetch')

var allergies = gf.getAllergies();
returns array of allergies

var courses = module.getCourses();
returns array of courses

var cuisines = module.getCuisines();
returns array of cuisines

var diets = module.getDiets();
returns array of diets

var holidays = module.getHolidays();
returns array of holidays

var ingredients = module.getIngredients();
returns array of primary ingredients

var ingredients2 = module.getIngredients2();
returns array of some more ingredients

var Measurements = module.getMeasurements();
returns array of measurements object containing singular, plural and abbreviation
example
{
    "singular": "gram",
    "plural": "grams",
    "abbreviation": "g"
}


[![Build Status](https://travis-ci.org/GroceriStar/groceristar-fetch.svg?branch=master)](https://travis-ci.org/GroceriStar/groceristar-fetch)
