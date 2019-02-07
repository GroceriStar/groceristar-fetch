
The reason why we have 3 files, related to our Grocery Lists.


1) I create this structure on my own. First goal for this hierarhy(file organization) was need to import
data into groceristar database. But in order to remove connection to our server, for different reasons, like applying all imortant settings, setup access token generation, granting access, etc...

All of this time GL are used as part of import script.

So logic was:

0) empty database, that connected to main project / production / 0 custom users
1) we deploying our server to Heroku hosting
1.1) run our clean up script that drop all tables and data at our database
1.2) run our import script that move static data into database
1.3) we can run our project
1.4) all pages renders well and calls without any issues.



====

Second task.
Testing and development of basic components in React projects.
We have 5-10 different projects and use components between them. We trying to make that components works independently and work well at stressed environment as well. Right now it's a wish, but we're working hard on it.

====

Just another task: simplifying logic of import at database.
Before it was a complex thing. We need to be aware that we need import working with our old servers,
but also we should prepare an updates, that will help with import, related to a new graphQL server.
and we maybe will update our database totally, when we'll migrate to graphql.

when our graphQL approach will work 100% i will be happy to remove our old import stuff.
because we wouldn't need it at all.


We need to keep in mind that right now Machine Learning team working on increasing number of grocery lists.
When they will finish it - our data will grow in 2-3x.



====

At this time - our plugin generate an issue at builds of react projects, created with help of create-react-app boilerplate.
Our new toolset will have a default setup of js libraries: babel, rollup.
babel will help us to setup minification process and this will help us to avoid crashing at React projects.


------

if we will move whole fetch plugin at ES6 version, we'll need to replace JSON files(only if we'll keep js code and files at the same plugin)
into JS arrays, because JSON has issues with our babel builds before

-----
So maybe whole idea, realted to split are good and maybe we should start it right away.

----

 Question, related to import, that should be raised too.
  I want to develop a  simple, modular approach for import script (one table can be adjusted without breaking the whole import process)

 What do we need to have for it?(let's check the simple DB schema, that we have at GS)

  Creating custom files - importing basic files without or with relations into db
  then add rows, related to grocery lists, fetching all departments, related to one grocery list, add this departemnts to db
  We can also check departments for duplicates. if it's a duplicate - we avoid adding it, but still need to relate department with groceryListId.
  Then we grabbing all Ingredients(you can see it in details at our db schema)
  Creating a new instances for Ingredients.
  Create relations between ingredients and Departments, that was created before.


   We can do it with a simple loop , or we can make some sort of middleman, that will be responsible only of Department IDs, that was created in a custom way, that is helping with setting up relations at Ingredients.



Same story with Department IDS and relation with grocery list.
We need to save them at our GL. Maybe update preiously imported rows, or creating GL object after all manipulations...
by await


  Data about Ingredients, using mongoDB Ingredients


---

I think soon or later we should change the package name. Because npm has other popular module with name fetch. it related to requests from API server. And i want to separate some methods, that looks stupid, but we using them in our work.
Separated files can have move popularity and can be used not just at JS projects.


---

https://github.com/GroceriStar/static-data/tree/master/dist/import/Groceristar

https://trello.com/c/A21ywVVV/37-plans
