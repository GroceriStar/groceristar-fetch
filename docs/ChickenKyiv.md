---
id: chickenkyiv-project
title: ChickenKyiv project
sidebar_label: ChickenKyiv project
---

---
#### Get an array of Ingredients3
```
var ingredients3 = gf.getIngredients3();

example
[
    {
      "name": "medium russet potatoes, sliced into sticks",
      "departmentId": "department_id"
    },
    {
      "name": "tablespoons vegetable oil, divided",
      "departmentId": "department_id"
    },
    {
      "name": "salt & freshly ground black pepper, to taste",
      "departmentId": "department_id"
    }
]
```


---
#### Get an array of Menu
```
var menu = gf.getMenu();

example
[{
    "title": "Weekly menu #9",
    "date": "new Date",
    "description": "string",
    "notes": "This is notes6"
  },
  {
    "title": "Weekly menu #6",
    "date": "new Date",
    "description": "string1",
    "notes": "This is notes5"
}]
```


---
#### Get an array of Recipe
```
var recipe = gf.getRecipe();

example
[{

    "title": "Crock Pot Roast12",
    "directions": [
      "Place beef roast in crock pot.",
      "Mix the dried mixes together in a bowl and sprinkle over the roast.",
      "Pour the water around the roast.",
      "Cook on low for 7-9 hours."
    ],
    "prep_time": "30min",
    "total_time": "3h",
    "recipe_yield": "8",
    "img": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
    "url": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"

}]
```


---
#### Get an array of nutritions1
```
var nutritions1 = gf.getNutritions1();

example
[
 {
   "calories"  : 450,
   "fat_calories" : 430,
   "total_fat" : 48,
   "sat_fat"
 }
 ]
```


---
#### Get an array of nutritions2
```
var nutritions2 = gf.getNutritions2();

example
[{
         "type": "Vitamins",
         "items": [
           "Vitamin A (retinol)",
           "Vitamin B1 (thiamin)"
           ]
}]
```

---
### Get an array of meal calendar
```
var mealCalendar = gf.getMealCalendar();

example
[
  {
    "id": "week1",
    "recipes": [
      {
        "tag": "steak",
        "text": "Grilled Honey & Ginger Marinated Flank Steaks with Mashed Potatoes, Tossed Salad and Rolls",
        "day": "Sunday"
      }
    ]
  }
]
```
