Import is an important part of moving this data to our REST API servers.

Right now the code is unfinished, need a lot of work.
It wouldn't really correlate with our main code structure.
maybe later we'll move it away. right now i want to make it work again in short amount of time.

one of the problems - old code using underscore library. so maybe later it'll be challenging to clean up all this stuff.


Samples of our npm Scripts



```
"migrate-grocery": "node bin/grocery/002-automigrate.js",
"migrate-search": "node bin/search/automigrate.js",
"migrate-recipes": "node bin/recipes/002-automigrate.js",
"import": "node bin/recipes/001-import.js",
"grocery": "node bin/grocery/001-import.js",
"search": "node bin/search/import.js",

"g": "npm run migrate-grocery && nodemon bin/grocery/import.js",
"r": "npm run migrate-recipes && nodemon bin/recipes/import.js",
"s": "npm run migrate-search  && nodemon bin/search/import.js",
"g2": "npm run migrate-grocery && node bin/grocery/import.js",
"r2": "npm run migrate-recipes && node bin/recipes/import.js",
"s2": "npm run migrate-search  && node bin/search/import.js"
```

@TODO at our import script we should have connection to Sentry / Raven stuff.
