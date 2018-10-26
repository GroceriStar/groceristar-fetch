---
id: searchapi-project
title: SearchAPI project
sidebar_label: SearchAPI project
---

#### Search API repository: https://github.com/ChickenKyiv/recipe-search-api
---

#### Importing Search module
```
const { search } = require('@groceristar/groceristar-fetch');
// or 
import { search } from '@groceristar/groceristar-fetch';
```

---
#### Get an array of Allergies

```
var allergies = search.getAttribute('allergies');
```

Return
```
[
  "Gluten-Free",
  "Peanut-Free",
  "Seafood-Free"
]
```

---
#### Get an array of Courses
```
var courses = search.getAttribute('courses');
```
Return
```
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
var cuisines = search.getAttribute('cuisines');
```


---
#### Get an array of Diets
```
var diets = search.getAttribute('diets');
```

Return
```
[
  "Lacto vegetarian",
  "Ovo vegetarian",
  "Pescetarian"
]
```


---
#### Get an array of Holidays
```
var holidays = search.getAttribute('holidays');
```


---
#### Get an array of Ingredients (Search part)
```
var ingredients1 = search.getIngredients1();
```


---

#### Get an array of Ingredients (Search part)
```
var ingredients2 = search.getIngredients2();
```


---
#### Get an array of Measurements
```
var measurements = search.getMeasurements();

// returns array of measurements object containing singular, plural and abbreviation
```
Return
```
{
    "singular": "gram",
    "plural": "grams",
    "abbreviation": "g"
}
```
