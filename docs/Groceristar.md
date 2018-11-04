---
id: groceristar-project
title: Methods, related to GroceriStar project
sidebar_label: GroceriStar project
---

#### Importing Groceristar module
```
const { groceristar } = require('@groceristar/groceristar-fetch');
// or 
import { groceristar } from '@groceristar/groceristar-fetch';
```

---
#### Get an array of Ingredients
```
var ingredients = groceristar.getIngredients();

//returns array of objects containing ingredients with their departments
```

Return
```
{
    "name": "Butter  Margarine",
    "department": "Dairy"
}
```


---
#### Get an array of Grocery
```
var grocery = groceristar.getGrocery();

//returns array of grocery data
```


---
#### Get an array of Users
```
var users = groceristar.getUsers();
```

Return
```
{
    "name": "john",
    "email": "john.doe@ibm.com",
    "password": "john1"
}
```


---
#### Get an array of Departments
```
var departments = groceristar.getDepartments();
```

Return
```
{
   "name": "Fresh vegetables",
   "type": "food"
}
```


---
#### Get an array of all Departments
```
var allDepartments = groceristar.getAllDepartments();
```
Return
```
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
var allIngredientsByOneDepartment = groceristar.getAllIngredientsByOneDepartment("Fresh vegetables");
```

Return
```
[
	"Asparagus",
	"Broccoli",
	"Carrots"
]
```

---
### Get an array of grocery by id
```
var groceryId5 = groceristar.getGroceryById(5);
```

Return
```
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
var groceryLists = groceristar.getGroceryListsWithCountDepartments();
```

Return
```
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
### Get an array of grocery lists based on department
```
var groceryLists = gf.getGroceryListsByDepartment('Protein');
```

Return
```
[
  { name: 'Clean Fatiring', id: 2 },
  { name: 'Healthy Vegetarian', id: 4 },
  { name: 'Keto Diet Food', id: 5 }
]
```
