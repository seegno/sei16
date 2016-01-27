'use strict';

/**
 * Module dependencies.
 */

const _ = require('lodash');

/**
 * `MessageManager`.
 */

class MessageManager {

  /**
   * Constructor.
   */

  constructor() {
    this.messages = [];
  }

  /**
   * Add message.
   */

  addMessage(message) {
    this.messages = [message, ...this.messages.slice(0, 4)];
  }

  /**
   * Get messages.
   */

  getMessages() {
    return _.sortBy(this.messages, ['createdAt']);
  }
}

/**
 * Export `MessageManager`.
 */

module.exports = new MessageManager();
