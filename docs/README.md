---
id: intro
title: Getting Started
sidebar_label: Getting Started
---

# Groceristar-fetch module

#### Synopsis
Food Tech related static data in json arrays, like recipes, ingredients, recipes, diets, allergies, etc.

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

#### Motivation

In a few our projects we have a similar files. And we always copy-paste code between them. So by moving this code into separated place - i hope we'll make our projects better.

#### Installation

Provide code examples and explanations of how to get the project.

`npm install @groceristar/static-fetch`
or
`yarn add @groceristar/static-fetch`

#### Usage

```
const { groceristar, search } = require('@groceristar/groceristar-fetch');
console.log(groceristar.getDepartments());
console.log(search.getAttribute('diets'));

//or
 
import { groceristar, mealCalendar } from '@groceristar/groceristar-fetch'
```

#### Tests

`npm test`

#### Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.
