'use strict';

/**
 * Module dependencies.
 */

const messageManager = require('./../managers/message-manager');

/**
 * Export `MessageController`.
 */

module.exports = (router) => {
  // Get messages.
  router.get('/messages', function *() {
    this.body = messageManager.getMessages();
  });
};
