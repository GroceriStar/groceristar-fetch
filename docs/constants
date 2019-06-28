# fetch-constants


compare these modules and pick one 

and check their downloads stats....
- https://www.npmjs.com/package/enumish (cool for inner objects...)
- https://github.com/cedx/enum.js (typescriptish :()
- https://github.com/adrai/enum (ok, and have getters... first in github search)
- https://github.com/wwayne/es6-enum (my winner so far)
- https://github.com/rauschma/enumify (can handle complex cases, but did we need them?)

- https://github.com/phenax/enum-fp/blob/master/docs/react.md (can be cool, because this actions our first goal)

longread below

---

https://github.com/GroceriStar/documentation

## [Groceristar][api][methods]

Below you'll see a document with basic URLS, that have any groceristar project.
In order to make it better, we'll create set of constants, each for a new path.
Example:
`POST [/grocerylist/department]` will became `export const GROCERY_DEPARMENT_POST = "/grocerylist/department";`

Put your code in this file: https://github.com/GroceriStar/types/blob/master/Groceristar/api/methods.js

---
```
// POST [/grocerylist/department] Departmentalize a list of strings — used for ad-hoc grocery list item addition

// DELETE [/grocerylist] Delete all the items on a grocery list; faster operation than a sync with deleted items.

// GET [/grocerylist] Get the user’s grocery list. User is determined by Basic Authentication.

// POST [/grocerylist/recipe] Add a Recipe to the grocery list. In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that the lines in the recipe should be marked in a “pending” (unconfirmed by user) state.

// POST [/grocerylist/sync] Synchronize the grocery list. Call this with a POST to /grocerylist/sync

// POST [/grocerylist/item] Add a single line item to the grocery list

// DELETE [/grocerylist/item/{guid}] [/grocerylist/item/{guid}] DELETE will delete this item assuming you own it.

// PUT [/grocerylist/item/{guid}] Update a grocery item by GUID
```


---

## types

ChickenKyiv API

---
Recipe Search

- [ ] Models
- [ ] Relations
- [ ] CRUD Methods for each model

#### Models
[This is a place where we defined our models for this API Server] (https://github.com/ChickenKyiv/recipe-api-only/tree/master/server/models)
- [ ] Allergy
- [ ] Course
- [ ] Cuisine
- [ ] Diet
- [ ] Holiday
- [ ] Day
- [ ] Department
- [ ] Ingredient
- [ ] Grocery
- [ ] Menu
- [ ] Nutritions
- [ ] Email
- [ ] Recipe

#### Relations
For example we'll review [Recipe Model schema](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json)
We'll find section, related to [relations](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json#L44-L99)
For each of this relation we should create a constant.
like
`export const RECIPE_ALLERGIES_LIST = 'RECIPE_ALLERGIES_LIST'`
- [ ] Recipe
- [ ] User
- [ ] Ingredient
- [ ] Grocery
- [ ] Department
- [ ] Day


#### CRUD Methods for each model


#### Additional Methods for each model
[User controller](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/controllers/user-controller.js)
Here you can find few methods, related to sign up process. You should create set of constants, for each of this methods
- [ ]

---
Groceristar

- [ ] Models
- [ ] Relations
- [ ] CRUD Methods for each model

#### Models
[This is a place where we defined our models for this API Server] (https://github.com/ChickenKyiv/recipe-api-only/tree/master/server/models)
- [ ] Allergy
- [ ] Course
- [ ] Cuisine
- [ ] Diet
- [ ] Holiday
- [ ] Day
- [ ] Department
- [ ] Ingredient
- [ ] Grocery
- [ ] Menu
- [ ] Nutritions
- [ ] Email
- [ ] Recipe

#### Relations
For example we'll review [Recipe Model schema](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json)
We'll find section, related to [relations](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json#L44-L99)
For each of this relation we should create a constant.
like
`export const RECIPE_ALLERGIES_LIST = 'RECIPE_ALLERGIES_LIST'`
- [ ] Recipe
- [ ] User
- [ ] Ingredient
- [ ] Grocery
- [ ] Department
- [ ] Day


#### CRUD Methods for each model


#### Additional Methods for each model
[User controller](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/controllers/user-controller.js)
Here you can find few methods, related to sign up process. You should create set of constants, for each of this methods
- [ ]


---

:princess:

#### [Groceristar][Favorites][methods]

By using names on methods from this [page](https://groceristar.gitbook.io/documentation/groceristar-website-methods-list/favorite-router)
In order to make it better, we'll create set of constants, each for a different method.

Example:
*Get All ingredients with status favorite*
will became `export const GET_ALL_FAVORITE_INGREDIENTS = "GET_ALL_FAVORITE_INGREDIENTS ";`

---


#### convert this documentation text into types

```
Login:

Users must first login by creating an account or with Google or Facebook
First time:

First-time users can follow the first-time link to navigate to the About Us page, which explains each page of the website
Creating a recipe:

Users can create a recipe by navigating to the Recipes page and clicking Create a Recipe
Enter a recipe name, ingredients, prep time, cook time and instructions, add an image if available, then click Submit to save the recipe to your recipe book
Searching for a recipe:

Search for a recipe by navigating to the Search page and entering a common language query for the recipe or type of recipe you're looking for
When you find the recipe you like you can either add it to your recipe book by clicking Add to Recipe Book or you can see a brief summary of the recipe by clicking More Info and later add it to your recipe book from the ensuing popup
Creating a meal:

Create a meal by navigating to the Meals page
Enter a meal name then select the recipes you want to include from your recipe book in the drop-down menu below
Select Save Meal to save your meal to the database
Plan a meal:

To plan a meal, navigate to the Plans page, where you'll see your planEats calendar
Click the day you wish to plan a meal, then select the meal you'd like to eat that day from the drop-down menu and click Select Meal Time
Select the time you wish to eat that meal from the drop-down menu, and click Lovely! to add it to your planEats calendar
Adding a meal to your Google Calendar:

If you'd like to add a meal to your Google Calendar, simply follow the steps listed in Plan a meal, but after you've selected a time for your meal, select Add to Google Calendar instead of Lovely! and the meal will be added to your planEats and Google Calendars
To view, edit or remove a planned meal from your planEats calendar:

To view a planned meal on your planEats calendar, click the meal on the calendar and the name of the meal and its time will display in a popup
To remove that meal from your calendar, click on the meal and select Delete Meal and it will no longer display on your calendar
To edit a planned meal, click on the meal and select Edit Meal then select a different meal and/or time and the updated meal plan will appear on your calendar
Planning a shopping list:

To view a shopping list for ingredients from your meal plan, navigate to the Shop page
Select a start and end date for the time period of planned meals you'll be shopping for, and the ingredients for those meals will automatically populate your shopping list
To add additional items to your list, enter the item in the input below and click the + button to add to your shopping list
Cooking a meal:

To view cooking instructions for your next meal, navigate to the Cook page, where you'll see the step by step directions for how to cook the next planned meal on your calendar
To search delivery options:

To search takeout options, click the No Time? button in the navigation bar on any page
Enter a full address or simply a zip code and click Search to pull up a list of nearby restaurants that deliver
To place an order and more, go directly to the restaurant's page on the takeout website EatStreet by clicking View on EatStreet~
```

---

#### [Groceristar][Grocery][methods]

By using names on methods from this [page](https://groceristar.github.io/documentation/docs/groceristar-website-methods-list/grocery-router/grocery-router.html)
In order to make it better, we'll create set of constants, each for a different method.

Example:
*Method that will Display Grocery List Data*
will became `export const GET_FULL_GROCERY_LIST = "GET_FULL_GROCERY_LIST";`

---

#### [Groceristar][Purchased][methods]

By using names on methods from this [page](https://groceristar.gitbook.io/documentation/groceristar-website-methods-list/purchased-router)
In order to make it better, we'll create set of constants, each for a different method.

Example:
*Method that toggle purchased item(ingredient)*
will became `export const TOGGLE_PURCHASED_ITEM = "TOGGLE_PURCHASED_ITEM ";`

---

#### [Groceristar][Ingredients][methods]

By using names on methods from this [page](https://groceristar.gitbook.io/documentation/groceristar-website-methods-list/ingredients-router)
In order to make it better, we'll create set of constants, each for a different method.

Example:
*Create or find at db new ingredient new ingredient and attach it to grocery list*
will became `export const FIND_OR_CREATE_AND_ATTACH_TO_GROCERY = "FIND_OR_CREATE_AND_ATTACH_TO_GROCERY";`

---

#### [Groceristar][Department][methods]

By using names on methods from this [page](https://groceristar.gitbook.io/documentation/groceristar-website-methods-list/department-router)
In order to make it better, we'll create set of constants, each for a different method.

Example:
*Get data, related to single department*
will became `export const GET_DEPARTMENT_DATA = "GET_DEPARTMENT_DATA";`

---

#### rapi

Weekly menus - recipes - remove recipe - change servings - changes at GL

Main Weekly Menu(created and stored by chief) Cloned to user section if user want to add some changes When user remove recipe, change servings, rearrange recipes order, replace recipe to another - Menu copied to user collection and weekly menu id updated from Main WM to Cloned WM

recipe /edit /delete /add /is complex /recipeIdByWeekday /nutrition /change image

/:id /directions

/directions/complex

/ingredients /ingredients/categorized

/meta prep cook serving

/mealdone/:id /add /delete /list возвращает айдишники рецептов

favorite /add /:id /delete /list возвращает айдишники рецептов

weekly menu /recipe/edit /recipe/delete /recipe/add

getRecipe - просто массив с одним рецептом getDirections getIngredients getCategorizedIngredients

Meta: prep cook serving mealDone favorites getMeta

isComplexRecipe - это getRecipeId by weekday

MealDone: /add /remove /all - возвращает айдишники рецептов

/current week - возвращает айдишники

/previous week - возвращает айдишники

all weeks - возвращает айдишники

get recipes per week

menu/ingredients/categories/yes menu/ingredients/categories/no - or menu/ingredients/

menu/ingredients/category/all - get all ingredients from weeklymenu, separated by categories menu/ingredients/category/id - get list of ingredients from one category (Note: without callculation

menu/ingredients/category/id/compress - get list of ingredients from one category calculated

GL / ing / cat / id / - get list of ingredients from one category with statuses 'purchased', 'to buy'

menu/ingredients/category/all/raw



---

#### [ChickenKyiv][types]

You'll convert Database table into pseudo-type code. Later it'll be converted in ReasonML language.

[This is a place where we defined our models for this API Server] (https://github.com/ChickenKyiv/recipe-api-only/tree/master/server/models)
So for each of this models we should move the main logic into a separated place. Example - looking at Allergy Model(Allergy.json)
```
{
  "name": "Allergy",
  "plural": "allergy",
  "base": "PersistedModel",
  "idInjection": true,
  "options": {
    "validateUpsert": true
  },
  "properties": {
    "name": {
      "type": "string",
      "required": true
    },

    "type": {
      "type": "string",
      "required": true
    }
  },
  "validations": [],
  "relations": {},
  "acls": [],
  "methods": {}
}
```
from that spefication we'll grab only properties and name. The end result is below:
```
const allergy = {
   name: "String",
   type: "String"
};
```


- [ ]  Allergy
- [ ]  Course
- [ ]  Cuisine
- [ ]  Diet
- [ ]  Holiday
- [ ]  Day
- [ ]  Department
- [ ]  Ingredient
- [ ]  Grocery
- [ ]  Menu
- [ ]  Nutritions
- [ ]  Email
- [ ]  Recipe
- [ ]  Account

---

#### [ChickenKyiv][account views]

```
       /account/login
	/account/logout
	/account/update
	/account/changePassword
	/account/delete
	/account/language
	/account/signup

	// todo
	/account/verify
	/account/recover
	/account/recover/password
	/account/changeEmail
```

for each of this paths, please create a constant, that will show us, what we have on that page.
example: `       /account/login` will looks like ` export const ACCOUNT_LOGIN_PAGE = "/account/login" `


---

#### [ChickenKyiv][relations]

#1

Please take a look at [ChickenKyiv DB Schema Diagram](https://chickenkyiv.gitbook.io/documentation/database-schemes/chickenkyiv-schema).
You'll need to create a set of JS constants. Each constant will be related to one relation.

For example we'll review [Recipe Model schema](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json)
We'll find section, related to [relations](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json#L44-L99)

So result of reviewing Recipe Table will be line, similar to this:
`export const RECIPE_ALLERGIES_LIST = 'RECIPE_ALLERGIES_LIST'`

List of Models with relations
- [ ] Recipe
- [ ] User
- [ ] Ingredient
- [ ] Grocery
- [ ] Department
- [ ] Day

This is link to a file, where you'll commit your changes: https://github.com/GroceriStar/types/blob/master/ChickenKyiv/api/relations.js
----


#### [ChickenKyiv Project][Main Task][Not finished]

[Link to current DB Shema](https://chickenkyiv.gitbook.io/documentation/database-schemes/chickenkyiv-schema)

- [ ] Models
- [ ] Relations
- [ ] CRUD Methods for each model

#### Models
[This is a place where we defined our models for this API Server] (https://github.com/ChickenKyiv/recipe-api-only/tree/master/server/models)
- [ ] Allergy
- [ ] Course
- [ ] Cuisine
- [ ] Diet
- [ ] Holiday
- [ ] Day
- [ ] Department
- [ ] Ingredient
- [ ] Grocery
- [ ] Menu
- [ ] Nutritions
- [ ] Email
- [ ] Recipe
- [ ] Account
```
  /account/login
	/account/logout
	/account/update
	/account/changePassword
	/account/delete
	/account/language
	/account/signup

	// todo
	/account/verify
	/account/recover
	/account/recover/password
	/account/changeEmail
  ```

#### Relations
For example we'll review [Recipe Model schema](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json)
We'll find section, related to [relations](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json#L44-L99)
For each of this relation we should create a constant.
like
`export const RECIPE_ALLERGIES_LIST = 'RECIPE_ALLERGIES_LIST'`
- [ ] Recipe
- [ ] User
- [ ] Ingredient
- [ ] Grocery
- [ ] Department
- [ ] Day


#### CRUD Methods for each model


#### Additional Methods for each model
[User controller](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/controllers/user-controller.js
[DBShema](https://chickenkyiv.gitbook.io/documentation/database-schemes/chickenkyiv-schema)

- [ ] Models
- [ ] Relations
- [ ] CRUD Methods for each model

#### Models
[This is a place where we defined our models for this API Server] (https://github.com/ChickenKyiv/recipe-api-only/tree/master/server/models)
- [ ] Allergy
- [ ] Course
- [ ] Cuisine
- [ ] Diet
- [ ] Holiday
- [ ] Day
- [ ] Department
- [ ] Ingredient
- [ ] Grocery
- [ ] Menu
- [ ] Nutritions
- [ ] Email
- [ ] Recipe
- [ ] Account
```
  /account/login
	/account/logout
	/account/update
	/account/changePassword
	/account/delete
	/account/language
	/account/signup

	// todo
	/account/verify
	/account/recover
	/account/recover/password
	/account/changeEmail
  ```

#### Relations
For example we'll review [Recipe Model schema](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json)
We'll find section, related to [relations](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/models/recipe.json#L44-L99)
For each of this relation we should create a constant.
like
`export const RECIPE_ALLERGIES_LIST = 'RECIPE_ALLERGIES_LIST'`
- [ ] Recipe
- [ ] User
- [ ] Ingredient
- [ ] Grocery
- [ ] Department
- [ ] Day


#### CRUD Methods for each model


#### Additional Methods for each model
[User controller](https://github.com/ChickenKyiv/recipe-api-only/blob/master/server/controllers/user-controller.js)
Here you can find few methods, related to sign up process. You should create set of constants, for each of this methods
- [ ]

https://chickenkyiv.gitbook.io/documentation/chickenkyiv-methods

CK API
https://github.com/ChickenKyiv/recipe-api-only/blob/master/RemoteMethods.md

https://chickenkyiv.gitbook.io/documentation/chickenkyiv-free-menu-release

)
Here you can find few methods, related to sign up process. You should create set of constants, for each of this methods
- [ ]

https://chickenkyiv.gitbook.io/documentation/chickenkyiv-methods

CK API
https://github.com/ChickenKyiv/recipe-api-only/blob/master/RemoteMethods.md

https://chickenkyiv.gitbook.io/documentation/chickenkyiv-free-menu-release

---


#### [Search API][methods]
Set of files, related to API methods, that we're using at our Search API Server

https://chickenkyiv.github.io/search-api-documentation/docs/db-schema

https://chickenkyiv.github.io/search-api-documentation/docs/database-tables-models/ingredients
https://chickenkyiv.github.io/search-api-documentation/docs/database-tables-models/recipe-names

https://chickenkyiv.github.io/search-api-documentation/docs/database-tables-models/attribute/allergy
https://chickenkyiv.github.io/search-api-documentation/docs/database-tables-models/attribute/diet
https://chickenkyiv.github.io/search-api-documentation/docs/database-tables-models/attribute/holiday
https://chickenkyiv.github.io/search-api-documentation/docs/database-tables-models/attribute/cuisine
https://chickenkyiv.github.io/search-api-documentation/docs/database-tables-models/attribute/course
