## Organizational problems

#### Current version of plugin is ES5 version.
Problems: 
- not minifying, so when we deploy on Netlify our create-react-app`s it's crashing deploy.
- We didn't build our code, didn't using ESLint and tests

#### Code organization and structure
My goal was just to keep all static files/data in a same separated place at the begining.
So we didn't keep a lot of attention about what structure we have.
right now we have 2 main folders: `data`, `projects`.
**Data**  just have all of our files/tables/structures at separated folders.
**Projcts**  have sub-folders, each subfolder 

! i don't like the way how we're debugging our new methods. we have a play.js file where we can console.log some of our functions, but it's not cool to have them into our npm published version.
this can be fixed by moving to ES6 + Babel7 builds, where we extend *play.js files out, but still keeping them at our github repos.

#### Projects
Problem: Number of project/branches is growing, and we add a new methods and everything start to look overcomplicated.


