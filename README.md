# groceristar-fetch
[![Build Status](https://travis-ci.org/GroceriStar/groceristar-fetch.svg?branch=master)](https://travis-ci.org/GroceriStar/groceristar-fetch)
- Fetch static data from files and return array to use in recipe search



```
var gf = require('@groceristar/groceristar-fetch')
```

```
var allergies = gf.getAllergies();
```
returns array of allergies

---
```
var courses = gf.getCourses();
```
returns array of courses

---
```
var cuisines = gf.getCuisines();
```
returns array of cuisines

---
```
var diets = gf.getDiets();
```
returns array of diets

---
```
var holidays = gf.getHolidays();
```
returns array of holidays

---
```
var ingredients = gf.getIngredients();
```
returns array of primary ingredients

---
```
var ingredients2 = gf.getIngredients2();
```
returns array of some more ingredients

---
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

