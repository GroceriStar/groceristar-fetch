const _ = require('underscore')
// const async = require('async')
const raven = require('raven')

// @TODO move id to config file. or we use it in a lot of places.
raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install()

// let raven
// @TODO change this name
const daId = (array) => {
  // console.log(array)
  if (!array) {
    raven.captureException('Cannot attach an empty array of ids')
  }

  return _.map(_.pluck(array, 'id'), item => item.toString())
}

// raven is for exception catcher

// cb for callbacks of this method. maybe we need to have it, cause we use some data in import file.
// But maybe it can be limited...

// database is important for creating new
// model is a model name, that we use fo passing data
// @TODO and checking is model exist and create a variables from array by easiest way. i saw similar sutff at jQuery libraries.

// const create_ingredients = (options, wrapper, cb) => {
//   if( !options ){ raven.captureException('Options was not specified');  }
//   if ( !cb ) {    raven.captureException('Callback was not specified'); }
//   if ( !wrapper && !wrapper.tableName ) { raven.captureException('Model was not specified'); }
//   let server
//   let database
//   let raven
//   let predata
//   ( {server, database, raven, predata} = options );
//
//
//     let Model      = server.models[wrapper.tableName];
//     let tableName = wrapper.tableName;
//
//
// };

// @TODO it's a stupid duplicate. as usually - want to speed up development
const createWithRelations = (options, datazzzz, wrapper, cb) => {
  let server, database, raven
  ({
    server,
    database,
    raven
    // predata
  } = options)
  if (!options) { raven.captureException('Options was not specified') }
  if (!cb) { raven.captureException('Callback was not specified') }
  if (!wrapper && !wrapper.tableName) { raven.captureException('Model was not specified') }

  let Model = server.models[wrapper.tableName]
  let tableName = wrapper.tableName

  // @TODO change this name.
  let data = datazzzz

  database.autoupdate(tableName, function (err) {
    if (err) {
      raven.captureException(err)
      return cb(err)
    }

    Model.create(data, cb)
    // Model.create(data, (err,d) => {
    //   console.log(d)
    // });
    // @TODO add wrapper for debug options. cause i have to comment it every time
  })

  // debug('model created!'); // @TODO
}

const create = (options, wrapper, cb) => {
  if (!options) { raven.captureException('Options was not specified') }
  if (!cb) { raven.captureException('Callback was not specified') }

  if (!wrapper && !wrapper.tableName) { raven.captureException('Model was not specified') }

  // console.log(options.raven)

  let server, database
  ({ server, database } = options)

  // let server, database, raven, predata
  //   ( {server, database, raven, predata} = options );

  let Model = server.models[wrapper.tableName]
  let tableName = wrapper.tableName

  // @TODO change this make it work backwards.
  let data =
  // ( !predata )
                      // ?
                      wrapper.get()
                      // : wrapper.get(predata) ;

  console.log(data)

  database.autoupdate(tableName, function (err) {
    if (err) {
      raven.captureException(err)
      return cb(err)
    }

    // if( debug ){
    // Model.create(data, (err,d) => {
    //   console.log(d)
    // });
    // } else {
    Model.create(data, cb)
    // }
    // @TODO add wrapper for debug options. cause i have to comment it every time
  })

  // debug('model created!'); // @TODO
}

// @TODO use this version, it's very many huge fresh
// array_ids - where we get data from
// collection - where we put our data
// attribute - key at collection
const attach = (arrayIds, collection, attribute) => {
  const getIdArray = (array) => {}
  var arrayWithIds = getIdArray(arrayIds)

  // if attribute is string then use it. if attribute is array with count 1 - use it
  // if attribute have more elements - we need to pick stuff. @TODO

  // @TODO check if collection is simple item, not an array
  _.map(collection, item => item.updateAttribute(attribute, arrayWithIds))

  // console.log(collection);
  // debug('attach attached!'); // @TODO
}

const getImportedDataForRelateFunction = async (options, tableName) => {
  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

  // @TODO apply this changes to all import model files
  let server, raven
  ({
    server,
    // database,
    raven
  } = options)

  // let recipes
  let collection // ?? @TODO pick a better name later
  try {
    let Model = server.models[tableName]
    collection = await Model.find({})
  } catch (e) {
    raven.captureException(e)
    // this will eventually be handled by your error handling middleware
    // next(e)
  }
  // end of what i don't like

  return collection
}

const findAllDataCopyOfFunctionAbove = async (options, cb) => {
  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

  // @TODO apply this changes to all import model files
  let tableName
  let server, raven
  ({
    server,
    // database,
    raven
  } = options)

  let collections
  try {
    let modelInstance = server.models[tableName]
    collections = await modelInstance.find({})
  } catch (e) {
    raven.captureException(e)
    // this will eventually be handled by your error handling middleware
    // next(e)
  }
  // end of what i don't like

  // -------------------------------

  // @TODO NOT SURE HOW I CAN CALL CALLBACK AND ALSO RUN ATTACH FUNCTION.
  cb(collections)
}

const isImported = (results, tables) => {
  _.map(tables, (item) => {
    if (!results.item) { raven.captureException('not imported well') }
  })
}

module.exports = {
  da_id: daId,
  create: create,
  // cReate:cReate,
  attach: attach,
  get_data: getImportedDataForRelateFunction,
  createWithRelations: createWithRelations,
  isImported: isImported,
  findAllDataCopyOfFunctionAbove: findAllDataCopyOfFunctionAbove
}
