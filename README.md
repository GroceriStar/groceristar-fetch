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