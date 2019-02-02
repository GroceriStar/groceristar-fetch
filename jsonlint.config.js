// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
var shell = require('shelljs');
var path  = require('path');

console.log(path.resolve(__dirname, '../data/Grocery/grocery.json'));
// shell.exec("jsonlint /data/Grocery/grocery.json");
