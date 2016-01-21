
/**
 * Module dependencies.
 */

const path = require('path');

/**
 * Export `webpackConfig`.
 */

module.exports = {
  entry: {
    app: [path.resolve('src/index.js')]
  },
  module: {
    preLoaders: [{
      include: path.resolve('src'),
      loader: 'eslint-loader',
      test: /\.(js)$/
    }],
    loaders: [{
      include: [path.resolve('src')],
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
