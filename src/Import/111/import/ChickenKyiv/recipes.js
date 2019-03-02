'use strict';

const debug = require('debug');
const async = require('async');

// let Model
// let database
let table_name = 'Recipe'
let raven

// @TODO not clear, how we can know which attribute to use?
let attributes = [
  'nutritions', // #0
  'cuisines',   // #1
  'diets',      // #2
  'holidays',   // #3
  'courses',    // #4
  'allergies'   // #5
];





const relate = async (options, results, helper) => {

  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method
  // let server = options[0];
  // let helper = options[1];
  // let raven  = options[2];
  //@TODO apply this changes to all import model files
  let server
  let database
  let raven
  ( {server, database, raven} = options );


  let recipes
  try {

    let Recipe = server.models[table_name];
    recipes    = await Recipe.find({});


  } catch (e) {
    raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e)
  }
  // end of what i don't like


  if( !results || !results.allergies || !results.recipes
      || !results.courses || !results.cuisines
      || !results.diets || !results.holidays
      || !results.nutritions) {
        raven.captureException("cannot attach additional data to recipes");
  }

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  helper.attach( results.allergies,  recipes, attributes[0]);
  helper.attach( results.courses,    recipes, attributes[1]);
  helper.attach( results.cuisines,   recipes, attributes[2]);
  helper.attach( results.diets,      recipes, attributes[3]);
  helper.attach( results.holidays,   recipes, attributes[4]);
  helper.attach( results.nutritions, recipes, attributes[5]);



};

module.exports = {
  // get: get,
  table_name: table_name,
  relate: relate
}
