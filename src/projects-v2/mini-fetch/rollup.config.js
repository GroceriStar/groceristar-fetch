import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

import builtins from 'rollup-plugin-node-builtins'
import babel from 'rollup-plugin-babel'

import pkg from './package.json'


const extensions = [
  '.js', '.json'
]

const name = 'GroceristarFetchPlugin'

const external = [
  'fs',
  'path',
  'lodash',
  'uuid',
  '@groceristar/mini-sd',
  '@groceristar/sd-wrapper'
]


export default {
  input: './src/index.js',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external:external,



  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      include: ['src/*'],
      // include: ['src/**/*'],
      exclude: [
        'node_modules/**'
        // '/src/data/__tests__'
      ]
    }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs({
      // namedExports: {
      // //   // left-hand side can be an absolute path, a path
      // //   // relative to the current directory, or the name
      // //   // of a module in node_modules
      // //   'node_modules/my-lib/index.js': [ 'named' ]
      //   '~/Allergy/allergies.json': [ 'allergies' ]
      // }
    }),
    builtins()

    // juck fix in order to move json files to npm
    // copy({
    //   assets: [
    //     './src/data/**'
    //   ],
    // }),

  ],

  output: [{
    file: pkg.main,
    format: 'cjs'
  }, {
    file: pkg.module,
    format: 'es'
  }, {
    file: pkg.browser,
    format: 'iife',
    name,
    globals: {
      '@grpceristar/mini-sd':'@grpceristar/mini-sd',
      'lodash':'lodash'
    }
    // https://rollupjs.org/guide/en#output-globals-g-globals

  }]
}
