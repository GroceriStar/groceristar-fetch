## Organizational problems

#### Current version of plugin is ES5 version.
Problems:
- not minifying, so when we deploy on Netlify our create-react-app's it's crashing deploy.
- We didn't build our code, didn't using ESLint and tests

#### Code organization and structure
My goal was just to keep all static files/data in the same separated place at the beginning.
So we didn't keep a lot of attention about what structure we have.
right now we have 2 main folders: `data`, `projects`.

**Data**  just have all of our files/tables/structures at separated folders.

**Projects**  have sub-folders, each sub-folder

**!idea** I don't like the way how we're debugging our new methods. we have a play.js file where we can console.log some of our functions, but it's not cool to have them into our npm published version.
this can be fixed by moving to ES6 + Babel7 builds, where we extend \*.play.js files out, but still keeping them at our GitHub repos.

#### Projects
Problem: Number of project/branches is growing, and we add new methods and everything starts to look overcomplicated.

Files and json structures have a legacy of my first Loopback servers(each of these servers are holding us back).

And code that we have are 1.5 years old and a lot of things has changed.

Priority: first priority for me: have cool working methods, that I need at this moment for CK server. I'm working on fixing import to our old servers.
When it will be done, we will be able to import of big amount of data that we have here.

We can separate most of the tasks/discussion into 2 major things
1) related to json data
2) related to methods

After finishing with CK API we'll have also updated import script for GS + Search functionality.

Next priority is our GS project.

The big part discussion is also about structure. But it's not on easy to think about for me if someone wants -> let's file a separated issue and explore it too.


I also thinking about having a separate npm package and move away from our methods so like json stored at one place -> methods in others.
it gives us an ability to split the development process into few ways.





---

Поняв, что эти обновления сделать будет не просто - я решил отделить часть проекта в fetch2. Идея этого проекта проста, обновить проект по частямб когда доделаем все -> тогда и можно будет перенести все в основной репозиторий и обновить наши проекты


Testing is our big issue too. Right now any big updates can break things. For sure, some of our current test coverage preventing a lot of troubles, but I don't feel secure when merging our pull requests...
It can be better. I'm 100% sure about it.

-----

if we need to have a separate place, where I can specify quick and simple to do tasks, tell me.

---

If right now we'll put our focus on releasing big major update(aka release 2) - we'll crash all of the small projects that we're working on.
If it wouldn't crash anything - then we're doing bad :()
But I think we can find a way - that will prevent from everything went down.
But it's not a simple thing for sure.

One of my ideas was to add Flow and Immutable.js, but right now I think that we're far away from moving our codebase into this way. I cannot do it on my own, and it'll take a good amount of time.


1) Уменьшить количество methods
2) Вынос повторяющегося методов во вне
3) Обеспечить более простой способ доступа к данным и изменений их видов в 80% случаев мы берем данные, перебираем из в `map` - делаем новые структуры.
4) вынести default getters out

the new way for connecting array at GL - this is a good example of how our current way to connect data is not ideal.


Calendar(Meal Calendar) or food log(Recipes + dates from the calendar) can be our next goals after GS.
At GS we have a lot of methods, related to updates of our data. It's plain JS, but I'm not sure how to move this information directly to other hands. Partially it's explained [article] & [docs] ...


Большинство этих методов связанных с изменениями JS objects aka one id replaced with other id, or unshift id from array of ids...
before sending them to DB

This API server also have our old frontend version and it's "dirty" after it ;)

And this was our other problem and the reason why we migrating Frontend to React.

(!I) Ask Audax to help us too. But after cards???


---


---

About data structures.
Maybe there is some rules, plugins, tools, to create separated files/Nodes/Tables from one big file or create big one from separated. I find some interesting approach to graphql documents. But it's still early to start to use it.


---

Maybe we should use an aproach, that is similar to learna...
Basically what i mean that we have a package, that have sub-packages, that can be our projects, each subpackage it is also a module, with aversion control, but without npm publish feature. But it'll require an implementation of a real-dev styles. Without gitflow, clear tasks explanation, extended number of contributors, task mainteners and clear goal setting it will be hard to do/manage/implement.
it's also hard to keep everything in one github repo and maintain issues and explanation sane and up-to-date. Right now the half of tasks are in-process, half should be finished in order to move changes into all of our projects, etc. Same stuff with a testing tasks, that we want to cover about a half of the year.
