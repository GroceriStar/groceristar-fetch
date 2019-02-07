
#### Unprocessed 'junk' - things that we should keep here.

connect with https://github.com/GroceriStar/fetch-constants

---
Tasks:
- [ ] [Search Form static data](https://github.com/GroceriStar/static-data/issues/14)
- [ ] [ChickenKyiv Free Menu Release import data](https://github.com/GroceriStar/static-data/issues/10)
---

@TODO use different flags for one command in order to call different imports

[npm-run-script](https://docs.npmjs.com/cli/run-script)



[Introduction to NPM Scripts](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633)

```npm run test -- --arg="search"```

@TODO add tests


-------------


#### Project: Meal Calendar
https://medium.com/groceristar/meal-planning-calendar-8526754813cc
repo: https://github.com/GroceriStar/calendar



#### Groceristar GraphQL Server
1) Release: similar to GS as it is
2) as GS plus Items, maybe Measurements

#### GS current database release (operated at Loopback server)
https://medium.com/groceristar/database-schema-of-groceristar-current-release-20dc1b4be7b9


----

https://medium.com/@19majkel94/graphql-typescript-typegraphql-ba0225cb4bed
https://tylermcginnis.com/building-serverless-react-graphql-apps-with-aws-appsync/
https://sangria-graphql.org/learn/
https://scotch.io/tutorials/build-a-health-tracking-app-with-react-graphql-and-user-authentication

---

Get important information from Articles
https://medium.com/groceristar/chickenkyiv-database-logic-intro-part-1-b2c449d92aa3
https://medium.com/groceristar/chickenkyiv-database-logic-simple-samples-part-2-1ee3ccc6b3d
https://medium.com/groceristar/chicken-kyiv-recipe-db-schema-part3-b80f33ec5d96



https://github.com/ChickenKyiv/creative/tree/master/database-schemes

---
https://github.com/GroceriStar/groceristar-fetch/issues/26
https://github.com/GroceriStar/groceristar-fetch/issues/60
https://github.com/GroceriStar/groceristar-fetch/issues/140

---


I think that I don't want to have a `default` classes like below.
by my experience, they not perfect. and usually easy to be outdated.
if we need to get or set - we can use lodash _.get, _.set

ex from: https://github.com/andrewgrewell/structy

```
class Burger extends Model {
    constructor(data) {
        // call Model constructor and pass the burger data and fieldConfig
        super(data, burgerConfig);
    }

    // even though the consumer of this Burger Model could use Burger.name, it is better
    // to document the shape of your data via getters and setters.
    getName() {
        return this.name;
    }

    isFavorite() {
        return this.favorite;
    }

    setFavorite(fav) {
        // note: setters are required since the data is immutable
        // this.favorite = fav will throw
        return this.set('favorite', fav);
    }
```

I was also thinking about incorporating immutablejs stuff, but it's not a good option for us too.


https://github.com/GroceriStar/graphql-server/issues/3
https://github.com/GroceriStar/graphql-server/issues/23
https://github.com/GroceriStar/graphql-server/issues/18
https://github.com/GroceriStar/graphql-server/issues/11
https://github.com/GroceriStar/graphql-server/issues/9
https://github.com/GroceriStar/graphql-server/issues/6
https://github.com/GroceriStar/graphql-server/issues/4



https://codeburst.io/large-offline-datasets-with-apollo-client-c19c987e4a98
https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API






--------

Rabbit hole:
https://github.com/globalizejs/globalize
http://airbnb.io/polyglot.js/
https://formatjs.io/
https://github.com/globalizejs/globalize#plural-module


---


https://github.com/americanexpress/jest-json-schema#tomatchschemaschema

https://github.com/camsong/fetch-jsonp

https://github.com/facebook/jest/blob/master/examples/module-mock/__tests__/full_mock.js


code gen at `files`: create a hash map, similar that we have at search.js for returning all raw files.... it'll avoid issues with updating t by hands.

create method that will `_.unite` all attributes into one file.
as we need it...

files have work with json5 spec: https://json5.org/

install and use: https://github.com/jprichardson/node-jsonfile

or

https://github.com/sindresorhus/load-json-file

https://github.com/sindresorhus/parse-json


codegen of db with recipes. like we have a db-recipes and we actually convert the structure to match with our schema.
but what if someone what to have a different scheme. for this case we can actually use graphql server that will return data in different ways. maybe we need to have a wizard, that will send updated query and by result we'll send a json file to user...

check `node-csv`

2nd generation of the plugin: https://github.com/GroceriStar/fetch2

set of constants that we'll use: https://github.com/GroceriStar/fetch-constants

@TODO complete json validation at jsonlint.config.js right now i stuck with paths. And i'm on Windows and it's not an ideal conditions for package that works at unix systems

Explore https://blog.usejournal.com/structurae-data-structures-for-high-performance-javascript-9b7da4c73f8
https://github.com/zandaqo/structurae
