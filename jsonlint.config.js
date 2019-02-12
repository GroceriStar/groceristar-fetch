// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
var shell = require('shelljs');
var path  = require('path');

const groceryFilePath = path.resolve(__dirname, './data/Grocery/grocery.json')
// console.log(path.resolve(__dirname, './data/Grocery/grocery.json'));
shell.exec("jsonlint " + groceryFilePath );
