'use strict';

/**
 * Module dependencies.
 */

const IO = require('koa-socket');
const Router = require('koa-router');
const koa = require('koa');
const messageController = require('./controllers/message-controller');
const userController = require('./controllers/user-controller');
const socket = require('./socket');

/**
 * Export `app`.
 */

module.exports = () => {
  const app = koa();

  /**
   * Socket attachment.
   */

  const io = new IO();

  io.attach(app);

  socket(io);

  /**
   * Router.
   */

  const router = new Router();

  app.use(router.routes());

  /**
   * Controllers.
   */

  messageController(router);
  userController(router);

  return app;
};
