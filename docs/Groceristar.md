---
id: groceristar-project
title: Methods, related to GroceriStar project
sidebar_label: GroceriStar project
---

---
#### Get an array of Ingredients
```
var ingredients = gf.getIngredients();

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
var grocery = gf.getGrocery();

//returns array of grocery data
```


---
#### Get an array of Users
```
var users = gf.getUsers();
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
var departments = gf.getDepartments();
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
var allDepartments = gf.getAllDepartments();
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
var allIngredientsByOneDepartment = gf.getAllIngredientsByOneDepartment("Fresh vegetables");
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
var groceryId5 = gf.getGroceryById(5);
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
var groceryLists = gf.getGroceryListsWithCountDepartments();
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
