
let table_name = 'Ingredient'

// this indredients haven't nice departments, so i attach them only to department[0]
const get = (department_id) => {
    let data = [];
    // console.log(department_id)
    data[0] = [
      {
        name: "potatoes",
        departmentId: department_id
      },
      {
        name: "vegetable oil",
        departmentId: department_id
      },
      {
        name: "black pepper",
        departmentId: department_id
      },
      {
        name: "scallions",
        departmentId: department_id
      },
      {
        name: "mozzarella cheese",
        departmentId: department_id
      },
      {
        name: "water",
        departmentId : department_id
      }
    ];
    // console.log(data);
    //
    data[1] = [
      {
        name: "Pillsbury",
        departmentId: department_id
      },
      {
        name: "apple",
        departmentId: department_id
      },
      {
        name: "sugar",
        departmentId: department_id
      },
      {
        name: "flour",
        departmentId: department_id
      },
      {
        name: "cinnamon",
        departmentId: department_id
      },
      {
        name: "salt",
        departmentId: department_id
      },
      {
        name: "nutmeg",
        departmentId: department_id
      },
      {
        name: "lemon juice",
        departmentId: department_id
      },
    ];

    data[2] = [
      {
        name : "apple",
        departmentId : department_id
      },
      {
        name : "banana",
        departmentId : department_id
      },
      {
        name : "orange",
        departmentId : department_id
      },
      {
        name : "grapes",
        departmentId : department_id
      },
      {
        name: "potatoes",
        departmentId: department_id
      },
    ];

    data[3] = [
      {
        name: "beef roast",
        departmentId : department_id
      },
      {
        name: "brown gravy mix",
        departmentId : department_id
      },
      {
        name: "Italian salad dressing mix",
        departmentId : department_id
      },
      {
        name: "dry ranch dressing mix",
        departmentId : department_id
      },
      {
        name: "water",
        departmentId : department_id
      },
      {
        name : "grapes",
        departmentId : department_id
      },
      {
        name: "mozzarella cheese",
        departmentId: department_id
      },
      {
        name: "sugar",
        departmentId: department_id
      }
    ];

    data[4] = [
			{
	  		name: "black pepper",
        departmentId: department_id
	  	},
	  	{
	      name: "extra-virgin olive oil",
	      departmentId: department_id
	    },
      {
        name: "kosher salt",
        departmentId: department_id
      },
      {
        name: "kosher salt and freshly ground black",
        departmentId: department_id
      },
      {
        name: "soy sauce",
        departmentId: department_id
      },
      {
        name: "oyster sauce",
        departmentId: department_id
      },
      {
        name: "sesame oil",
        departmentId: department_id
      },
      {
        name: "large eggs",
        departmentId: department_id
      },
      {
        name: "scallions",
        departmentId: department_id
      }

     ];

  	return data;

};

module.exports.get        = get;
module.exports.table_name = table_name;
