'use strict';

/**
 * Module dependencies.
 */

const userManager = require('./../managers/user-manager');

/**
 * Export `MessageController`.
 */

module.exports = (router) => {
  // Get users.
  router.get('/users', function *() {
    this.body = yield userManager.getUsers();
  });
};
