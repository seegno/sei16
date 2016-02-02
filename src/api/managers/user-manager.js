'use strict';

/**
 * Module dependencies.
 */

const _ = require('lodash');

/**
 * `UserManager`.
 */

class UserManager {

  /**
   * Constructor.
   */

  constructor() {
    this.users = [];
  }

  /**
   * Add user.
   */

  addUser(user) {
    this.users = _.concat(this.users, [user]);
  }

  /**
   * Get user.
   */

  getUser(id) {
    return _.find(this.users, (user) => user.id === id);
  }

  /**
   * Get user by username.
   */

  getUserByUsername(username) {
    return _.find(this.users, (user) => user.username === username);
  }

  /**
   * Get users.
   */

  getUsers() {
    return _.sortBy(this.users, ['username']);
  }

  /**
   * Remove user.
   */

  removeUser(id) {
    this.users = _.filter(this.users, (user) => user.id !== id);
  }
}

/**
 * Export `UserManager`.
 */

module.exports = new UserManager();
