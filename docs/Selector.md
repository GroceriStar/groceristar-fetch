---
id: Selector
title: Selector
---

In selector.js should import fetch like this
```
import { groceristar } from "@groceristar/groceristar-fetch";
```
then create function
```
const getAllIngredients = () => {
  return groceristar.getIngredients();
}
```
and add to export
```
export {
  getAllIngredients,
  ...
}
```
To use this function you will need to import like this
```
import { getAllIngredients } from '../../selectors/selector';

getAllIngredients();
```
