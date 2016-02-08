
/**
 * Module dependencies.
 */

import React, { Component, PropTypes } from 'react';

/**
 * Export `UserList`.
 */

export class UserList extends Component {

  /**
   * `PropTypes` validators.
   */

  static propTypes = {
    users: PropTypes.array.isRequired
  };

  /**
   * Render.
   */

  render() {
    const { users } = this.props;

    const userList = users
      .map((user, index) => (
        <div
          className={'chat-users-item'}
          key={index}
        >
          <span className={'text-light'}>{user.username}</span>
          <span className={`user-typing ${user.typing ? 'user-typing-active': ''}`}>{'Typing...'}</span>
        </div>
      ));

    return (
      <div className={'chat-users-list'}>{userList}</div>
    );
  }
}
