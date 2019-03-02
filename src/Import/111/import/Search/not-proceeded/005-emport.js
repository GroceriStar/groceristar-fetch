const path     = require('path');
const async    = require('async');
const raven    = require('raven');
const _        = require('underscore');

raven.config('https://c1e3b55e6a1a4723b9cae2eb9ce56f2e:57e853a74f0e4db98e69a9cf034edcdd@sentry.io/265540').install();

let server      = require(path.resolve(__dirname, '../server/server'));
// @TODO update this, cause each time i need to pass a different sources.
let database    = server.datasources.searchDS;

//helper. short name for fast stuff
let h           = require(path.resolve(__dirname, '003-helper'));

// include middleware
// @todo make it auto-icludable from folder
let Attributes  = require(path.resolve(__dirname, 'attributes'));

let Departments = require(path.resolve(__dirname, 'departments'));

let Ingredient  = require(path.resolve(__dirname, 'ingredients'));

let Recipe      = require(path.resolve(__dirname, 'recipes'));


let options = {
	server: server,
	database: database
}


async.parallel({

	recipes     : async.apply(h.create, options, Recipe),
	departments : async.apply(h.create, options, Departments),
	attributes  : async.apply(h.create, options, Attributes)


}, function(err, results){

	h.is_imported(results, [
		'departments',
		'attributes',
		'recipes'
		]);

	// console.log(results.departments)

	const department_ids = h.da_id( results.departments );
	// console.log(department_ids);


	var department_id = department_ids[0];

	let ingredients = await h.cReate(options, Ingredients);

	var ingredients = Ingredient.get(department_id)

	h.create_with_relations(options, ingredients, Ingredient,
		( err, data ) => {

		// console.log(data);
		Recipe.relate2( options, data, helper );

	});

	Recipe.relate3( options, results, helper );

	console.log('import finished');



});









// const create_ingredients = async() => {
// 	let departo = await helper.create(options, Departments, true);

// 	console.log(departo);
// 	return 'pidor';
// };

// const create_departments = async() => {
// 	// console.log(options)
// 	let data = await helper.create(options, Departments);

// 	console.log(data);
// 	// console.log(_.pluck(data, 'id'));
// 	return _.pluck(data, 'id');
// };


// const create_recipes = async() => {

// 	let recipes = await helper.create(options, true, Recipe);

// };

// const create_attributes = async() => {
// 	let attributes = await helper.create(options, true, Recipe);
// };
// create_ingredients()
// 	.then( result => {
// 		console.log(result)

// 	})
// 	.catch(err => {
//         raven.captureException(err);
//     })



// const departments = () => {
// 	const data = await DePARAAA();
// 	return _.map(data, dsdsdasdas);

// 	//@TODO add try catch later, why not???
// };
// options => async
// const run_this_import_please = async() => {

// 	try {
// 		await create_departments()

// 			.then(
// 				result => console.log(result)
// 			);
// 	//     await oracledb.createPool(dbConfig);
// 	//     let emp = await employees.getEmployee(101);
// 	//     console.log(emp);
// 	} catch (err) {

// 		raven.captureException(err);
// 	}

// 	// console.log(options)
// 	// await departments().then( ingredients() )
// 	// console.log('13')
// 	// await create_departments(options)
// 	// 	.then(
// 	// 		result => console.log(result)
// 	// 	);
// 	// await attributes()
// 	// await recipes().then( attach attributes && attach ingredients )

// };



// run_this_import_please();

// async function startApp() {
//   try {
//     await oracledb.createPool(dbConfig);
//     let emp = await employees.getEmployee(101);
//     console.log(emp);
//   } catch (err) {
//     console.log('Opps, an error occurred', err);
//   }
// }
// startApp();
