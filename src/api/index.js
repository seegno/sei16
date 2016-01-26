'use strict';

/**
 * Module dependencies.
 */

const koa = require('koa');

/**
 * Export `app`.
 */

module.exports = () => {
  const app = koa();

  return app;
};
