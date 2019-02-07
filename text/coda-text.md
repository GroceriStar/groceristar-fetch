
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

  Еще одна из задач: это упрощение логики работы скрипта импорта в базу данных.
  До этого, раньше это был сложный процесс, а еще же нам надо предусмотреть то, что у нас есть graphQL сервер и в него тоже нужно будет делать импорт, когда мы уже откажемся от старой работы нашего сервера


  Скрипт импорта предыдущий я тоже с радостью удалю. Он нам уже непонадобится.

  Еще есть ML команда, которая тоже работает над тем, чтобы увеличить коллекцию наших
  Grocery Lists и дальше они тоже будут добавленны в наш проект.



  ===


  Сказать что код этого плагина сейчас не ES6 и другие проекты изза этого делают ошибку в момент билда проекта и скорее
  всего нам прийдется плагни переделывать под другой toolset, который позволит использовать babel,
  который будет компилировать наш код и т.о. у нас заработает builds проектов - будет работать minifications
  и перестанет происходить быть ошибка builds.

------

if we move whole fetch plugin at ES6 version, we'll need to replace JSON files
into JS arrays, because JSON has issues with our babel builds before

  -----
So maybe whole idea, realted to split are good and maybe we should start it right away.

  ----

Question, related to import, that should be raised too.
  I want to develop simple, modular approach for import script (one table can be adjusted without breaking the whole import process)
  approach для импорта.

  Что нам надо(let's check the simple DB schema, that we have at GS)

  создаем - залили - добавили в базу записи о Grocery Lists ->
   взяли все Departments, принадлежащие этому GL и добавили в базу(попутно проверяя эти Departments for duplicates)
   (if duplicate -> avoid adding, but grabbing Dep Id of this field)
   потому взяли все(смотреть схему тут) Ingredients(создаем или получаем их ID) ->
   параллельно связывая Ingredients with Departments, которые были созданны


  (можно как перебором по основной базе - long) или передать данные о Department IDS в функционал ---
  создающую Ingredients.


  Также DepIDS нужно отправить и сохранить в нашей записи о GL(наверное обновив ее или сделать функции создания GL записи
  await -> пока все данные не соберуться вместе).

  Data about Ingredients, using mongoDB Ingredients


---

I think soon or later we should change the package name. Because npm has other popular module with name fetch. it related to requests from API server. And i want to separate some methods, that looks stupid, but we using them in our work.
Separated files can have move popularity and can be used not just at JS projects.


---

https://github.com/GroceriStar/static-data/tree/master/dist/import/Groceristar

https://trello.com/c/A21ywVVV/37-plans
