
let table_name = 'Diet'
let pattern = "d1";
const get = () => {

     let diet = [
     {
          name: "Lacto vegetarian",
          type: "diet"
     },
     {
          name: "Ovo vegetarian",
          type: "diet"
     },
     {
          name: "Pescetarian",
          type: "diet"
     },
     {
          name: "Vegan",
          type: "diet"
     },
     {
          name: "Lacto-ovo vegetarian",
          type: "diet"
     },
     {
          name: "Paleo",
          type: "diet"
     }
     ];

     return diet;

};

const patternify = (pattern) => {
  var index = 0;
  return _.map(get(), (item) => item.id = pattern + index.toString() );

}

module.exports.get     = get;
module.exports.pattern = pattern;
// module.exports.table_name   = table_name;
