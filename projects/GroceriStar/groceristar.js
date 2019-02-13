const _            = require('lodash');
const fs           = require('fs');
const uuidv1       = require('uuid/v1');

const { parser }   = require('../../helper');





const departments  = require('../../data/Departments/departments.json');
// const ingredients3     = require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');
let   groceries    = require('../../data/Grocery/grocery.json');
// const ingredients3     = require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');
const ingredients  = require('../../data/Ingredients/ingredients.json');
// const ingredients3     = require('@groceristar/sd-wrapper/lib/data/Ingredients/ingredients3.json');

// const users        = require('../../data/Users/users.json');
const users     = require('@groceristar/sd-wrapper/lib/data/Users/users.json');





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




const getGroceryById = function( id ) {

  let groceries = getGrocery();
  return [ _.find(groceries, ['id', id]) ];
};

const getGroceryByName = function(name) {
  let groceries = getGrocery();

  return _.filter(groceries, function(item) {
    return item.name === name;
  })
}

const getGroceryByNameWithDepAndIng = function( name ) {
  let groceries = getGrocery();

  let grocery = _.filter(groceries,
    item => {
      return item.name === name;
    });

  let result = [];
  grocery[0]["departments"].forEach(
    function(department) {

      //@TODO add let ingredients = const getAllIngredientsByOneDepartment(department)

      result.push({
        "department" : department,
        "ingredients": getAllIngredientsByOneDepartment(department)
      });
    });
  return result;
}



// Where we're using this methods?
// -----------------------------------

const getGroceriesWithDepIngKey = function(){
  let groceries = getGrocery();

  let result = _.map(groceries, function(grocery) {
    //@TODO change variable name
    // grocery.id = uuidv1();
    // grocery.departments = groceryDepIng;
    return getGroceryByNameWithDepAndIngKey(grocery.name);
  });

  return result;
}

const getGroceryByNameWithDepAndIngKey = function( name ) {

  let groceries = getGrocery();
  let groceryId = uuidv1();
  let grocery = _.filter(groceries,
    item => {
      return item.name === name;
    });

  let result = [];
  // @TODO this is not a clean turn around for this method
  grocery[0]["departments"].forEach(
    function(department) {
      let departmentId = uuidv1();
      let departmentType = "";

      //@TODO i don't like that we're searching for things by names,
      // we need to replace it later with separated methods that will assign items between files via id
      let dep = _.find(getDepartments(), (o) => {
        return o.name === department
      });

      if(dep != undefined){
        departmentType = dep.type
      }

      let ingredients = getAllIngredientsByOneDepartmentKey( department, groceryId )
      result.push({
        "id": departmentId,
        "name": department,
        "type": departmentType,
        "ingredients": ingredients
      });
    });

  return {
    "name": name,
    "groceryId": groceryId,
    "messages": {},
    "departments": result
  };
}

const getAllIngredientsByOneDepartmentKey = function(department, groceryId) {
  let ingredients = getIngredients();

  // @TODO it looks like a separated method for me
  var ingredientsList =
    _.filter(ingredients, function(item) {
      return item.department === department;
    });

  return _.map(ingredientsList, item => {
    let ingredientId = uuidv1();

    return [
      ingredientId,
      item.name,
      `/del/ing/${ingredientId}/${groceryId}`
    ];
  });
}


// -----------------------------------

// strange turnaround. @TODO can we
const getGroceryListsWithCountDepartments = function() {
  let groceries = getGrocery();

  return _.map(groceries, item => {
    const object = {
      id: item.id,
      name: item.name,
      departmentsCount: item.departments.length
    };
    delete object.departments; // @TODO ????
    return object;
  });
};

// i assume this cannot work, because we don't have groceries variable... @TODO
const getAllDepartments = function() {
  const departments = [];

  // @TODO this is an example what should be updated. loooooks so bad and unreadable
  _.forEach(_.range(0, groceries.length), value =>
    departments.push(..._.map(groceries[value]['departments']))
  );
  return departments;
};

const getAllIngredientsByOneDepartment = function(department) {
  let ingredients = getIngredients();

  var ingredientsList =
    _.filter(ingredients, function(item) {
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

  //@TODO does this functions doing a similar thing or not?
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
    _.forEach(departments, function(department){

      _.forEach(ingredients, function(ingredient){

        //@TODO can be redo later with lodash methods
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
  let departments = getDepartments();

  return _.map(departments, item => ({
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

// @TODO we need to figure out why we have this method and getAllDepartmentList
// i assume we using them in different react projects.
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
    name: item,
    isChecked: false,
    departmentID: uuidv1(),
    order: 0
  }));
};

const getAllGrocery = function() {
  let groceries = getGrocery();
  return _.map(groceries, item => ({
    key: uuidv1(),
    ...item
  }));
};


const getAllGroceryDepartment = function( departmentArray ) {
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
    // what we're doing? camelCase? explain
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
function newGroceryList( newDepartment ) {

  let groceries       = getGrocery();
  const groceriesFile = fs.createWriteStream('./data/Grocery/grocery.json');
  const newGrocery    = [ ...groceries, newDepartment ];

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
  getCountIngOfDepartment,

}
