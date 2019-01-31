#### Groceristar-fetch module

Table of Contents
=================

 * [Synopsis](#synopsis)
 * [Additional information](#additional-information)
 * [Installation](#installation)
 * [Code Example](#code-example)
 * [Test](#tests)
 * [Contributors](#contributors)
 * [Credits](#credits)
 * [Junk](#junk)



#### Synopsis
  This is a module for using API like wrappers for getting food data for use in many projects. Just Like an database and fetch API in JS

[![Build Status](https://travis-ci.org/GroceriStar/groceristar-fetch.svg?branch=master)](https://travis-ci.org/GroceriStar/groceristar-fetch)
[![npm version](https://badge.fury.io/js/%40groceristar%2Fgroceristar-fetch.svg)](https://badge.fury.io/js/%40groceristar%2Fgroceristar-fetch)
[![Coverage Status](https://coveralls.io/repos/github/GroceriStar/groceristar-fetch/badge.svg?branch=master)](https://coveralls.io/github/GroceriStar/groceristar-fetch?branch=master)

<!--
![Alt Text](https://github.com/GroceriStar/creative/blob/master/app-video/fetch-inside.gif)/
-->

#### Additional information
[Introduction Article](https://medium.com/groceristar/groceristar-fetch-small-module-that-weve-created-8b4a62bd5d7b)

[Trello board with current tasks](https://trello.com/b/U2Jm8JWX/fetch-plugin)

[Documentation Website](https://groceristar.github.io/groceristar-fetch/)

[Sandbox Editor](https://codesandbox.io/s/mzknoy0rnp)


#### Installation

`npm install @groceristar/groceristar-fetch`

or

`yarn add @groceristar/groceristar-fetch`




#### Code Example

```
const { groceristar } = require('@groceristar/groceristar-fetch')
const departments = groceristar.getDepartments();

// returns an array of all departments

example
[
  {
    "name": "Fresh vegetables",
    "type": "food"
  },
  {
    "name": "Condiments / sauces",
    "type": "food"
  }
]
```

The above code can be re-written as

```
const { groceristar, search, chiCkenKyiv, mealCalendar } = require('@groceristar/groceristar-fetch');
console.log(groceristar.getDepartments());
console.log(search.getAttribute('diets'));

import { groceristar, mealCalendar } from '@groceristar/groceristar-fetch'
```
To Find out about all the functionality use https://groceristar.github.io/groceristar-fetch/.

#### Tests

`npm test`

---
https://github.com/americanexpress/jest-json-schema#tomatchschemaschema

https://github.com/camsong/fetch-jsonp

https://github.com/facebook/jest/blob/master/examples/module-mock/__tests__/full_mock.js


code gen at `files`: create a hash map, similar that we have at search.js for returning all raw files.... it'll avoid issues with updating t by hands.

create method that will `_.unite` all attributes into one file.
as we need it...

files have work with json5 spec: https://json5.org/

install and use: https://github.com/jprichardson/node-jsonfile

or

https://github.com/sindresorhus/load-json-file

https://github.com/sindresorhus/parse-json


codegen of db with recipes. like we have a db-recipes and we actually convert the structure to match with our schema.
but what if someone what to have a different scheme. for this case we can actually use graphql server that will return data in different ways. maybe we need to have a wizard, that will send updated query and by result we'll send a json file to user...

check `node-csv`

#### Contributors

@vadim9999, @MinkoJ2, @chauhannishith, @atherdon, @GuiFSs, @kraftaa, @aanchirinah

#### Credits

Created with help of this articles:
https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738
https://medium.com/@adrianli/the-idiot-s-guide-to-publishing-a-react-component-to-npm-2b66b1ac03e0
