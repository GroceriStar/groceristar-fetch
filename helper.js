const path          = require('path');

// main reason for having this file, because i'm trying to move away repetetive functions
const parser = function(filename) {

  return JSON.parse(JSON.stringify(filename))

}

const sliceArray = ( array, number ) => {
  return array.slice(0, number);
}

const pathToJson = function() {
  // path.dirname(__filename)
  return path.dirname('./data/Allergy/allergies.json');
};

module.exports = {
  parser,
  pathToJson,
  sliceArray
}
