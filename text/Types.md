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
