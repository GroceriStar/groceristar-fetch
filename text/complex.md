```
let Ingredients  = require(path.resolve(__dirname, 'ingredients'));
let Groceries    = require(path.resolve(__dirname, 'grocery'));
let Departments  = require(path.resolve(__dirname, 'departments'));
let Users        = require(path.resolve(__dirname, 'users'));
```

i also need another one object, related to users.
like we have a big number of Groceries
but all of them should be assigned with admin user.
Can you do it?
like one method that calling .... and creating users with ids and adding to user ids also an ids of groceries
(this is actually our full database for groceristar right now)

---

Search version of big object

files that we're using:
```
let Attribute = require(path.resolve(__dirname, 'attributes'));

//@TODO move that to attribute wrapper
let Allergy    = require(path.resolve(__dirname, 'allergy'));
let Course     = require(path.resolve(__dirname, 'courses'));
let Cuisine    = require(path.resolve(__dirname, 'cuisines'));
let Diet       = require(path.resolve(__dirname, 'diets'));
let Holiday    = require(path.resolve(__dirname, 'holidays'));



let Recipe    = require(path.resolve(__dirname, 'recipes'));
let Ingredient= require(path.resolve(__dirname, 'ingredients'));

let Departments  = require(path.resolve(__dirname, 'departments'));
```

attribute is actually united thing, that includes allergy, course, cuisine, diet, holidays
you can use `_.unite` or `_.merge`  - don't remember which is works

so recipe has ingredients and attributes inside. and each ingredient has department.

----
```
let Users        = require(path.resolve(__dirname, 'users'));
let Recipes      = require(path.resolve(__dirname, 'recipes'));
let Menus        = require(path.resolve(__dirname, 'menus'));

and Ingredients (we don't need departments for this actuall case)
```
---


https://carbon.now.sh/?bg=rgba(29%2C70%2C103%2C1)&t=3024-night&wt=none&l=application%2Fjson&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=18px&lh=158%25&si=false&es=2x&wm=false
