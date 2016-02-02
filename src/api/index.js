'use strict';

/**
 * Module dependencies.
 */

const IO = require('koa-socket');
const Router = require('koa-router');
const config = require('config');
const cors = require('koa-cors');
const koa = require('koa');
const messageController = require('./controllers/message-controller');
const socket = require('./socket');
const userController = require('./controllers/user-controller');

/**
 * Export `app`.
 */

module.exports = () => {
  const app = koa();

  /**
   * Cors.
   */

  app.use(cors(config.get('api.cors')));

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
