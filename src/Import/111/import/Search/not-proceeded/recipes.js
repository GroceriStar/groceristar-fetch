
// const debug = require('debug');
const async = require('async');
const _     = require('underscore');

// let Model
// let database
let table_name = 'Recipe'
// let raven

// @TODO not clear, how we can know which attribute to use?
let attributes = [
  'attributes',  // #0
  'ingredients'  // #1
  // 'nutritions', // #0

];

const get = () => {

    var data     = [
      {
          title   : "Baked Chicken Chimichangas, Borracho Beans",
          directions: [
              "1",
              "2",
              "3",
              "4"
          ],
          prep_time    :"PT30M",
          total_time   :"PT3H",
          recipe_yield :"8",
          img: "http://img.sndimg.com/food/image/upload/h_479,w_639,c_fit/v1/img/recipes/51/78/46/BKN9rVETnqVjW3zddIJ1_0S9A4664.jpg",
          url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208",
      },
      {
        title: "Perfect Apple Pie",
        directions: [
            "1 Heat oven to 425°F. Place 1 pie crust in ungreased 9-inch glass pie plate. Press firmly against side and bottom.",
            "2 In large bowl, gently mix filling ingredients; spoon into crust-lined pie plate. Top with second crust. Wrap excess top crust under bottom crust edge, pressing edges together to seal; flute. Cut slits or shapes in several places in top crust.",
            "3 Bake 40 to 45 minutes or until apples are tender and crust is golden brown. Cover edge of crust with 2- to 3-inch wide strips of foil after first 15 to 20 minutes of baking to prevent excessive browning. Cool on cooling rack at least 2 hours before serving."
        ],
        prep_time    :"PT30M",
        total_time   :"PT3H",
        recipe_yield :"8",
        img: "http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",
        url: "http://google.com",
      },
      {
        title: "Basic Fruit Salad",
        directions: [
            "Cut the apple into cubes",
            "Cut the banana into slices",
            "Peel the orange, and divide into segments",
            "Combine all ingredients in a bowl",
            "Mix to combine",
        ],
        prep_time    :"PT30M",
        total_time   :"PT3H",
        recipe_yield :"8",
        img: "http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",
        url: "http://google.com",
      },
      {
        title : "Crock Pot Roast",
        directions: [
          "Place beef roast in crock pot.",
          "Mix the dried mixes together in a bowl and sprinkle over the roast.",
          "Pour the water around the roast.",
          "Cook on low for 7-9 hours."
        ],
        prep_time    :"30min",
        total_time   :"3h",
        recipe_yield :"4",
        img: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
        url: "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"
      },
      {
        title : "Bacon Fried Rice",
        directions: [
          "Fry bacon until crispy. Remove from pan and drain on paper towels. Chop into bits and set aside.",
          "Using the same pan, remove some of the bacon grease (if necessary) so you have about 3 tablespoons left in the pan. Add onion and saute until translucent. Add garlic and saute for 1 minute longer.",
          "Add bacon rice, soy sauce, oyster sauce and black pepper. Stir-fry for 3 to 5 minutes. Taste for seasoning and adjust as necessary.",
          "Drizzle with sesame oil, top with fried egg and scallions."
        ],
        prep_time    :"20min",
        total_time   :"1h",
        recipe_yield :"6",
        img: "http://www.kitchengidget.com/wp-content/uploads/2015/08/Bacon-Fried-Rice-4.jpg",
        url: "http://www.kitchengidget.com/2015/08/08/bacon-fried-rice/"
      }
     ];

  	return data;

};





const relate2 = async (options, results, helper) => {

  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

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

  // var cc = helper.get_data(options, table_name);

  // console.log(cc);
// ......

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  // console.log(results);
  // console.log(recipes);
  //@TODO change that. so bad and stupid. but fast
  helper.attach( results[0], [ recipes[0] ], attributes[1] );
  helper.attach( results[1], [ recipes[1] ], attributes[1] );
  helper.attach( results[2], [ recipes[2] ], attributes[1] );
  helper.attach( results[3], [ recipes[3] ], attributes[1] );


  // @TODO work not very best, because when we creating models,
  // that cannot be async apply - we must to add that array into results array/object
  // helper.attach( results.ingredients,    recipes, attributes[1]);




};


const relate3 = async ( options, results, helper ) => {

  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

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

  // var cc = helper.get_data(options, table_name);

  // console.log(cc);
// ......

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  // console.log('-----');
  // console.log(results.recipes);

  console.log( _.pick(results.attributes, 'id', 'type') );
  // @TODO so shitty way.....
  let created_allergies = _.where(results.attributes, {type: "allergy"}), 
      created_courses   = _.where(results.attributes, {type: "course"}), 
      created_cuisines  = _.where(results.attributes, {type: "cuisine"}), 
      created_diets     = _.where(results.attributes, {type: "diet"}), 
      created_holidays  = _.where(results.attributes, {type: "holiday"});


  console.log(created_allergies);
  console.log(created_courses);
  console.log(created_cuisines);
  console.log(created_diets);
  console.log(created_holidays);



  //@TODO change that. so bad and stupid. but fast
  // let attributes_for_recipe1, 
  //   attributes_for_recipe2,
  //    attributes_for_recipe3,
  //     attributes_for_recipe4;


  //     attributes_for_recipe1 = created_allergies[0] created_allergies[1] created_allergies[2]
  //     attributes_for_recipe2 = created_allergies[1] created_allergies[2]
  //     attributes_for_recipe3 = created_allergies[2] created_allergies[3]
  //     attributes_for_recipe4 = created_allergies[3] created_allergies[4]

  //     attributes_for_recipe1 = created_courses[0] created_courses[1] created_courses[2]
  //     attributes_for_recipe2 = created_courses[1] created_courses[2]
  //     attributes_for_recipe3 = created_courses[2] created_courses[3]
  //     attributes_for_recipe4 = created_courses[3] created_courses[4]

  //     attributes_for_recipe1 = created_cuisines[0] created_cuisines[1] created_cuisines[2]
  //     attributes_for_recipe2 = created_cuisines[1] created_cuisines[2]
  //     attributes_for_recipe3 = created_cuisines[2] created_cuisines[3]
  //     attributes_for_recipe4 = created_cuisines[3] created_cuisines[4]

  //     attributes_for_recipe1 = created_diets[0] created_diets[1] created_diets[2]
  //     attributes_for_recipe2 = created_diets[1] created_diets[2]
  //     attributes_for_recipe3 = created_diets[2] created_diets[3]
  //     attributes_for_recipe4 = created_diets[3] created_diets[4]

  //     attributes_for_recipe1 = created_holidays[0] created_holidays[1] created_holidays[2]
  //     attributes_for_recipe2 = created_holidays[1] created_holidays[2]
  //     attributes_for_recipe3 = created_holidays[2] created_holidays[3]
  //     attributes_for_recipe4 = created_holidays[3] created_holidays[4]    
      
        
  // console.log( _.where(results.attributes, {type: "holiday"}) );
  // helper.attach( results[0], [ recipes[0] ], attributes[0] );
  // helper.attach( results[1], [ recipes[1] ], attributes[0] );
  // helper.attach( results[2], [ recipes[2] ], attributes[0] );
  // helper.attach( results[3], [ recipes[3] ], attributes[0] );


  // @TODO work not very best, because when we creating models,
  // that cannot be async apply - we must to add that array into results array/object
  // helper.attach( results.ingredients,    recipes, attributes[1]);




};


const relate_brand_new = async ( results, helper) => {
  if( !results
      || !results.recipes
      || !results.attributes
    ) {
        raven.captureException("cannot attach additional data to recipes");
  }

  let collections
  try {

    collections = await helper.find_all_data_copy_of_function_above(options, (err, collection) => {

      helper.attach( results.attributes, collection, attributes[0]);

    });
    
    helper.find_all_data_copy_of_function_above(options)
          .then((err, collection) => {

            helper.attach( results.attributes, collection, attributes[0]);

          });


  } catch (e) {
    raven.captureException(e);
    //this will eventually be handled by your error handling middleware
    next(e)
  }

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  helper.attach( results.attributes, collection, attributes[0]);

  // @TODO work not very best, because when we creating models,
  // that cannot be async apply - we must to add that array into results array/object
  // helper.attach( results.ingredients,    recipes, attributes[1]);

};

const relate = async (options, results, helper) => {

  // this is a hardcode. @TODO handle this later.
  // I don't like that we're searching all recipes at this method

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

  // var cc = helper.get_data(options, table_name);

  // console.log(cc);

  if( !results
    // || !results.allergies
    || !results.recipes
    || !results.attributes

    ) {
        raven.captureException("cannot attach additional data to recipes");
  }

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  helper.attach( results.attributes,  recipes, attributes[0]);

  // @TODO work not very best, because when we creating models,
  // that cannot be async apply - we must to add that array into results array/object
  // helper.attach( results.ingredients,    recipes, attributes[1]);

};


module.exports.get   = get;
module.exports.table_name   = table_name;
module.exports.relate = relate;
module.exports.relate2 = relate2;

module.exports.relate3 = relate3;