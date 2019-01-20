
#### Unprocessed 'junk' - things that we should keep here.
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


I think that i don't want to have a `default` classes like below.
by my experience they not perfect. and usually easy to be outdated.
if we need get or set - we can use lodast _.get, _.set

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









