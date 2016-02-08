
/**
 * Module dependencies.
 */

import { getColorCode } from 'src/client/util/color-code';
import React, { Component, PropTypes } from 'react';

/**
 * Export `ChatMessage`.
 */

export class ChatMessage extends Component {

  /**
   * `PropTypes` validators.
   */

  static propTypes = {
    body: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  };

  /**
   * Render.
   */

  render() {
    const { body, username } = this.props;

    return (
      <div className={'chat-message'}>
        <div
          className={'chat-message-author'}
          style={{ color: getColorCode(username) }}
        >
          <span className={'text-small'}>{`${username} `}</span>

          <span className={'text-thin text-small'}>{'said:'}</span>
        </div>

        <h5 className={'text-thinner'}>{body}</h5>
      </div>
    );
  }
}
