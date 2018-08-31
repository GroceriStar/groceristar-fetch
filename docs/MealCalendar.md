---
id: mealcalendar-project
title: Meal Calendar project
sidebar_label: Meal Calendar project
---

Meal Calendar repository: https://github.com/GroceriStar/calendar

---
### Get an array of dishes by day
```
var dishesOfTuesday = gf.getDishByDay('Tuesday');
// if you want a limit of dishes, you can pass as parameter:
// var dishesOfTuesdayLimit5 = gf.getDishByDay('Tuesday', 5);

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

---
### Get an array of dishes by month
```
var dishesOfMonth3 = gf.getDishByMonth(3);
Obs: for now, 5 is the max number of month

example
[
  {
    "id": "week9",
    "recipes": [
      {
        "tag": "pork",
        "text": "Grilled Pork Chops with Twice Baked Potatoes, Green Beans Strawberries",
        "day": "Sunday"
      }
    ]
  }
]
```
