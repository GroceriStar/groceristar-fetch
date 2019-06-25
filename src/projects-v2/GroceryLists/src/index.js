import * as _ from 'lodash'

import {
  departments,
  groceries,
  ingredients,
  users
} from '@files'

// const fs = require('fs')

import {
  __find,
  // __l,
  __generateId
} from 'utils'



// @TODO can we update our methods - but we'll need to go step by step,
// don't worry, will update @hirdbluebird
// because these methods used in our react projects.
// so I propose do it very carefully
const getIngredients = () => {
  return ingredients
}

const getGrocery = function () {
  return groceries
}



const getDepartments = () => {
  return departments
}

const getGroceryById = (id) => {
  return [ _.find(groceries, ['id', id]) ]
}

// @TODO do we need it?
const filterGroceriesByName = (groceries, name) => _.filter(groceries, (item) => {
  return item.name === name
})

const getGroceryByName = (name) => {
  return filterGroceriesByName(groceries, name)
}

// @TODO we spot the same problem twice. It's a regression error.
// we need to address that. And i think it's a good candidate for test coverage + adding raven.
// @TODO second issue - i don't like that. looks not fancy.
const getGroceryByNameWithDepAndIng = (name) => {
  let list = getGrocery()
  // __l(grocerieszzz);

  // @TODO maybe we shall move this function away. OR have another method, not getGrocery, that will repack things as we need it here....
  // we did few times a similar manipulations
  // for example, first step will be to use this: getGroceryByName
  // let newGrocerieszzz = filterGroceriesByName(groceries, name)

  let zizua = getGroceryByName(name);
  let result = []
  zizua['departments'].forEach(  function (department) {
  //
  //
      result.push({
        'department': department,
        'ingredients': getAllIngredientsByOneDepartment(department)
      })
    })
    return result
  // return NEW_grocerieszzz;
  // console.log(NEW_grocerieszzz);

  // -----

  // let result = []
  // maybe instead of getting all groceries from getGrocery. because...
  // it's just a bad turn around @TODO change that.
  // NEW_grocerieszzz[0]['departments'].forEach(
  //   function (department) {
  //     // @TODO add let ingredients = const getAllIngredientsByOneDepartment(department)
  //     result.push({
  //       'department': department,
  //       'ingredients': getAllIngredientsByOneDepartment(department)
  //     })
  //   })
  // return result
}

// Where we're using this methods?
// -----------------------------------

const getGroceriesWithDepIngKey = () => {
  // let result = []
  let result = _.map(groceries, function (grocery) {
    // @TODO change variable name
    // grocery.id = __generateId()
    // grocery.departments = groceryDepIng;
    return getGroceryByNameWithDepAndIngKey(grocery.name)
  })
  return result

  // let departmentId = __generateId()
  // return result
  // return {
  //   'name': 'name',
  //   'groceryId': 'groceryId',
  //   'messages': {},
  //   'ingridients': {},
  //   'departments': {
  //     'id': departmentId,
  //     'name': '',
  //     'type': '',
  //     'ingredients': {}
  //   }
  // }
}

const getGroceryByNameWithDepAndIngKey = (name) => {
  let groceryId = __generateId()

  let grocery = filterGroceriesByName(groceries, name)

  // @TODO this is not a clean turn around for this method
  grocery[0]['departments'].forEach(
    function (department) {
      let departmentId = __generateId()
      let departmentType = ''
      // @TODO i don't like that we're searching for things by names,
      // we need to replace it later with separated methods that will assign items between files via id
      let dep = _.find(departments, (o) => {
        return o.name === department
      })
      if (dep != undefined) {
        departmentType = dep.type
      }
      let ingredients = getAllIngredientsByOneDepartmentKey(department, groceryId)
      result.push({
        'id': departmentId,
        'name': department,
        'type': departmentType,
        'ingredients': ingredients
      })
    })

  // return {
  //   'name': name,
  //   'groceryId': groceryId,
  //   'messages': {},
  //   'departments': []
  // }
}

const getAllIngredientsByOneDepartmentKey = (department, groceryId) => {
  let ingredients = getIngredients()

  // @TODO it looks like a separated method for me
  // var ingredientsList =
  //   _.filter(ingredients, function (item) {
  //     return item.department === department
  //   })

  let ingredientsList = filterIngrListByDep(ingredients, department)

  return _.map(ingredientsList, item => {
    let ingredientId = __generateId()

    return [
      ingredientId,
      item.name,
      `/del/ing/${ingredientId}/${groceryId}`
    ]
  })
}

// -----------------------------------
// @TODO WTF. Looks so unclear. shitcode. but yeah - with all features from ES6
const filterIngrListByDep = (ingredients, department) => _.filter(ingredients, item => {
  return item.department === department
})

// strange turnaround. @TODO can we
const getGroceryListsWithCountDepartments = () => {
  return _.map(groceries, item => {
    const object = {
      id: item.id,
      name: item.name,
      departmentsCount: item.departments.length
    }
    delete object.departments // @TODO ????
    return object
  })
}

// i assume this cannot work, because we don't have groceries variable... @TODO
const getAllDepartments = () => {
  const departments = []

  // @TODO this is an example what should be updated. loooooks so bad and unreadable
  _.forEach(_.range(0, groceries.length), value =>
    departments.push(..._.map(groceries[value]['departments']))
  )
  return departments
}

const getAllIngredientsByOneDepartment = (department) => {
  let ingredients = getIngredients()

  let ingredientsList = filterIngrListByDep(ingredients, department)

  return _.map(ingredientsList, 'name')
}

const getCountIngOfDepartment = () => {
  // let result = []
  let departments = getDepartments()
  let result = _.map(departments, function (department) {
    let ingredientsByOneDepartment = getAllIngredientsByOneDepartment(department.name)
    return {
      ...department,
      countIngredients: ingredientsByOneDepartment.length
    }
  })

  return result
}

const getKeyArrayDepAndIng = () => {
  let keys = []

  // @TODO does this functions doing a similar thing or not?
  let departments = getAllDepartmentsWithId()
  let ingredients = getAllIngredientsWithId()

  // _.map(ingredients, ingredient => {
  //   _.forEach(departments,function(department){
  //     if(ingredient.department === department.name) {
  //       keys.push({
  //       [department.key] : ingredient.key,
  //       })
  //     }
  //   })
  //   return;
  // })
  _.forEach(departments, function (department) {
    _.forEach(ingredients, function (ingredient) {
      // @TODO can be redo later with lodash methods
      if (ingredient.department === department.name) {
        keys.push({
          [department.key]: ingredient.key
        })
      }
    })
  })

  return keys
}
// --------------------------------------------

const getAllDepartmentList = () => {
  return _.map(departments, item => ({
    key: __generateId(),
    departmentName: item
  }))
}

const getAllIngredientsWithId = () => {
  // let result = []
  // let ingredients = getIngredients()


  let result = getResult(ingredients)

  return result
}

// @TODO we need to figure out why we have this method and getAllDepartmentList
// i assume we using them in different react projects.
const getAllDepartmentsWithId = () => {
  return getResult(departments)
}
// ------------------------------

// @TODO update this version.
// I don't like it. For me this line is shit
// and i don;t like this name as well
const getResult = (property) => _.map(property, (p) => ({
  key: __generateId(),
  ...p
}))

const getAllIngredientsList = (department) => {
  const ingredients = this.getAllIngredientsByOneDepartment(department)

  return ingredients.map(item => ({
    key: __generateId(),
    name: item,
    isChecked: false,
    departmentID: __generateId(),
    order: 0
  }))
}

const getAllGrocery = () => {
  return _.map(groceries, item => ({
    key: __generateId(),
    ...item
  }))
}

const getAllGroceryDepartment = (departmentArray) => {
  const departmentArrayObject = departmentArray.map(item => ({
    key: __generateId(),
    departmentName: item,
    isChecked: false
  }))

  return departmentArrayObject
}

const createNewGroceryList = (newDepartment) => {
  const nameExists = _.find(
    groceries,
    item => item.name === newDepartment.name
  )
  !nameExists && newGroceryList(newDepartment) // @TODO i don't like this "creature". just make it with simple if
}

// TODO OMG, this method looks so sad...
const getGroceryListsByDepartment = (department) => {
  let groceryList = []
  if (department) {
    // what we're doing? camelCase? explain @TODO
    const capitalisedDepartment = department[0].toUpperCase() + department.toLowerCase().substr(1)
    groceries.map(grocery => {
      if (grocery.departments.includes(department.toLowerCase()) ||
        grocery.departments.includes(department.toUpperCase()) ||
        grocery.departments.includes(capitalisedDepartment)
      ) {
        groceryList.push({
          name: grocery.name,
          id: grocery.id
        })
      }
    })
    return groceryList
  }
  return groceryList
}

// @TODO should work now.
// const newGroceryList = (newDepartment) => {
  // const groceriesFile = fs.createWriteStream('./data/Grocery/grocery.json')
  // const newGrocery = [ ...groceries, newDepartment ]

  // groceriesFile.write(JSON.stringify(newGrocery, null, 2))
  // groceries = newGrocery
// }

export {
  getIngredients,
  // getGrocery,
  // getUsers,
  getDepartments,
  getGroceryById,
  getGroceryByName,
  getGroceryByNameWithDepAndIng,
  getGroceryListsWithCountDepartments,
  getAllDepartments,
  getAllIngredientsByOneDepartment,
  getAllDepartmentList,
  getAllIngredientsList,
  getAllGrocery,
  getAllGroceryDepartment,
  createNewGroceryList,
  getGroceryListsByDepartment,
  // newGroceryList,
  getResult,
  getAllIngredientsByOneDepartmentKey,
  getGroceryByNameWithDepAndIngKey,
  getGroceriesWithDepIngKey,
  getAllIngredientsWithId,
  getKeyArrayDepAndIng,
  getAllDepartmentsWithId,
  getCountIngOfDepartment,
  __find
}
