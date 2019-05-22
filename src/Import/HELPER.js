/// ///////////
// SEARCH FROM

/// ////
// GS FROM

// raven is for exception catcher

// cb for callbacks of this method. maybe we need to have it, cause we use some data in import file.
// But maybe it can be limited...

// database is important for creating new
// model is a model name, that we use fo passing data
// @TODO and checking is model exist and create a variables from array by easiest way. i saw similar sutff at jQuery libraries.

// const create_ingredients = (options, wrapper, cb) => {
//   if( !options ){ raven.captureException('Options was not specified');  }
//   if ( !cb ) {    raven.captureException('Callback was not specified'); }
//   if ( !wrapper && !wrapper.table_name ) { raven.captureException('Model was not specified'); }
//   let server
//   let database
//   let raven
//   let predata
//   ( {server, database, raven, predata} = options );
//
//
//     let Model      = server.models[wrapper.table_name];
//     let table_name = wrapper.table_name;
//
//
// };

// @TODO it's a stupid duplicate. as usually - want to speed up development
const createWithRelations = (options, datazzzz, wrapper, cb) => {
  const {
    server,
    database,
    raven
    // predata
  } = options
  if (!options) { raven.captureException('Options was not specified') }
  if (!cb) { raven.captureException('Callback was not specified') }
  if (!wrapper && !wrapper.table_name) { raven.captureException('Model was not specified') }

  // let server, database, raven, predata

  let Model = server.models[wrapper.table_name]
  let tableName = wrapper.table_name

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
  const {
    server,
    database,
    raven
  } = options
  if (!options) { raven.captureException('Options was not specified') }
  if (!cb) { raven.captureException('Callback was not specified') }
  if (!wrapper && !wrapper.table_name) { raven.captureException('Model was not specified') }

  // console.log(options.raven)

  // let server, database

  // let server, database, raven, predata
  //   ( {server, database, raven, predata} = options );

  let Model = server.models[wrapper.table_name]
  let tableName = wrapper.table_name

  let data =
  // ( !predata )
  // ?
  wrapper.get()
  // : wrapper.get(predata) ;

  // console.log(data);

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

const getImportedDataForRelateFunction = async (options, tableName) => {
  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

  // @TODO apply this changes to all import model files
  // let server, database, raven
  const {
    server,
    // database,
    raven
  } = options

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

const findAllDataCopyOfFunctionAbove = async (options, cb, tableName) => {
  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

  // @TODO apply this changes to all import model files
  // let server, database, raven
  const {
    server,
    // database,
    raven
  } = options

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
  const err = {}
  cb(err, collections)
}

// i think it should return true at some cases...
// or it's just for just catching an error...
const isImported = (results, tables, reven) => {
  // _.map(tables, (item) => {
  //   if (!results.item) { raven.captureException('not imported well') }
  // })
}
//
// const is_imported = ( results, tables ) => {
//
// if ( _.isEmpty( item ) ) {
//      return { error: "not imported well" }
// }

//   _.map(tables, (item) => {
//     if( !results.item ){
//       return { error: "not imported well" }
//     }
//       // raven.captureException();
//   });
//
// }

module.exports = {
  // da_id    : da_id,
  create: create,
  // cReate:cReate,
  // attach   : attach,
  get_data: getImportedDataForRelateFunction,
  createWithRelations: createWithRelations,
  is_imported: isImported,
  find_copy: findAllDataCopyOfFunctionAbove
}
