//////////////
// SEARCH FROM






///////
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

//@TODO it's a stupid duplicate. as usually - want to speed up development
const create_with_relations = ( options, datazzzz, wrapper, cb ) => {

  if ( !options ){ raven.captureException('Options was not specified');  }
  if ( !cb )     { raven.captureException('Callback was not specified'); }
  if ( !wrapper && !wrapper.table_name ) { raven.captureException('Model was not specified'); }

  let server, database, raven, predata
  const  {server, database, raven, predata} = options ;

  let Model      = server.models[wrapper.table_name];
  let table_name = wrapper.table_name;


  let data       = datazzzz ;

  database.autoupdate(table_name, function(err){
    if (err) {
      raven.captureException(err);
      return cb(err);
    }

    Model.create(data, cb);
    // Model.create(data, (err,d) => {
    //   console.log(d)
    // });
    //@TODO add wrapper for debug options. cause i have to comment it every time

  });

  // debug('model created!'); // @TODO

};


const create = (options, wrapper, cb ) => {

  if ( !options ){ raven.captureException('Options was not specified');  }
  if ( !cb )     { raven.captureException('Callback was not specified'); }

  if ( !wrapper && !wrapper.table_name ) { raven.captureException('Model was not specified'); }

   // console.log(options.raven)

  let server, database
  const  { server, database } = options ;

  // let server, database, raven, predata
  //   ( {server, database, raven, predata} = options );

  let Model      = server.models[wrapper.table_name];
  let table_name = wrapper.table_name;


  let data       =
  // ( !predata )
                      // ?
                      wrapper.get()
                      // : wrapper.get(predata) ;

// console.log(data);


  database.autoupdate(table_name, function(err){
    if (err) {
      raven.captureException(err);
      return cb(err);
    }

    // if( debug ){
      // Model.create(data, (err,d) => {
      //   console.log(d)
      // });
     // } else {
      Model.create(data, cb);
     // }
    //@TODO add wrapper for debug options. cause i have to comment it every time


  });

  // debug('model created!'); // @TODO

};





const get_imported_data_for_relate_function = async ( options, table_name ) => {

  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

  //@TODO apply this changes to all import model files
  let server, database, raven
  const { server, database, raven } = options ;


  // let recipes
  let collection //?? @TODO pick a better name later
  try {

    let Model  = server.models[table_name];
    collection = await Model.find({});


  } catch (e) {
    raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e)
  }
  // end of what i don't like

  return collection;
}


const find_all_data_copy_of_function_above = async (options, cb) => {

  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

  //@TODO apply this changes to all import model files
  let server, database, raven
  const { server, database, raven } = options ;

  let collections
  try {

    let modelInstance = server.models[table_name];
    collections       = await modelInstance.find({});

  } catch (e) {
    raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e)
  }
  // end of what i don't like


  //-------------------------------




  // @TODO NOT SURE HOW I CAN CALL CALLBACK AND ALSO RUN ATTACH FUNCTION.
  cb(err, collections);


};

const is_imported = (results, tables) => {

  _.map(tables, (item) => {
    if( !results.item )
      raven.captureException("not imported well");
  });

}
//
// const is_imported = (results, tables) => {
//
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
  create   : create,
  // cReate:cReate,
  // attach   : attach,
  get_data : get_imported_data_for_relate_function,
  create_with_relations: create_with_relations,
  is_imported: is_imported

};
