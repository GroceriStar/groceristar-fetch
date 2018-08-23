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
#### Get an array of Allergies

```
var allergies = gf.getAttribute('allergies');

example
[
  "Gluten-Free",
  "Peanut-Free",
  "Seafood-Free"
]
```

---
#### Get an array of Courses
```
var courses = gf.getAttribute('courses');

example
[
  "Main Dishes",
  "Desserts",
  "Side Dishes",
  "Appetizers"
]
```


---
#### Get an array of Cuisines
```
var cuisines = gf.getAttribute('cuisines');
```


---
#### Get an array of Diets
```
var diets = gf.getAttribute('diets');

example
[
  "Lacto vegetarian",
  "Ovo vegetarian",
  "Pescetarian"
]
```


---
#### Get an array of Holidays
```
var holidays = gf.getAttribute('holidays');
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
#### Get an array of Measurements
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
#### Get an array of Ingredients
```
var ingredients = gf.getIngredients();

//returns array of objects containing ingredients with their departments

example
{
    "name": "Butter  Margarine",
    "department": "Dairy"
}
```


---
#### Get an array of Grocery
```
var grocery = gf.getGrocery();

//returns array of grocery data
```


---
#### Get an array of Users
```
var users = gf.getUsers();

example
{
    "name": "john",
    "email": "john.doe@ibm.com",
    "password": "john1"
}
```


---
#### Get an array of Departments
```
var departments = gf.getDepartments();

example
{
   "name": "Fresh vegetables",
   "type": "food"
}
```


---
#### Get an array of all Departments
```
var allDepartments = gf.getAllDepartments();

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
#### Get an array of all ingredients by one department
```
var allIngredientsByOneDepartment = gf.getAllIngredientsByOneDepartment("Fresh vegetables");

example
[
	"Asparagus",
	"Broccoli",
	"Carrots"
]
```


---
#### Get an array of Ingredients3
```
var ingredients3 = gf.getIngredients3();

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
#### Get an array of Menu
```
var menu = gf.getMenu();

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
#### Get an array of Recipe
```
var recipe = gf.getRecipe();

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
#### Get an array of nutritions1
```
var nutritions1 = gf.getNutritions1();

example
[
 {
   "calories"  : 450,
   "fat_calories" : 430,
   "total_fat" : 48,
   "sat_fat"
 }
 ]
```


---
#### Get an array of nutritions2
```
var nutritions2 = gf.getNutritions2();

example
[{
         "type": "Vitamins",
         "items": [
           "Vitamin A (retinol)",
           "Vitamin B1 (thiamin)"
           ]
}]
```

---
### Get an array of meal calendar
```
var mealCalendar = gf.getMealCalendar();

example
[
  {
    "id": "week1",
    "recipes": [
      {
        "tag": "steak",
        "text": "Grilled Honey & Ginger Marinated Flank Steaks with Mashed Potatoes, Tossed Salad and Rolls",
        "day": "Sunday"
      }
    ]
  }
]
```


---
### Get an array of dishes by day
```
var dishesOfTuesday = gf.getDishByDay('Tuesday');

example
[
  {
    "id": "week1",
    "recipe": {
      "tag": "chicken",
      "text": "Slow Cooker Cola Chicken with Leftover Mashed Potato Puff, Green Beans and Peaches",
      "day": "Tuesday"
    }
  }
]
```


---
### Get an array of dishes by week
```
var dishesOfWeek5 = gf.getDishByWeek('week5');

example
[
  {
    "id": "week5",
    "recipes": [
      {
        "tag": "pork",
        "text": "Ham with Cheesy Potato Casserole, Green Bean Casserole, Deviled Eggs and Rolls",
        "day": "Sunday"
      }
    ]
  }
]
```

---
### Get an array of dishes by month
```
var dishesOfMonth3 = gf.getDishByMonth(3);
Obs: for now, 5 is the max number of month

example
[
  {
    "id": "week9",
    "recipes": [
      {
        "tag": "pork",
        "text": "Grilled Pork Chops with Twice Baked Potatoes, Green Beans Strawberries",
        "day": "Sunday"
      }
    ]
  }
]
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
