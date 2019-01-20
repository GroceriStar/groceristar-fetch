List of methods that we have:


- getIngredients3
- getMenu
- getRecipe
- getRecipeByTitle
- getRandomRecipe
- getFirstFiveRecipes
- getFiveRandomIngredients
- getNutritions1
- getNutritions2
- getNRecipes
- getDepartments
- getUsers


---

Separate ingredients by departments.
So we have a |Departments array|
We have an |Ingredients array|
I need to have a method that will receive a dep_id
or move and will return to me this stuff.

Put this methods into CK.

maybe we can use some current methods.
i just don't remember if we have something similar here....

```
let result = _.map(recipes, item => ({
  key: uuidv1(),
  recipe: item
}))
```

```
const result = _.map(data, ({
  value,
  label,
  disabled
}) => ({
  key: uuidv1(),
  value,
  label,
  disabled: (disabled) ? disabled : false
}))

return result;
```



```


const get = (departments) => {

    var data     = [
			{
	  		name: "Asparagus",
	      departmentId: departments[0].id
	  	},
	  	{
	      name: "Broccoli",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Carrots",
	      departmentId: departments[0].id
	  	},
	  	{
	      name: "Cauliflower",
	      departmentId: departments[0].id
	  	},
	    {
	      name: "Celery",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Corn",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Cucumbers",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Lettuce / Greens",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Mushrooms",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Onions",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Peppers",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Potatoes",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Spinach",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Squash",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Zucchini",
	      departmentId: departments[0].id
	    },
	    {
	      name: "Tomatoes*",
	      departmentId: departments[0].id
	    },

	    /////


	    {
	      name: "BBQ sauce",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Gravy",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Honey",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Hot sauce",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Jam / Jelly / Preserves",
	      departmentId: departments[1].id
	    },
	    {
	      name: "Ketchup / Mustard",
	      departmentId: departments[1].id
	    }
          ];

       	return data;

     };


```
