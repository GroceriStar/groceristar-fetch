## Organizational problems

#### Current version of plugin is ES5 version.
Problems:
- not minifying, so when we deploy on Netlify our create-react-app's it's crashing deploy.
- We didn't build our code, didn't using ESLint and tests

#### Code organization and structure
My goal was just to keep all static files/data in a same separated place at the begining.
So we didn't keep a lot of attention about what structure we have.
right now we have 2 main folders: `data`, `projects`.

**Data**  just have all of our files/tables/structures at separated folders.

**Projects**  have sub-folders, each sub-folder

**!idea** i don't like the way how we're debugging our new methods. we have a play.js file where we can console.log some of our functions, but it's not cool to have them into our npm published version.
this can be fixed by moving to ES6 + Babel7 builds, where we extend \*.play.js files out, but still keeping them at our github repos.

#### Projects
Problem: Number of project/branches is growing, and we add a new methods and everything start to look overcomplicated.

Files and json structures have a legacy of my first Loopback servers(each of this servers are holding us back).

And code that we have are 1.5 years old and a lot of things has changed.

Priority: first priority for me: have cool working methods, that i need at this moment for CK server. I'm working on fixing import to our old servers.
When it will be done, we will be able to import of big amount of data that we have here.

We can separate most of tasks/discussion into 2 major things
1) related to json data
2) related to methods

After finishing with CK API we'll have also updated import script for GS + Search functionality.

Next priority is our GS project.

Big part discussion is also about structure. But it's not on easy to think about for me, if someone wants -> let's file a separated issue and explore it too.


I also thinking about having a separate npm package and move away our methods so like json stored at one place -> methods in others.
it give us an ability to split development process into few ways.





---

Поняв, что эти обновления сделать будет не просто - я решил отделить часть проекта в fetch2. Идея этого проекта проста, обновить проект по частямб когда доделаем все -> тогда и можно будет перенести все в основной репозиторий и обновить наши проекты


Testing is our big issue too. Right now any big updates can break things. For sure, some of our current test coverage preventing a lot of troubles, but i don't feeling secure, when merging our pull requests...
It can be better. i'm 100% sure about it.

-----

if we need to have a separate place, where i can specify quick and simple to do tasks, tell me.

---

If right now we'll put our focus in releasing big major update(aka release 2) - we'll crash all of our small projects that we're working on.
If it wouldn't crash anything - then we're doing bad :()
But I think we can find a way - that will prevent from everything went down.
But it's not a simple thing for sure.

One of my ideas was to add Flow and Immutable.js, but right now i think that we're far away from moving our codebase into this way. I cannot do it on my own, and it'll take good amount of time.


1) Уменьшить количество methods
2) Вынос повторяющегося методов во вне
3) Обеспечить более простой способ доступа к данным и изменений их видов в 80% случаев мы берем данные, перебираем из в `map` - делаем новые структуры.
4) вынести default getters out

the new way for connecting array at GL - this is a good example of how our current way to connect data are not ideal.


Calendar(Meal Calendar) or food log(Recipes + dates from calendar) can be our next goals after GS.
At GS we have a lot of methods, related to updates of our data. It's plain JS, but i'm not sure how to move this information directly to other hands. Partially it's explained [article] & [docs] ...


Большинство этих методов связанных с изменениями JS objects aka one id replaced with other id, or unshift id from array of ids...
before sending them to db

This API server also have our old frontend version and it's "dirty" after it ;)

And this was our other problem, and the reason why we migrating Frontend to React.

(!I) Ask Audax to help us too. But after cards???


---

#### Moving away JSON files
By Moving away our JSON files, мы получаем более удачное имя для static data, it will
be easy to test and compile. An additional plus for promotion and clearing stuff.
Ex: Marina updating json files, and build generate an error. And this is good, but it can be done in more automatically way. Split also will help us with plugin transition into next major release...

Also separation for data until make it more easy for ML team, that working out OCR
scripts
https://medium.com/groceristar/ocr-project-part1-simple-introduction-ab7b64bf1864
https://medium.com/groceristar/ocr-project-part2-details-85739239f42
https://medium.com/groceristar/ocr-project-part3-links-collection-2cfc58904caf


We actually have another repo where we have old version of fetch plugin:
https://www.npmjs.com/package/@groceristar/static-data
https://github.com/GroceriStar/static-data

it was a just a storage for us, but lately we move into our fetch repository.
If we'll go into separation way(I assume that we should move our data into that repo). But we'll need to clean it up, and update the json files. And connect that plugin with `fetch` plugin.

I find some cool plugins, like : https://www.npmjs.com/package/gray-matter
it can help us with parcing method i think. It also have some intersections with another project that i want to build, so maybe we should review it too and decide to use or not rigth now.
---

About data structures.
Maybe there is some rules, plugins, tools, to create separated files/Nodes/Tables from one big file or create big one from separated. I find some interesting approach at graphql documents. But it's still early to start to use it.
