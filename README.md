# Groceristar-fetch module

#### Synopsis
Food Tech related static data in json arrays, like recipes, ingredients, recipes, diets, allergies, etc.

[![Build Status](https://travis-ci.org/GroceriStar/groceristar-fetch.svg?branch=master)](https://travis-ci.org/GroceriStar/groceristar-fetch)
[![npm version](https://badge.fury.io/js/%40groceristar%2Fgroceristar-fetch.svg)](https://badge.fury.io/js/%40groceristar%2Fgroceristar-fetch)
[![Dependabot compatibility score](https://api.dependabot.com/badges/compatibility_score?dependency-name=@groceristar/groceristar-fetch&package-manager=npm_and_yarn&previous-version=1.1.5&new-version=1.1.6)](https://dependabot.com/compatibility-score.html?dependency-name=@groceristar/groceristar-fetch&package-manager=npm_and_yarn&previous-version=1.1.5&new-version=1.1.6)
[![forthebadge](https://forthebadge.com/images/badges/oooo-kill-em.svg)](https://forthebadge.com)

![Alt Text](https://media.giphy.com/media/4TcRVUzpZzsvo9fVlu/giphy.gif)

#### Code Example

```
var gf = require('@groceristar/groceristar-fetch')
var measurements = gf.getMeasurements();

// returns array of measurements object containing singular, plural and abbreviation

example
{
    "singular": "gram",
    "plural": "grams",
    "abbreviation": "g"
}
```

#### Motivation

In a few our projects we have a similar files. And we always copy-paste code between them. So by moving this code into separated place - i hope we'll make our projects better.


#### Installation

Provide code examples and explanations of how to get the project.

`npm install @groceristar/static-fetch`
or
`yarn add @groceristar/static-fetch`

#### Usage

```
var gf = require('@groceristar/groceristar-fetch')
console.log(data);

import gf from '@groceristar/groceristar-fetch'
```

#### Tests

`npm test`


#### Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.


---
Tasks:
- [ ] [Search Form static data](https://github.com/GroceriStar/static-data/issues/14)
- [ ] [ChickenKyiv Free Menu Release import data](https://github.com/GroceriStar/static-data/issues/10)
---


---
#### Get an array of Allergies

```
var allergies = gf.getAllergies();
```

---
#### Get an array of Courses
```
var courses = gf.getCourses();
```


---
#### Get an array of Cuisines
```
var cuisines = gf.getCuisines();
```


---
#### Get an array of Diets
```
var diets = gf.getDiets();
```


---
#### Get an array of Holidays
```
var holidays = gf.getHolidays();
```


---
#### Get an array of Ingredients (Search part)
```
var ingredients1 = gf.getIngredients1();
```


---

#### Get an array of Ingredients (Search part)
```
var ingredients2 = gf.getIngredients2();
```


---
#### Get an arrray of Measurements
```
var measurements = gf.getMeasurements();

// returns array of measurements object containing singular, plural and abbreviation

example
{
    "singular": "gram",
    "plural": "grams",
    "abbreviation": "g"
}
```

---
```
var ingredients = gf.getIngredients();
```
returns array of objects containing ingredients with their departments

```example
{
    "name": "Butter  Margarine",
    "department": "Dairy"
}
```

---
```
var grocery = gf.getGrocery();
```
return array of grocery data

---
```
var users = gf.getUsers();
```
```example
{
    "name": "john",
    "email": "john.doe@ibm.com",
    "password": "john1"
}
```

---
```
var departments = gf.getDepartments();
```
```example
{
   "name": "Fresh vegetables",
   "type": "food"
}
```
---
```
var allDepartments = gf.getAllDepartments();
```

```
example
[
    "Fresh vegetables",
    "Condiments / Sauces",
    "Dairy",
    "Cheese",
    "Meat"
]
```
---
```
var allIngredientsByOneDepartment = gf.getAllIngredientsByOneDepartment("Fresh vegetables");
```

```
example
[
	"Asparagus",
	"Broccoli",
	"Carrots"
]
```

---
```
var ingredients3 = gf.getIngredients3();
```

```
example
[
    {
      "name": "medium russet potatoes, sliced into sticks",
      "departmentId": "department_id"
    },
    {
      "name": "tablespoons vegetable oil, divided",
      "departmentId": "department_id"
    },
    {
      "name": "salt & freshly ground black pepper, to taste",
      "departmentId": "department_id"
    }
]
```
---
```
var menu = gf.getMenu();
```

```
example
[{
    "title": "Weekly menu #9",
    "date": "new Date",
    "description": "string",
    "notes": "This is notes6"
  },
  {
    "title": "Weekly menu #6",
    "date": "new Date",
    "description": "string1",
    "notes": "This is notes5"
}]
```

---
```
var recipe = gf.getRecipe();
```

```
example
[{

    "title": "Crock Pot Roast12",
    "directions": [
      "Place beef roast in crock pot.",
      "Mix the dried mixes together in a bowl and sprinkle over the roast.",
      "Pour the water around the roast.",
      "Cook on low for 7-9 hours."
    ],
    "prep_time": "30min",
    "total_time": "3h",
    "recipe_yield": "8",
    "img": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
    "url": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"

}]
```
---


@TODO use different flags for one command in order to call different imports

[npm-run-script](https://docs.npmjs.com/cli/run-script)

[Introduction to NPM Scripts](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633)

```npm run test -- --arg="search"```

@TODO add tests

```
"migrate-grocery": "node bin/grocery/002-automigrate.js",
"migrate-search": "node bin/search/automigrate.js",
"migrate-recipes": "node bin/recipes/002-automigrate.js",
"import": "node bin/recipes/001-import.js",
"grocery": "node bin/grocery/001-import.js",
"search": "node bin/search/import.js",
"g": "npm run migrate-grocery && nodemon bin/grocery/import.js",
"r": "npm run migrate-recipes && nodemon bin/recipes/import.js",
"s": "npm run migrate-search  && nodemon bin/search/import.js",
"g2": "npm run migrate-grocery && node bin/grocery/import.js",
"r2": "npm run migrate-recipes && node bin/recipes/import.js",
"s2": "npm run migrate-search  && node bin/search/import.js"
```

https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738
https://medium.com/@adrianli/the-idiot-s-guide-to-publishing-a-react-component-to-npm-2b66b1ac03e0

#### Old



```
let table_name = "Allergy"

const get = () => {

    var data     = [
          {

               "name":"Gluten-Free",

               "type":"allergy",

          }
     ];

  	return data;

};
module.exports.get   = get;
```
