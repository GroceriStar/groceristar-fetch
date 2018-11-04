---
id: chickenkyiv-project
title: Methods, related to ChickenKyiv project
sidebar_label: ChickenKyiv project
---

#### Importing ChickenKyiv module
```
const { chickenKyiv } = require('@groceristar/groceristar-fetch');
// or 
import { chickenKyiv } from '@groceristar/groceristar-fetch';
```

---
#### Get an array of Ingredients3
```
var ingredients3 = chickenKyiv.getIngredients3();
```

Result
```
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
var menu = chickenKyiv.getMenu();
```

Result
```
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
var recipe = chickenKyiv.getRecipe();
```

Result
```
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
var nutritions1 = chickenKyiv.getNutritions1();
```

Return
```
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
var nutritions2 = chickenKyiv.getNutritions2();
```

Return
```
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
var mealCalendar = chickenKyiv.getMealCalendar();
```

Return
```
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

---
### Get a recipe object by name
```
var recipe = gf.getRecipeByTitle('Lemonade');
```

Return
```
{
    "title": "Lemonade",
    "directions": [
      "In a small saucepan bring sugar and water to a boil, add peel and simmer for 5 minutes",
      "Remove from heat, bring to room temperature and strain out peel",
      "To a 2 quart pitcher add lemon juice, 1/2 cup of the syrup, and 5 cups water",
      "Stir, taste, and adjust ratio of water and syrup as desired",
      "Serve over ice, garnished with a mint sprig"
    ],
    "ingredients": [
      "1 cup sugar",
      "1 cup water",
      "6 lemons, juiced; peel one and cut the peel into strips",
      "mint and lemon slices for garnish"
    ],
    "prep_time": 0,
    "total_time": 0,
    "recipe_yield": 4,
    "img": "",
    "url": "Food Network"
}
  ```

---
### Get a random recipe object
```
var recipe = gf.getRandomRecipe();
```

  Return
  ```
  {
    "title": "Pumpkin chocolate whoopie pies",
    "directions": [
    "Preheat oven to 350 degrees, with racks in upper and lower thirds",
    "In a medium bowl, whisk together flour, pumpkin pie spice, baking powder, and salt",
    "In a large bowl, whisk together eggs, pumpkin puree, brown sugar, melted butter, and 1/4 cup heavy cream",
    "Add flour mixture to egg mixture and whisk just until combined",
    "Drop dough in 2-tablespoon mounds, 1 inch apart, onto two parchment-lined baking sheets",
    "Bake until tops of cookies spring back when gently pressed, about 14 minutes, rotating sheets halfway through",
    "Transfer to wire racks and let cool completely",
    "In a medium bowl, using an electric mixer, beat room temperature butter, 1/2 cup cream, cocoa powder, and confectioners' sugar on medium-high until fluffy, 2 minutes",
    "Spread filling on flat side of half the cookies; sandwich with remaining cookies",
    "To serve, dust with confectioners' sugar"
  ],
    "ingredients": [
    "2 cup all-purpose flour, (spooned and leveled)",
    "2 teaspoon pumpkin pie spice",
    "1 1/2 teaspoon baking powder",
    "1/4 teaspoon fine salt",
    "2 eggs",
    "3/4 cup pure pumpkin puree",
    "1 cup light-brown sugar, packed",
    "1/3 cup unsalted butter, melted, plus 1/4 cup, room temperature",
    "3/4 cup heavy cream",
    "2/3 cup unsweetened cocoa powder",
    "1 3/4 cup confectioners' sugar, plus more for serving"
  ],
    "prep_time": 900,
    "total_time": 840,
    "recipe_yield": 11,
    "img": "",
    "url": "Everyday Food Nov 2011"
  }
    ```
