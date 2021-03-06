
/**
 * Module dependencies.
 */

const path = require('path');

/**
 * Export `webpackConfig`.
 */

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve('src/client/index.js')]
  },
  module: {
    preLoaders: [{
      include: path.resolve('src/client'),
      loader: 'eslint-loader',
      test: /\.(js)$/
    }],
    loaders: [{
      loader: 'style!css!sass',
      test: /\.(scss)$/
    }, {
      include: [path.resolve('src/client')],
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-1', 'react']
      },
      test: /\.(js)$/
    }]
  },
  output: {
    path: path.resolve('build'),
    filename: 'build.js'
  },
  resolve: {
    alias: {
      src: path.resolve('src')
    }
  }
}
