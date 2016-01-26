'use strict';

/**
 * Module dependencies.
 */

const koa = require('koa');
const path = require('path')
const router = require('koa-router')();
const views = require('koa-views');

/**
 * Export `app`.
 */

module.exports = () => {
  const app = koa();

  app.use(views(path.resolve('src/client')));

  // Controller.
  router.get(/\/.*/, function *() {
    yield this.render('index');
  });

  // Router.
  app.use(router.routes());

  return app;
};
