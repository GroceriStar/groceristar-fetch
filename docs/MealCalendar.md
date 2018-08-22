---
id: mealcalendar-project
title: Meal Calendar project
sidebar_label: Meal Calendar project
---

---
### Get an array of dishes by day
```
var dishesOfTuesday = gf.getDishByDay('Tuesday');

example
[
  {
    "id": "week1",
    "recipe": {
      "tag": "chicken",
      "text": "Slow Cooker Cola Chicken with Leftover Mashed Potato Puff, Green Beans and Peaches",
      "day": "Tuesday"
    }
  }
]
```


---
### Get an array of dishes by week
```
var dishesOfWeek5 = gf.getDishByWeek('week5');

example
[
  {
    "id": "week5",
    "recipes": [
      {
        "tag": "pork",
        "text": "Ham with Cheesy Potato Casserole, Green Bean Casserole, Deviled Eggs and Rolls",
        "day": "Sunday"
      }
    ]
  }
]
```
