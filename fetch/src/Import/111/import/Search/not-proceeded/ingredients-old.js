
let tableName = 'Ingredient'

// this indredients haven't nice departments, so i attach them only to department[0]
const get = (departmentId) => {
  let data = []
  // console.log(departmentId)
  data[0] = [
    {
      name: 'medium russet potatoes, sliced into sticks',
      departmentId: departmentId
    },
    {
      name: 'tablespoons vegetable oil, divided',
      departmentId: departmentId
    },
    {
      name: 'salt & freshly ground black pepper, to taste',
      departmentId: departmentId
    },
    {
      name: 'scallions',
      departmentId: departmentId
    },
    {
      name: 'ounces cheese curds or 6 ounces fresh mozzarella cheese, diced',
      departmentId: departmentId
    }
  ]
  // console.log(data);
  //
  data[1] = [
    {
      name: '1 box Pillsbury™ refrigerated pie crusts, softened as directed on box',
      departmentId: departmentId
    },
    {
      name: '6 cups thinly sliced, peeled apples (6 medium)',
      departmentId: departmentId
    },
    {
      name: '3/4 cup sugar',
      departmentId: departmentId
    },
    {
      name: '2 tablespoons all-purpose flour',
      departmentId: departmentId
    },
    {
      name: '3/4 teaspoon ground cinnamon',
      departmentId: departmentId
    },
    {
      name: '1/4 teaspoon salt',
      departmentId: departmentId
    },
    {
      name: '1/8 teaspoon ground nutmeg',
      departmentId: departmentId
    },
    {
      name: '1 tablespoon lemon juice',
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
      name: 'dried Italian salad dressing mix',
      departmentId: departmentId
    },
    {
      name: 'dry ranch dressing mix',
      departmentId: departmentId
    },
    {
      name: 'water',
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
    }
  ]

  return data
}

module.exports.get = get
module.exports.tableName = tableName
