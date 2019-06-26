var _this = this;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import * as _ from 'lodash';
import { departments, groceries, ingredients, users } from "./files"; // const fs = require('fs')

import { __find, __generateId } from "./utils"; // @TODO can we update our methods - but we'll need to go step by step,
// don't worry, will update @hirdbluebird
// because these methods used in our react projects.
// so I propose do it very carefully

var getIngredients = function getIngredients() {
  return ingredients;
};

var getGrocery = function getGrocery() {
  return groceries;
};

var getDepartments = function getDepartments() {
  return departments;
};

var getGroceryById = function getGroceryById(id) {
  return [_.find(groceries, ['id', id])];
}; // @TODO do we need it?


var filterGroceriesByName = function filterGroceriesByName(groceries, name) {
  return _.filter(groceries, function (item) {
    return item.name === name;
  });
};

var getGroceryByName = function getGroceryByName(name) {
  return filterGroceriesByName(groceries, name);
}; // @TODO we spot the same problem twice. It's a regression error.
// we need to address that. And i think it's a good candidate for test coverage + adding raven.
// @TODO second issue - i don't like that. looks not fancy.


var getGroceryByNameWithDepAndIng = function getGroceryByNameWithDepAndIng(name) {
  var list = getGrocery(); // __l(grocerieszzz);
  // @TODO maybe we shall move this function away. OR have another method, not getGrocery, that will repack things as we need it here....
  // we did few times a similar manipulations
  // for example, first step will be to use this: getGroceryByName
  // let newGrocerieszzz = filterGroceriesByName(groceries, name)

  var zizua = getGroceryByName(name);
  var result = [];
  zizua['departments'].forEach(function (department) {
    //
    //
    result.push({
      'department': department,
      'ingredients': getAllIngredientsByOneDepartment(department)
    });
  });
  return result; // return NEW_grocerieszzz;
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
}; // Where we're using this methods?
// -----------------------------------


var getGroceriesWithDepIngKey = function getGroceriesWithDepIngKey() {
  // let result = []
  var result = _.map(groceries, function (grocery) {
    // @TODO change variable name
    // grocery.id = __generateId()
    // grocery.departments = groceryDepIng;
    return getGroceryByNameWithDepAndIngKey(grocery.name);
  });

  return result; // let departmentId = __generateId()
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
};

var getGroceryByNameWithDepAndIngKey = function getGroceryByNameWithDepAndIngKey(name) {
  var groceryId = __generateId();

  var grocery = filterGroceriesByName(groceries, name); // @TODO this is not a clean turn around for this method

  grocery[0]['departments'].forEach(function (department) {
    var departmentId = __generateId();

    var departmentType = ''; // @TODO i don't like that we're searching for things by names,
    // we need to replace it later with separated methods that will assign items between files via id

    var dep = _.find(departments, function (o) {
      return o.name === department;
    });

    if (dep != undefined) {
      departmentType = dep.type;
    }

    var ingredients = getAllIngredientsByOneDepartmentKey(department, groceryId);
    result.push({
      'id': departmentId,
      'name': department,
      'type': departmentType,
      'ingredients': ingredients
    });
  }); // return {
  //   'name': name,
  //   'groceryId': groceryId,
  //   'messages': {},
  //   'departments': []
  // }
};

var getAllIngredientsByOneDepartmentKey = function getAllIngredientsByOneDepartmentKey(department, groceryId) {
  var ingredients = getIngredients(); // @TODO it looks like a separated method for me
  // var ingredientsList =
  //   _.filter(ingredients, function (item) {
  //     return item.department === department
  //   })

  var ingredientsList = filterIngrListByDep(ingredients, department);
  return _.map(ingredientsList, function (item) {
    var ingredientId = __generateId();

    return [ingredientId, item.name, "/del/ing/".concat(ingredientId, "/").concat(groceryId)];
  });
}; // -----------------------------------
// @TODO WTF. Looks so unclear. shitcode. but yeah - with all features from ES6


var filterIngrListByDep = function filterIngrListByDep(ingredients, department) {
  return _.filter(ingredients, function (item) {
    return item.department === department;
  });
}; // strange turnaround. @TODO can we


var getGroceryListsWithCountDepartments = function getGroceryListsWithCountDepartments() {
  return _.map(groceries, function (item) {
    var object = {
      id: item.id,
      name: item.name,
      departmentsCount: item.departments.length
    };
    delete object.departments; // @TODO ????

    return object;
  });
}; // i assume this cannot work, because we don't have groceries variable... @TODO


var getAllDepartments = function getAllDepartments() {
  var departments = []; // @TODO this is an example what should be updated. loooooks so bad and unreadable

  _.forEach(_.range(0, groceries.length), function (value) {
    return departments.push.apply(departments, _toConsumableArray(_.map(groceries[value]['departments'])));
  });

  return departments;
};

var getAllIngredientsByOneDepartment = function getAllIngredientsByOneDepartment(department) {
  var ingredients = getIngredients();
  var ingredientsList = filterIngrListByDep(ingredients, department);
  return _.map(ingredientsList, 'name');
};

var getCountIngOfDepartment = function getCountIngOfDepartment() {
  // let result = []
  var departments = getDepartments();

  var result = _.map(departments, function (department) {
    var ingredientsByOneDepartment = getAllIngredientsByOneDepartment(department.name);
    return _objectSpread({}, department, {
      countIngredients: ingredientsByOneDepartment.length
    });
  });

  return result;
};

var getKeyArrayDepAndIng = function getKeyArrayDepAndIng() {
  var keys = []; // @TODO does this functions doing a similar thing or not?

  var departments = getAllDepartmentsWithId();
  var ingredients = getAllIngredientsWithId(); // _.map(ingredients, ingredient => {
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
        keys.push(_defineProperty({}, department.key, ingredient.key));
      }
    });
  });

  return keys;
}; // --------------------------------------------


var getAllDepartmentList = function getAllDepartmentList() {
  return _.map(departments, function (item) {
    return {
      key: __generateId(),
      departmentName: item
    };
  });
};

var getAllIngredientsWithId = function getAllIngredientsWithId() {
  // let result = []
  // let ingredients = getIngredients()
  var result = getResult(ingredients);
  return result;
}; // @TODO we need to figure out why we have this method and getAllDepartmentList
// i assume we using them in different react projects.


var getAllDepartmentsWithId = function getAllDepartmentsWithId() {
  return getResult(departments);
}; // ------------------------------
// @TODO update this version.
// I don't like it. For me this line is shit
// and i don;t like this name as well


var getResult = function getResult(property) {
  return _.map(property, function (p) {
    return _objectSpread({
      key: __generateId()
    }, p);
  });
};

var getAllIngredientsList = function getAllIngredientsList(department) {
  var ingredients = _this.getAllIngredientsByOneDepartment(department);

  return ingredients.map(function (item) {
    return {
      key: __generateId(),
      name: item,
      isChecked: false,
      departmentID: __generateId(),
      order: 0
    };
  });
};

var getAllGrocery = function getAllGrocery() {
  return _.map(groceries, function (item) {
    return _objectSpread({
      key: __generateId()
    }, item);
  });
};

var getAllGroceryDepartment = function getAllGroceryDepartment(departmentArray) {
  var departmentArrayObject = departmentArray.map(function (item) {
    return {
      key: __generateId(),
      departmentName: item,
      isChecked: false
    };
  });
  return departmentArrayObject;
};

var createNewGroceryList = function createNewGroceryList(newDepartment) {
  var nameExists = _.find(groceries, function (item) {
    return item.name === newDepartment.name;
  });

  !nameExists && newGroceryList(newDepartment); // @TODO i don't like this "creature". just make it with simple if
}; // TODO OMG, this method looks so sad...


var getGroceryListsByDepartment = function getGroceryListsByDepartment(department) {
  var groceryList = [];

  if (department) {
    // what we're doing? camelCase? explain @TODO
    var capitalisedDepartment = department[0].toUpperCase() + department.toLowerCase().substr(1);
    groceries.map(function (grocery) {
      if (grocery.departments.includes(department.toLowerCase()) || grocery.departments.includes(department.toUpperCase()) || grocery.departments.includes(capitalisedDepartment)) {
        groceryList.push({
          name: grocery.name,
          id: grocery.id
        });
      }
    });
    return groceryList;
  }

  return groceryList;
}; // @TODO should work now.
// const newGroceryList = (newDepartment) => {
// const groceriesFile = fs.createWriteStream('./data/Grocery/grocery.json')
// const newGrocery = [ ...groceries, newDepartment ]
// groceriesFile.write(JSON.stringify(newGrocery, null, 2))
// groceries = newGrocery
// }


export { getIngredients, // getGrocery,
// getUsers,
getDepartments, getGroceryById, getGroceryByName, getGroceryByNameWithDepAndIng, getGroceryListsWithCountDepartments, getAllDepartments, getAllIngredientsByOneDepartment, getAllDepartmentList, getAllIngredientsList, getAllGrocery, getAllGroceryDepartment, createNewGroceryList, getGroceryListsByDepartment, // newGroceryList,
getResult, getAllIngredientsByOneDepartmentKey, getGroceryByNameWithDepAndIngKey, getGroceriesWithDepIngKey, getAllIngredientsWithId, getKeyArrayDepAndIng, getAllDepartmentsWithId, getCountIngOfDepartment, __find };