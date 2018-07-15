# groceristar-fetch
[![Build Status](https://travis-ci.org/GroceriStar/groceristar-fetch.svg?branch=master)](https://travis-ci.org/GroceriStar/groceristar-fetch)

[![npm version](https://badge.fury.io/js/%40groceristar%2Fgroceristar-fetch.svg)](https://badge.fury.io/js/%40groceristar%2Fgroceristar-fetch)




- Fetch static data from files and return array to use in Food Tech projects

![Alt Text](https://media.giphy.com/media/4TcRVUzpZzsvo9fVlu/giphy.gif)



#### Get an array of Allergies

```
var gf = require('@groceristar/groceristar-fetch')
```

```
var allergies = gf.getAllergies();
```


---
#### Get an array of Courses
```
var courses = gf.getCourses();
```
returns array of courses

---
#### Get an array of Cuisines
```
var cuisines = gf.getCuisines();
```
returns array of cuisines

---
#### Get an array of Diets
```
var diets = gf.getDiets();
```
returns array of diets

---
#### Get an array of Holidays
```
var holidays = gf.getHolidays();
```
returns array of holidays

---
#### Get an array of Ingredients (Search part)
```
var ingredients = gf.getIngredients();
```
returns array of primary ingredients

---

#### Get an array of Ingredients (Groceristar part)
```
var ingredients2 = gf.getIngredients2();
```
returns array of some more ingredients

---
#### Get an arrray of Measurements
```
var measurements = gf.getMeasurements();
```
returns array of measurements object containing singular, plural and abbreviation
```
example
{
    "singular": "gram",
    "plural": "grams",
    "abbreviation": "g"
}
```

---
var ingredientsData = gf.getIngredientsData();
returns array of objects containing ingredients with their departments
```example
{
    "name": "Butter  Margarine",
    "department": "Dairy"
}
```

---
```
var groceryData = gf.getGroceryData();
```
return array of grocery data

---
```
var usersData = gf.getUsersData();
```
return array of users objects
```example
{
    "name": "john",
    "email": "john.doe@ibm.com",
    "password": "john1"
}
```

---
```
var departmentsData = gf.getDepartmentsData();
```
return array of departments object
```example
{
   "name": "Fresh vegetables",
   "type": "food"
}
```
---
```
var getAllDepartments = gf.getAllDepartments();
```

return array of all departments
```example
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
var getAllIngredientsByOneDepartment = getAllIngredientsByOneDepartment("Fresh vegetables");

return array of ingredients by one department
```example
[
	"Asparagus",
	"Broccoli",
	"Carrots"
]
```

---
```

## Recipes static data

!https://travis-ci.org/GroceriStar/static-data.svg?branch=master!:https://travis-ci.org/GroceriStar/static-data


@TODO use different flags for one command in order to call different imports
https://docs.npmjs.com/cli/run-script
https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633

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

## Synopsis

Recipe related static data, like ingredients, recipes, diets, allergies, etc.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

In a few our projects we have a similar files. And we always copy-paste code between them. So by moving this code into separated place - i hope we'll make our projects better.


## Installation

Provide code examples and explanations of how to get the project.
`npm install @groceristar/static-data`

## Usage

```
var data = require('@groceristar/static-data');
console.log(data);

import data from '@groceristar/static-data'
```

#### API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README.md. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

#### Tests

```npm test```


## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.



Tasks:
- [ ] [Search Form static data](https://github.com/GroceriStar/static-data/issues/14)
- [ ] [Recipes exports for recipe app] (https://github.com/GroceriStar/static-data/issues/11)
- [ ] [ChickenKyiv Free Menu Release import data] (https://github.com/GroceriStar/static-data/issues/10)
- [ ] [Groceristar import data](https://github.com/GroceriStar/static-data/issues/9)
- [ ] [Search API import data](https://github.com/GroceriStar/static-data/issues/8)




#### Old



```
let table_name = 'Allergy'

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
>>>>>>> ff7bbf17b3373eae77d2aa9dfb020c2ea29bfc10
