---
id: searchapi-project
title: SearchAPI project
sidebar_label: SearchAPI project
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
