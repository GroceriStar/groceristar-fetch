
let tableName = 'Ingredient'

// this indredients haven't nice departments, so i attach them only to department[0]
const get = (departmentId) => {
  let data = []
  // console.log(departmentId)
  data[0] = [
    {
      name: 'potatoes',
      departmentId: departmentId
    },
    {
      name: 'vegetable oil',
      departmentId: departmentId
    },
    {
      name: 'black pepper',
      departmentId: departmentId
    },
    {
      name: 'scallions',
      departmentId: departmentId
    },
    {
      name: 'mozzarella cheese',
      departmentId: departmentId
    },
    {
      name: 'water',
      departmentId: departmentId
    }
  ]
  // console.log(data);
  //
  data[1] = [
    {
      name: 'Pillsbury',
      departmentId: departmentId
    },
    {
      name: 'apple',
      departmentId: departmentId
    },
    {
      name: 'sugar',
      departmentId: departmentId
    },
    {
      name: 'flour',
      departmentId: departmentId
    },
    {
      name: 'cinnamon',
      departmentId: departmentId
    },
    {
      name: 'salt',
      departmentId: departmentId
    },
    {
      name: 'nutmeg',
      departmentId: departmentId
    },
    {
      name: 'lemon juice',
      departmentId: departmentId
    }
  ]

  data[2] = [
    {
      name: 'apple',
      departmentId: departmentId
    },
    {
      name: 'banana',
      departmentId: departmentId
    },
    {
      name: 'orange',
      departmentId: departmentId
    },
    {
      name: 'grapes',
      departmentId: departmentId
    },
    {
      name: 'potatoes',
      departmentId: departmentId
    }
  ]

  data[3] = [
    {
      name: 'beef roast',
      departmentId: departmentId
    },
    {
      name: 'brown gravy mix',
      departmentId: departmentId
    },
    {
      name: 'Italian salad dressing mix',
      departmentId: departmentId
    },
    {
      name: 'dry ranch dressing mix',
      departmentId: departmentId
    },
    {
      name: 'water',
      departmentId: departmentId
    },
    {
      name: 'grapes',
      departmentId: departmentId
    },
    {
      name: 'mozzarella cheese',
      departmentId: departmentId
    },
    {
      name: 'sugar',
      departmentId: departmentId
    }
  ]

  data[4] = [
    {
      name: 'black pepper',
      departmentId: departmentId
    },
    {
      name: 'extra-virgin olive oil',
      departmentId: departmentId
    },
    {
      name: 'kosher salt',
      departmentId: departmentId
    },
    {
      name: 'kosher salt and freshly ground black',
      departmentId: departmentId
    },
    {
      name: 'soy sauce',
      departmentId: departmentId
    },
    {
      name: 'oyster sauce',
      departmentId: departmentId
    },
    {
      name: 'sesame oil',
      departmentId: departmentId
    },
    {
      name: 'large eggs',
      departmentId: departmentId
    },
    {
      name: 'scallions',
      departmentId: departmentId
    }

  ]

  return data
}

module.exports.get = get
module.exports.tableName = tableName
