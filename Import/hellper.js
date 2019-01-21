// const Raven   = require('raven');

const debug   = require('debug');

// const _       = require('underscore');

const _       = require('lodash');

// @TODO move id to config file. or we use it in a lot of places.
// Raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();
// let raven

const get_id_array = (array) => {

  if ( !array ){
    return { error: 'Cannot attach an empty array of ids' }
    // raven.captureException();
  }

  // if ( !array ){
  //   raven.captureException('Cannot attach an empty array of ids');
  // }
  console.log('strong debug process - get_id_array')





  return _.map( _.pluck(array, 'id'), item => item.toString() );

};

// raven is for exception catcher

// cb for callbacks of this method. maybe we need to have it, cause we use some data in import file.
// But maybe it can be limited...

// database is important for creating new
// model is a model name, that we use fo passing data
// @TODO and checking is model exist and create a variables from array by easiest way. i saw similar sutff at jQuery libraries.


const create = (options, wrapper, cb) => {

  // let server
  // let database
  // let raven
  // let predata

  const { server, database, raven, predata } = options ;

  if( !options ){  return { error: 'Options was not specified' }}
  if ( !cb ) {     return { error: 'Callback was not specified' }}
  if ( !wrapper && !wrapper.table_name ) {  return { error: 'Model was not specified' }}

  // if( !options ){ raven.captureException('Options was not specified'); }
  // if ( !cb ) { raven.captureException('Callback was not specified'); }
  // if ( !wrapper && !wrapper.table_name ) { raven.captureException('Model was not specified'); }





  console.log('strong debug process - create')

  let Model      = server.models[wrapper.table_name];
  let table_name = wrapper.table_name;


  let data       = ( !predata ) ? wrapper.get() : wrapper.get(predata) ;

  console.log('strong debug process - before')

  database.autoupdate(table_name, function(err){
    if (err) {
      // raven.captureException(err);
      return cb(err);
    }

    console.log('strong debug process - inside')

    Model.create(data, cb);
    console.log(Model);
    // Model.create(data, (err,d) => {
    //   console.log(d)
    // });
    //@TODO add wrapper for debug options. cause i have to comment it every time

  });

  // debug('model created!'); // @TODO

};


// @TODO use this version, it's very many huge fresh
// array_ids - where we get data from
// collection - where we put our data
// attribute - key at collection
const attach = ( array_ids, collection, attribute ) => {

   var arrayWithIds = get_id_array( array_ids );

   // if attribute is string then use it. if attribute is array with count 1 - use it
   // if attribute have more elements - we need to pick stuff. @TODO

   console.log('strong debug process - attach')

   //@TODO check if collection is simple item, not an array

   _.map( collection, item => item.updateAttribute(attribute, arrayWithIds) )




          // console.log(collection);
          // debug('attach attached!'); // @TODO
};


module.exports = {
  get_id_array,
  create,
  attach
};
