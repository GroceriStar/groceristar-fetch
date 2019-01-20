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

// @TODO i think as showcase is a separated project, we can move this method to
// a separated place, in order to make it cleaner
const getGroceryShowcase = function() {
  //@TODO can we just merge together 2 arrays instead of adding this 2 values?
  //maybe it can be better

  //parser replace
  let parsedGroceries = getGrocery();
  // console.log(parsedGroceries);

  let groceriesWithCss = parsedGroceries.map((item) => {
    item.height = 200;
    item.css = "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
    return item;
  });
  // console.log(groceriesWithCss);

  return groceriesWithCss;
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

const getAllDepartmentList = function() {
  return _.map(this.getDepartments(), item => ({
    key: uuidv1(),
    departmentName: item
  }));
};

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

const getDepartmentsGraphQL = function(){
  let results = getDepartments();
  return results.map((item, index) =>({
    department_id: ++index,
    name: item.name,
    desc: "description for department1",
    created_at: Date.now(),
    updated_at: Date.now()
    }))
};

const getDepartmentsGraphQLKey = function(){
  let results = getDepartments();
  return results.map((item, index) =>({
    department_id: uuidv1(),
    name: item.name,
    desc: "description for department1",
    created_at: Date.now(),
    updated_at: Date.now()
    }))
};

const getGroceryGraphQL = function(){
  let results = getGrocery();
  return results.map((item, index) =>({
    grocery_id: ++index,
    name: item.name,
    img:  item.img,
    desc: item.desc,
    slug: item.slug,
    created_at: Date.now(),
    updated_at: Date.now(),
    id_1: 1,
    favs: false
    }))
};

const getGroceryGraphQLKey = function(){
  let results = getGrocery();
  return results.map((item, index) =>({
    grocery_id: uuidv1(),
    name: item.name,
    img:  item.img,
    desc: item.desc,
    slug: item.slug,
    created_at: Date.now(),
    updated_at: Date.now(),
    id_1: 1,
    favs: false
    }))
};

const getIngredientsGraphQL = function(){
  let results = getIngredients();
  return results.map((item, index) =>({
    ingredient_id: ++index,
    favs:'',
    name: item.name,
    description: "description",
    custom: false,
    created_at: Date.now(),
    updated_at: Date.now(),
    id_1: 1,
    department_id: 1
    }))
};

const getIngredientsGraphQLKey = function(){
  let results = getIngredients();
  return results.map((item, index) =>({
    ingredient_id: uuidv1(),
    favs:'',
    name: item.name,
    description: "description",
    custom: false,
    created_at: Date.now(),
    updated_at: Date.now(),
    id_1: 1,
    department_id: 1
    }))
};

const getUsersGraphQL = function(){
  let results = getUsers();
  return results.map((item, index) =>({
    userId: ++index,
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
    }))
};
const getUsersGraphQLKey = function(){
  let results = getUsers();
  return results.map((item, index) =>({
    userId: uuidv1(),
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
    }))
};

module.exports = {
  getIngredients,
  getGrocery,
  getGroceryShowcase,
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
  getDepartmentsGraphQL,
  getDepartmentsGraphQLKey,
  getGroceryGraphQL,
  getGroceryGraphQLKey,
  getIngredientsGraphQL,
  getIngredientsGraphQLKey,
  getUsersGraphQL,
  getUsersGraphQLKey

}
