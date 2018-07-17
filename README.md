# groceristar-fetch
[![Build Status](https://travis-ci.org/GroceriStar/groceristar-fetch.svg?branch=master)](https://travis-ci.org/GroceriStar/groceristar-fetch)
[![npm version](https://badge.fury.io/js/%40groceristar%2Fgroceristar-fetch.svg)](https://badge.fury.io/js/%40groceristar%2Fgroceristar-fetch)
[![Dependabot compatibility score](https://api.dependabot.com/badges/compatibility_score?dependency-name=@groceristar/groceristar-fetch&package-manager=npm_and_yarn&previous-version=1.1.5&new-version=1.1.6)](https://dependabot.com/compatibility-score.html?dependency-name=@groceristar/groceristar-fetch&package-manager=npm_and_yarn&previous-version=1.1.5&new-version=1.1.6)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/gpl/gpl.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![forthebadge](https://forthebadge.com/images/badges/oooo-kill-em.svg)](https://forthebadge.com)


- Fetch static data from files and return array to use in Food Tech projects

![Alt Text](https://media.giphy.com/media/4TcRVUzpZzsvo9fVlu/giphy.gif)

#### Synopsis

Food Tech related static data in json arrays, like recipes, ingredients, recipes, diets, allergies, etc.


#### Code Example

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

```npm test```


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
var ingredients = gf.getIngredients();
```


---

#### Get an array of Ingredients (Groceristar part)
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
var ingredientsData = gf.getIngredientsData();
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
var groceryData = gf.getGroceryData();
```
return array of grocery data

---
```
var usersData = gf.getUsersData();
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
var departmentsData = gf.getDepartmentsData();
```
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
```

```example
[
	"Asparagus",
	"Broccoli",
	"Carrots"
]
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
