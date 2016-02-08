
/**
 * Module dependencies.
 */

import { getColorCode } from 'src/client/util/color-code';
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
          <span
            className={'text-light'}
            style={{ color: getColorCode(user.username) }}
          >
          {user.username}
          </span>

          <span className={`user-typing ${user.typing ? 'user-typing-active': ''}`}>{'Typing...'}</span>
        </div>
      ));

    return (
      <div className={'chat-users-list'}>{userList}</div>
    );
  }
}
