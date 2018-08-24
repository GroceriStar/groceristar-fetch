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
var gf = require('@groceristar/groceristar-fetch')
var measurements = gf.getMeasurements();

// returns array of measurements object containing singular, plural and abbreviation

example
{
    "singular": "gram",
    "plural": "grams",
    "abbreviation": "g"
}
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
var gf = require('@groceristar/groceristar-fetch')
console.log(data);

import gf from '@groceristar/groceristar-fetch'
```

#### Tests

`npm test`


#### Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.
