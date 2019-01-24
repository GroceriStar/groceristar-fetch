const _            = require('lodash');
const fs           = require('fs');
const uuidv1       = require('uuid/v1');

const departments  = require('../../data/Departments/departments.json');
let   groceries    = require('../../data/Grocery/grocery.json');
const ingredients  = require('../../data/Ingredients/ingredients.json');
const users        = require('../../data/Users/users.json');


const parser = function(filename) {

  return JSON.parse(JSON.stringify(filename))

}

const getIngredients = function() {
  return parser(ingredients)
}

const getGrocery = function() {
  return parser(groceries)
}

const getUsers = function() {
  return parser(users)
}

const getDepartments = function() {
  return parser(departments)
}

const getGroceryById = function(id) {
  //parser replace
  return [_.find(getGrocery(), ['id', id])];
};

const getGroceryByName = function(name) {
  //parser replace
  return _.filter(getGrocery(), function(item) {
    return item.name === name;
  })
}

const getGroceryByNameWithDepAndIng = function( name ) {
  //parser replace
  let grocery = _.filter(getGrocery(),
    function(item) {
      return item.name === name;
    });

  let result = [];
  grocery[0]["departments"].forEach(
    function(department) {

      //@TODO add let ingredients = const getAllIngredientsByOneDepartment(department)

      result.push({
        "department": department,
        "ingredients": getAllIngredientsByOneDepartment(department)
      });
    });
  return result;
}

const getGroceriesWithDepIngKey = function(){
  let groceries = getGrocery();
  let result = _.map(groceries, function(grocery) {
    let groceryDepIng = getGroceryByNameWithDepAndIngKey(grocery.name);
    // grocery.id = uuidv1();
    // grocery.departments = groceryDepIng;
    return {
      ...grocery,
      id: uuidv1(),
      departments: groceryDepIng,
    }
  });

  return result;
}

const getGroceryByNameWithDepAndIngKey = function( name ) {
  //parser replace
  let groceries = getGrocery();

  let grocery = _.filter(groceries,
    function(item) {
      return item.name === name;
    });

  let result = [];
  grocery[0]["departments"].forEach(
    function(department) {

      let ingredients = getAllIngredientsByOneDepartmentKey(department)
      result.push({
        "id": uuidv1(),
        "department": department,
        "ingredients": ingredients
      });
    });
  return result;
}

const getAllIngredientsByOneDepartmentKey = function(department) {
  let ingredients = getIngredients();
  var ingredientsList =
    _.filter(ingredients, function(item) {
      return item.department === department;
    });

  return _.map(ingredientsList, item => {
    return {
      id:uuidv1(),
      name: item.name,
      };
  });
}

// strange turnaround. @TODO can we
const getGroceryListsWithCountDepartments = function() {
  //parser replace
  return _.map(getGrocery(), item => {
    const object = {
      id: item.id,
      name: item.name,
      departmentsCount: item.departments.length
    };
    delete object.departments;
    return object;
  });
};

const getAllDepartments = function() {
  const departments = [];
  _.forEach(_.range(0, groceries.length), value =>
    departments.push(..._.map(groceries[value]['departments']))
  );
  return departments;
};

const getAllIngredientsByOneDepartment = function(department) {

  var ingredientsList =
    _.filter(getIngredients(), function(item) {
      return item.department === department;
    });
  return _.map(ingredientsList, 'name');
}

const getCountIngOfDepartment = function(){
  let departments = getDepartments();
  let result = _.map(departments, function(department){
      let ingredientsByOneDepartment = getAllIngredientsByOneDepartment(department.name);
    return {
      ...department,
      countIngredients: ingredientsByOneDepartment.length
    }
  })

  return result;
}

const getKeyArrayDepAndIng = function(){
  let keys =[];
  let departments = getAllDepartmentsWithId();
  let ingredients = getAllIngredientsWithId();

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
    _.forEach(departments,function(department){

      _.forEach(ingredients,function(ingredient){

        if(ingredient.department === department.name) {
          keys.push({
          [department.key] : ingredient.key,
          })
        }
      })
    })

  return keys;
}
// --------------------------------------------
const getAllDepartmentList = function() {
  return _.map(getDepartments(), item => ({
    key: uuidv1(),
    departmentName: item
  }));
};

const getAllIngredientsWithId = function(){
  let ingredients = getIngredients();

  let result = _.map(ingredients, function(ingredient){
    return {
      key: uuidv1(),
      ...ingredient
    }
  })

  return result;
}

const getAllDepartmentsWithId = function(){
  let departments = getDepartments();

  let result = _.map(departments, function(department){
    return {
      key: uuidv1(),
      ...department
    }
  })

  return result;
}
//------------------------------

const getAllIngredientsList = function(department) {
  const ingredients = this.getAllIngredientsByOneDepartment(department);

  return ingredients.map(item => ({
    key: uuidv1(),
    name: item.name,
    isChecked: false
  }));
};

const getAllGrocery = function() {
  //parser replace
  return _.map(getGrocery(), item => ({
    key: uuidv1(),
    ...item
  }));
};

const getAllGroceryDepartment = function(departmentArray) {
  const departmentArrayObject = departmentArray.map(item => ({
    key: uuidv1(),
    departmentName: item,
    isChecked: false
  }));
  return departmentArrayObject;
};

const createNewGroceryList = function(newDepartment) {
  const nameExists = _.find(
    groceries,
    item => item.name === newDepartment.name
  );
  !nameExists && newGroceryList(newDepartment);
};

//TODO OMG, this method looks so sad...
const getGroceryListsByDepartment = department => {
  let parsedGroceries = getGrocery(),
    groceryList = [];
  if (department) {
    capitalisedDepartment = department[0].toUpperCase() + department.toLowerCase().substr(1);
    parsedGroceries.map(grocery => {
      if (grocery.departments.includes(department.toLowerCase()) ||
        grocery.departments.includes(department.toUpperCase()) ||
        grocery.departments.includes(capitalisedDepartment)
      ) {
        groceryList.push({
          name: grocery.name,
          id: grocery.id
        });
      }
    });
    return groceryList;
  }
  return groceryList;
}

//@TODO should work now.
function newGroceryList(newDepartment) {
  const groceriesFile = fs.createWriteStream('./data/Grocery/grocery.json');
  const newGrocery = [...getGrocery(), newDepartment];
  groceriesFile.write(JSON.stringify(newGrocery, null, 2));
  groceries = newGrocery;
}



module.exports = {
  getIngredients,
  getGrocery,
  getUsers,
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
  newGroceryList,

  getAllIngredientsByOneDepartmentKey,
  getGroceryByNameWithDepAndIngKey,
  getGroceriesWithDepIngKey,
  getAllIngredientsWithId,
  getKeyArrayDepAndIng,
  getAllDepartmentsWithId,
  getCountIngOfDepartment


}
