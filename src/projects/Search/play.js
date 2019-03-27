const _ = require('lodash')


const search = require('../Search/search')

const {
  parser, pathToJson
} = require('../../helper')

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
//   { value: 'vanilla-ice', label: 'Vanilla Ice' },
//   { value: 'vanilla latte', label: 'Vanilla Latte' },
//   { value: 'vanilla Chino', label: 'Vanilla Chino' },
//   { value: 'vanilla double', label: 'Vanilla Double' }
// ]

// const options = [
//   { value: 'chocolate',  label: 'Chocolate', disabled: true},
//   { value: 'strawberry', label: 'Strawberry', disabled: false},
//   { value: 'vanilla',    label: 'Vanilla', disabled: true  },
//   { value: 'vanilla-ice',    label: 'Vanilla Ice', disabled: false},
//   { value: 'vanilla latte',    label: 'Vanilla Latte', disabled: false },
//   { value: 'vanilla Chino',    label: 'Vanilla Chino', disabled: false},
//   { value: 'vanilla double',    label: 'Vanilla Double', disabled: false }
// ];

// const data = search.getFormattedIngredients();

// const data = search.getFormattedAttributes('diets');
const data = search.getFormattedAttributes('allergies')
// console.log(data)
console.log(parser(search.file))


// console.log(_.isObject(data));
// console.log(  search.toOpt(data)  );
