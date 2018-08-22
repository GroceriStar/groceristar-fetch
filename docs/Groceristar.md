---
id: groceristar-project
title: GroceriStar project
sidebar_label: GroceriStar project
---

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
