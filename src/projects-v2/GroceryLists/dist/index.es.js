import { ingredients, departments, groceries } from '@files';
import _ from 'lodash';
import 'dayjs';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var crypto = {};

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.



var rng = function nodeRNG() {
  return crypto.randomBytes(16);
};

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

var bytesToUuid_1 = bytesToUuid;

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid_1(b);
}

var v1_1 = v1;

var __get = function __get(value) {
  return parser(value);
};

var __find = function __find(alias, files) {
  // console.log(files);
  var result = _.get(files, alias); // console.log(alias);
  // console.log(result);


  return __get(result);
}; // function that will improve work with uuid id generator


var __generateId = function __generateId() {
  return _.uniqueId(v1_1());
}; // @TODO can be one method with different types.

var _this = undefined;
// don't worry, will update @hirdbluebird
// because these methods used in our react projects.
// so I propose do it very carefully

var getIngredients = function getIngredients() {
  return ingredients;
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

export { __find, createNewGroceryList, getAllDepartmentList, getAllDepartments, getAllDepartmentsWithId, getAllGrocery, getAllGroceryDepartment, getAllIngredientsByOneDepartment, getAllIngredientsByOneDepartmentKey, getAllIngredientsList, getAllIngredientsWithId, getCountIngOfDepartment, getDepartments, getGroceriesWithDepIngKey, getGroceryById, getGroceryByName, getGroceryByNameWithDepAndIng, getGroceryByNameWithDepAndIngKey, getGroceryListsByDepartment, getGroceryListsWithCountDepartments, getIngredients, getKeyArrayDepAndIng, getResult };
