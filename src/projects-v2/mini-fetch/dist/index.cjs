'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var lodash = _interopDefault(require('lodash'));
var miniSd = _interopDefault(require('@groceristar/mini-sd'));

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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,n){module.exports=n();}(commonjsGlobal,function(){var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return !r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return (n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i;}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0)||l,this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.valueOf()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return "Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
});

// const path = require('path')




 // main reason for having this file, because i'm trying to move away repetetive functions
// @TODO Arthur have at least 3-5 different modules, that should replace this method
// @TODO do we need it? https://github.com/sindresorhus/parse-json
// const parser = function (file) {
//   // return JSON.parse(JSON.stringify(file))
//   return file
// }


var __l = function __l(value) {
  return console.log(value);
};

var __get$1 = function __get(value) {
  return parser(value);
};

var __find = function __find(alias, files) {
  // console.log(files);
  var result = lodash.get(files, alias); // console.log(alias);
  // console.log(result);


  return __get$1(result);
}; // function that will improve work with uuid id generator


var __generateId = function __generateId() {
  return lodash.uniqueId(v1_1());
}; // @TODO can be one method with different types.


var __generateDate = function __generateDate() {
  return dayjs_min().toDate();
};

var utils = {
  // parser,
  __l: __l,
  __find: __find,
  __get: __get$1,
  __generateId: __generateId,
  __generateDate: __generateDate
};

// const staticData = require('@groceristar/sd-wrapper')


const departments$1 = miniSd.departments;
const groceries = miniSd.grocery;
const ingredients = miniSd.ingredients;
const users$1 = miniSd.users;

console.log(departments$1);
console.log(groceries);

var files = {
  departments: departments$1,
  groceries,
  ingredients,
  users: users$1
};

const {
  __get: __get$2,
  __find: __find$1,
  // __l,
  __generateId: __generateId$1
} = utils;

const {
  departments: departments$2,
  groceries: groceries$1,
  ingredients: ingredients$1,
  users: users$2
} = files;

// @TODO can we update our methods - but we'll need to go step by step,
// don't worry, will update @hirdbluebird
// because these methods used in our react projects.
// so I propose do it very carefully
const getIngredients = function () {
  return ingredients$1
};

// __l(getGrocery());

const getUsers = function () {
  return users$2

};

const getDepartments = () => {
  return departments$2
};

const getGroceryById = function (id) {
  return [ lodash.find(groceries$1, ['id', id]) ]
};

const filterGroceriesByName = (groceries, name) => lodash.filter(groceries, (item) => {
  return item.name === name
});

const getGroceryByName = function (name) {
  return filterGroceriesByName(groceries$1, name)
};

// @TODO we spot the same problem twice. It's a regression error.
// we need to address that. And i think it's a good candidate for test coverage + adding raven.
// @TODO second issue - i don't like that. looks not fancy.
const getGroceryByNameWithDepAndIng = function (name) {
  // __l(grocerieszzz);

  // @TODO maybe we shall move this function away. OR have another method, not getGrocery, that will repack things as we need it here....
  // we did few times a similar manipulations
  // for example, first step will be to use this: getGroceryByName
  // let newGrocerieszzz = filterGroceriesByName(groceries, name)

  // let zizua = getGroceryByName(name);
  // let result = []
  // zizua['departments'].forEach(  function (department) {
  //
  //
  //     result.push({
  //       'department': department,
  //       'ingredients': getAllIngredientsByOneDepartment(department)
  //     })
  //   })
  //   return result
  // return NEW_grocerieszzz;
  // console.log(NEW_grocerieszzz);

  // -----

  let result = [];
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
  return result
};

// Where we're using this methods?
// -----------------------------------

const getGroceriesWithDepIngKey = () => {
  // let result = []
  // let result = _.map(groceries, function (grocery) {
  //   // @TODO change variable name
  //   // grocery.id = __generateId()
  //   // grocery.departments = groceryDepIng;
  //   return getGroceryByNameWithDepAndIngKey(grocery.name)
  // })
  let departmentId = __generateId$1();
  // return result


  return {
    'name': 'name',
    'groceryId': 'groceryId',
    'messages': {},
    'ingridients': {},
    'departments': {
      'id': departmentId,
      'name': '',
      'type': '',
      'ingredients': {}
    }
  }


};

const getGroceryByNameWithDepAndIngKey = name => {
  let groceryId = __generateId$1();

  let grocery = filterGroceriesByName(groceries$1, name);

  // @TODO this is not a clean turn around for this method
  // grocery[0]['departments'].forEach(
  //   function (department) {
  //     let departmentId = __generateId()
  //     let departmentType = ''
  //     // @TODO i don't like that we're searching for things by names,
  //     // we need to replace it later with separated methods that will assign items between files via id
  //     let dep = _.find(departments, (o) => {
  //       return o.name === department
  //     })
  //     if (dep != undefined) {
  //       departmentType = dep.type
  //     }
  //     let ingredients = getAllIngredientsByOneDepartmentKey(department, groceryId)
  //     result.push({
  //       'id': departmentId,
  //       'name': department,
  //       'type': departmentType,
  //       'ingredients': ingredients
  //     })
  //   })


  // return {
  //   'name': name,
  //   'groceryId': groceryId,
  //   'messages': {},
  //   'departments': []
  // }



};

const getAllIngredientsByOneDepartmentKey = function (department, groceryId) {
  let ingredients = getIngredients();

  // @TODO it looks like a separated method for me
  // var ingredientsList =
  //   _.filter(ingredients, function (item) {
  //     return item.department === department
  //   })

  let ingredientsList = filterIngrListByDep(ingredients, department);

  return lodash.map(ingredientsList, item => {
    let ingredientId = __generateId$1();

    return [
      ingredientId,
      item.name,
      `/del/ing/${ingredientId}/${groceryId}`
    ]
  })
};

// -----------------------------------
const filterIngrListByDep = (ingredients, department) => lodash.filter(ingredients, item => {
  return item.department === department
});
// strange turnaround. @TODO can we
const getGroceryListsWithCountDepartments = function () {
  // return _.map(groceries, item => {
  //   const object = {
  //     id: item.id,
  //     name: item.name,
  //     departmentsCount: item.departments.length
  //   }
  //   delete object.departments // @TODO ????
  //   return object
  // })

};

// i assume this cannot work, because we don't have groceries variable... @TODO
const getAllDepartments = function () {
  const departments = [];

  // @TODO this is an example what should be updated. loooooks so bad and unreadable
  lodash.forEach(lodash.range(0, groceries$1.length), value =>
    departments.push(...lodash.map(groceries$1[value]['departments']))
  );
  return departments
};

const getAllIngredientsByOneDepartment = function (department) {
  let ingredients = getIngredients();

  let ingredientsList = filterIngrListByDep(ingredients, department);

  return lodash.map(ingredientsList, 'name')
};

const getCountIngOfDepartment = function () {
  // let result = []
  let departments = getDepartments();

  let result = lodash.map(departments, function (department) {
    let ingredientsByOneDepartment = getAllIngredientsByOneDepartment(department.name);
    return {
      ...department,
      countIngredients: ingredientsByOneDepartment.length
    }
  });

  return result
};

const getKeyArrayDepAndIng = function () {
  let keys = [];

  // @TODO does this functions doing a similar thing or not?
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
  lodash.forEach(departments, function (department) {
    lodash.forEach(ingredients, function (ingredient) {
      // @TODO can be redo later with lodash methods
      if (ingredient.department === department.name) {
        keys.push({
          [department.key]: ingredient.key
        });
      }
    });
  });

  return keys
};
// --------------------------------------------

const getAllDepartmentList = function () {
  return lodash.map(departments$2, item => ({
    key: __generateId$1(),
    departmentName: item
  }))
};

const getAllIngredientsWithId = function () {
  // let result = []
  let ingredients = getIngredients();

  // let result = _.map(ingredients, function (ingredient) {
  //   return {
  //     key: __generateId(),
  //     ...ingredient
  //   }
  // })
  let result = getResult(ingredients);

  return result
};

// @TODO we need to figure out why we have this method and getAllDepartmentList
// i assume we using them in different react projects.
const getAllDepartmentsWithId = function () {
  // let result = []
  // let result = _.map(departments, function (department) {
  //   return {
  //     key: __generateId(),
  //     ...department
  //   }
  // })
  let result = getResult(departments$2);

  return result
};
// ------------------------------

const getResult = (property) => lodash.map(property, (p) => ({
  key: __generateId$1(),
  ...p
}));

const getAllIngredientsList = function (department) {
  const ingredients = this.getAllIngredientsByOneDepartment(department);

  return ingredients.map(item => ({
    key: __generateId$1(),
    name: item,
    isChecked: false,
    departmentID: __generateId$1(),
    order: 0
  }))
};

const getAllGrocery = function () {
  return lodash.map(groceries$1, item => ({
    key: __generateId$1(),
    ...item
  }))
};

const getAllGroceryDepartment = function (departmentArray) {
  const departmentArrayObject = departmentArray.map(item => ({
    key: __generateId$1(),
    departmentName: item,
    isChecked: false
  }));

  return departmentArrayObject
};

const createNewGroceryList = function (newDepartment) {
  const nameExists = lodash.find(
    groceries$1,
    item => item.name === newDepartment.name
  );
};

// TODO OMG, this method looks so sad...
const getGroceryListsByDepartment = department => {
  let groceryList = [];
  if (department) {
    // what we're doing? camelCase? explain @TODO
    // const capitalisedDepartment = department[0].toUpperCase() + department.toLowerCase().substr(1)
    // groceries.map(grocery => {
    //   if (grocery.departments.includes(department.toLowerCase()) ||
    //     grocery.departments.includes(department.toUpperCase()) ||
    //     grocery.departments.includes(capitalisedDepartment)
    //   ) {
    //     groceryList.push({
    //       name: grocery.name,
    //       id: grocery.id
    //     })
    //   }
    // })
    return groceryList
  }
  return groceryList
};

// @TODO should work now.
function newGroceryList (newDepartment) {
  // const groceriesFile = fs.createWriteStream('./data/Grocery/grocery.json')
  // const newGrocery = [ ...groceries, newDepartment ]

  // groceriesFile.write(JSON.stringify(newGrocery, null, 2))
  // groceries = newGrocery
}

var groceristar = {
  getIngredients,
  // getGrocery,
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
  getResult,
  getAllIngredientsByOneDepartmentKey,
  getGroceryByNameWithDepAndIngKey,
  getGroceriesWithDepIngKey,
  getAllIngredientsWithId,
  getKeyArrayDepAndIng,
  getAllDepartmentsWithId,
  getCountIngOfDepartment,
  __find: __find$1
};

// const staticData = require('@groceristar/sd-wrapper')
const ingredients3$1 = miniSd.ingredients3;
const menus$1 = miniSd.menu;
const recipes$1 = miniSd.recipes;
const nutritions1$1 = miniSd.nutritions;
const nutritions2$1 = miniSd.nutritions2;
const departments$3 = miniSd.departments;
const users$3 = miniSd.users;
// require('@groceristar/sd-wrapper/dist/data/Recipe4/recipe.json')

var files$1 = {
  ingredients3: ingredients3$1,
  menus: menus$1,
  recipes: recipes$1,
  nutritions1: nutritions1$1,
  nutritions2: nutritions2$1,
  departments: departments$3,
  users: users$3
};

const {
  __find: __find$2,
  // __get,
  __generateDate: __generateDate$1,
  __generateId: __generateId$2
} = utils;

const files$2 = {
  ingredients3,
  menus,
  recipes,
  nutritions1,
  nutritions2,
  departments,
  users
} = files$1;

// @TODO update this method, use stuff from utils.js
const getFiveRandomId = function () {
  return [
    __generateId$2(),
    __generateId$2(),
    __generateId$2(),
    __generateId$2(),
    __generateId$2()
  ]
};

const getRecipes = function () {
  let recipes = __get(files$2.recipes);
  // let recipes = []
  let randomFiveIds = getFiveRandomId();

  let result =
      lodash.map(recipes, (recipe, index) => {
        // console.log(ingredientsId);
        return {
          ...recipe,
          created_at: __generateDate$1(),
          updated_at: __generateDate$1(),
          id: __generateId$2(),
          ingredients: randomFiveIds,
          diets: randomFiveIds,
          courses: randomFiveIds,
          cuisines: randomFiveIds,
          holidays: randomFiveIds,
          nutritions: randomFiveIds
        }
      });
  return result
};

// @TODO delete file menu.json from main set of files, but create a note at some place,
// that Menu file is no longer needed because we replace it with fake data. you can use method ABC in order to generate that data.
const getMenuGenerator = (numberOfWeeks) => {
  let result;
  result = lodash.times(numberOfWeeks, (index) => ({
    id: __generateId$2(),
    title: `Weekly menu ${index}`,
    date: __generateDate$1(),
    description: `description for Weekly menu ${index}`,
    notes: `This is a chef notes for wm ${index}`
  }));
  return result
};

// @TODO replace it later. may need it at utils.js
const getNRecipes = (n) => {
  return lodash.slice(recipes, n)
};

/**
 * Fetches one recipe by title
 * @param  {string} title title of the recipe
 * @return {object}       recipe object
 */
const getRecipeByTitle = (title) => {
  let recipes = __get(files$2.recipes);
  return lodash.filter(recipes, recipe => recipe.title === title)[0]
  // return []
};

/**
 * Fetches random recipe
 * @return {object} recipe object
 */
const getRandomRecipe = (n = 1) => {
  let recipes = getNRecipes(20);
  return lodash.sampleSize(recipes, n)
};

/**
 * Fetches first five recipes
 * @return {array} recipe objects
 */
// @TODO can be updated in order to change the number of recipes that we can return
const getFirstFiveRecipes = () => {
  let recipes = getNRecipes(5);

  let result = lodash.map(recipes, item => ({
    key: __generateId$2(),
    recipe: item
  }));

  return result
};

const getFiveRandomIngredients = () => {
  let result = lodash.map(getRandomRecipe(5), (recipe) => ({
    'id': __generateId$2(),
    'ingredient': recipe['ingredients']
  }));
  return result
};

var chickenKyiv = {
  getNRecipes,
  getRecipeByTitle,
  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getMenuGenerator,
  getRecipes,
  // files,
  __find: __find$2
};

var src = {
  groceristar: groceristar,
  chickenKyiv: chickenKyiv
};
var src_1 = src.groceristar;
var src_2 = src.chickenKyiv;

exports.chickenKyiv = src_2;
exports.default = src;
exports.groceristar = src_1;
