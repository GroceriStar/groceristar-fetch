'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = require('lodash');
var ___default = _interopDefault(_);
var dayjs = _interopDefault(require('dayjs'));
var _files = require('@files');

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
  var result = ___default.get(files, alias); // console.log(alias);
  // console.log(result);


  return __get(result);
}; // function that will improve work with uuid id generator


var __generateId = function __generateId() {
  return ___default.uniqueId(v1_1());
}; // @TODO can be one method with different types.


var __generateDate = function __generateDate() {
  return dayjs().toDate();
};

var getFiveRandomId = function getFiveRandomId() {
  return [__generateId(), __generateId(), __generateId(), __generateId(), __generateId()];
};

var getRecipes = function getRecipes() {
  var randomFiveIds = getFiveRandomId();

  var result = _.map(_files.recipes, function (recipe, index) {
    // console.log(ingredientsId);
    return _objectSpread({}, recipe, {
      created_at: __generateDate(),
      updated_at: __generateDate(),
      id: __generateId(),
      ingredients: randomFiveIds,
      diets: randomFiveIds,
      courses: randomFiveIds,
      cuisines: randomFiveIds,
      holidays: randomFiveIds,
      nutritions: randomFiveIds
    });
  });

  return result;
}; // @TODO delete file menu.json from main set of files, but create a note at some place,
// that Menu file is no longer needed because we replace it with fake data. you can use method ABC in order to generate that data.


var getMenuGenerator = function getMenuGenerator(numberOfWeeks) {
  var result;
  result = _.times(numberOfWeeks, function (index) {
    return {
      id: __generateId(),
      title: "Weekly menu ".concat(index),
      date: __generateDate(),
      description: "description for Weekly menu ".concat(index),
      notes: "This is a chef notes for wm ".concat(index)
    };
  });
  return result;
}; // @TODO replace it later. may need it at utils.js


var getNRecipes = function getNRecipes(n) {
  return _.slice(_files.recipes, n);
};
/**
 * Fetches one recipe by title
 * @param  {string} title title of the recipe
 * @return {object}       recipe object
 */


var getRecipeByTitle = function getRecipeByTitle(title) {
  return _.filter(_files.recipes, function (recipe) {
    return recipe.title === title;
  })[0];
};
/**
 * Fetches random recipe
 * @return {object} recipe object
 */


var getRandomRecipe = function getRandomRecipe() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var recipes = getNRecipes(20);
  return _.sampleSize(recipes, n);
};
/**
 * Fetches first five recipes
 * @return {array} recipe objects
 */
// @TODO can be updated in order to change the number of recipes that we can return


var getFirstFiveRecipes = function getFirstFiveRecipes() {
  var recipes = getNRecipes(5);

  var result = _.map(recipes, function (item) {
    return {
      key: __generateId(),
      recipe: item
    };
  });

  return result;
};

var getFiveRandomIngredients = function getFiveRandomIngredients() {
  var result = _.map(getRandomRecipe(5), function (recipe) {
    return {
      'id': __generateId(),
      'ingredient': recipe['ingredients']
    };
  });

  return result;
};

exports.__find = __find;
exports.getFirstFiveRecipes = getFirstFiveRecipes;
exports.getFiveRandomIngredients = getFiveRandomIngredients;
exports.getMenuGenerator = getMenuGenerator;
exports.getNRecipes = getNRecipes;
exports.getRandomRecipe = getRandomRecipe;
exports.getRecipeByTitle = getRecipeByTitle;
exports.getRecipes = getRecipes;
