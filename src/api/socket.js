'use strict';

/**
 * Module dependencies.
 */

const debug = require('debug')('sei16:api');
const messageManager = require('./managers/message-manager');
const userManager = require('./managers/user-manager');

/**
 * Export `socket`.
 */

module.exports = (io) => {

  /**
   * Handle `join` event.
   */

  io.on('join', (context, username) => {
    debug('************************************');
    debug('Event join');

    if (userManager.getUserByUsername(username)) {
      debug(`User with username ${username} already exists`);

      context.socket.emit('joinResponse', {
        message: `User with username ${username} already exists`,
        type: 'error'
      });

      return;
    }

    userManager.addUser({ id: context.socket.id, username });

    debug(`"${username}" joined`);

    context.socket.emit('joinResponse', { type: 'success' });

    io.broadcast('join', username);
  });

  /**
   * Handle `addMessage` event.
   */

  io.on('addMessage', (context, body) => {
    debug('************************************');
    debug('Event addMessage');

    const user = userManager.getUser(context.socket.id);

    if (!user) {
      debug(`User with ID "${context.socket.id}" doesn't exists`);

      return;
    }

    const message = {
      body,
      createdAt: new Date().toISOString(),
      username: user.username
    };

    messageManager.addMessage(message);

    debug(`"${message.username}" wrote a new message: "${message.text}"`)

    // Broadcast to all users the received message.
    io.broadcast('addMessage', message);
  });

  /**
   * Handle `typing` event.
   */

  io.on('typing', (context) => {
    debug('************************************');
    debug('Event typing');

    const user = userManager.getUser(context.socket.id);

    if (!user) {
      debug(`User with ID "${context.socket.id}" doesn't exists`);

      return;
    }

    debug(`"${user.username}" is typing`);

    // Broadcast to all users.
    io.broadcast('typing', user.username);
  });

  /**
   * Handle `stopTyping` event.
   */

  io.on('stopTyping', (context) => {
    debug('************************************');
    debug('Event stopTyping');

    const user = userManager.getUser(context.socket.id);

    if (!user) {
      debug(`User with ID "${context.socket.id}" doesn't exists`);

      return;
    }

    debug(`"${user.username}" stop typing`);

    // Broadcast to all users.
    io.broadcast('stopTyping', user.username);
  });

  /**
   * Handle `disconnect` event.
   */

  io.on('disconnect', (context) => {
    debug('************************************');
    debug('Event disconnect');

    const user = userManager.getUser(context.socket.id);

    if (!user) {
      debug(`User with ID "${context.socket.id}" doesn't exists`);

      return;
    }

    // Remove user from list of active users.
    userManager.removeUser(context.socket.id);

    debug(`"${user.username}" left`);

    // Broadcast to all users.
    io.broadcast('leave', user.username);
  });
}
