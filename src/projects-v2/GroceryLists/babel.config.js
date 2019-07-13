'use strict'

const presets = [
  ['@babel/preset-env', {
    'modules': false
  }]
]

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        '~': './src/data',
        '@files': './src/files'
      }
    }
  ],
  [
    '@babel/plugin-syntax-dynamic-import'
  ],
  [
    require.resolve('babel-plugin-lodash')
    // ,
    // {
    //   id: []
    // }
  ]
  // ["@babel/proposal-object-rest-spread"]
]

module.exports = { presets, plugins }
