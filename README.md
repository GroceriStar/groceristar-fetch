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



`npm install @groceristar/groceristar-fetch`
or
`yarn add @groceristar/groceristar-fetch`

#### Usage

```
var data = require('@groceristar/groceristar-fetch')
console.log(data);

import data from '@groceristar/groceristar-fetch'
```

#### Tests

`npm test`


#### Contributors

@vadim9999, @MinkoJ2, @chauhannishith, @atherdon


---
Tasks:
- [ ] [Search Form static data](https://github.com/GroceriStar/static-data/issues/14)
- [ ] [ChickenKyiv Free Menu Release import data](https://github.com/GroceriStar/static-data/issues/10)
---


---
### SearchAPI project examples
https://groceristar.github.io/groceristar-fetch/docs/searchapi-project.html
---

### GroceriStar project examples
https://groceristar.github.io/groceristar-fetch/docs/groceristar-project.html

---
### ChickenKyiv project examples
https://groceristar.github.io/groceristar-fetch/docs/chickenkyiv-project.html

---
### Meal Calendar project examples
https://groceristar.github.io/groceristar-fetch/docs/mealcalendar-project.html

---
### Get an array of grocery by id
```
var groceryId5 = gf.getGroceryById(5);

example
[
  {
    "departments": [
      "FATS",
      "KETO SNACKS",
      "PROTEIN",
      "VEGGIES",
      "CONDIMENTS",
      "DRINKS",
      "FLOUR",
      "FRUITS"
    ],
    "id": 5,
    "name": "Keto Diet Food",
    "img": false,
    "desc": false,
    "slug": false
  }
]
```

---
### Get an array of grocery lists with count of departments
```
var groceryLists = gf.getGroceryListsWithCountDepartments();

example
[
  {
    "id": 1,
    "name": "Ultimate Grocery List",
    "departmentsCount": 27
  },
  {
    "id": 2,
    "name": "Clean Fatiring",
    "departmentsCount": 8
  },
]
```

---
### Get a placeholder
```
var allergy = gf.getPlaceholder('Allergy');
// will return "Allergies"

```

## Intergration with React
```
import data from '@groceristar/groceristar-fetch/search';
function toOpt(arr) {
    let Opt= arr.reduce((intermediate, item, index) => {
        intermediate[index]={};
        intermediate[index].value = index;
        intermediate[index].label = item;
        return intermediate;
    }, []);
    return Opt;
}

const Options = toOpt(data.getAllergies());

```
or

```
import data from '@groceristar/groceristar-fetch/search';

  getAttributeData(type){
    // this.props.type

    if (this.props.type == 'Allergy') {
      return data.getAttribute('allergies');
    }
    if (this.props.type == 'Diet') {
      return data.getAttribute('diets');
    }
    if (this.props.type == 'Cuisine') {
      return data.getAttribute('cuisines');
    }
    if (this.props.type == 'Course') {
      return data.getAttribute('courses');
    }
    if (this.props.type == 'Holiday') {
      return data.getAttribute('holidays');
    }
  }
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
