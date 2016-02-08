
/**
 * Module dependencies.
 */

import { ChatMessage } from 'src/client/components/chat/chat-message';
import { findDOMNode } from 'react-dom';
import { isEmpty } from 'lodash';
import React, { Component, PropTypes } from 'react';

/**
 * Export `ChatMessages`.
 */

export class ChatMessages extends Component {

  /**
   * `PropTypes` validators.
   */

  static propTypes = {
    messages: PropTypes.array.isRequired
  };

  /**
   * Runs immediately before component update and check whether list should
   * scroll to bottom or not. We want to scroll to bottom only if the user is
   * already at the bottom. Otherwise it would be quite annoying if the user
   * wants to read what was above.
   */

  componentWillUpdate() {
    const node = findDOMNode(this);

    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  /**
   * Runs after every component update and scrolls to bottom of message list if
   * necessary.
   */

  componentDidUpdate() {
    if (!this.shouldScrollBottom) {
      return;
    }

    const node = findDOMNode(this);

    node.scrollTop = node.scrollHeight;
  }

  /**
   * Render message list.
   */

  renderMessages() {
    const { messages } = this.props;

    if (isEmpty(messages)) {
      return;
    }

    return messages.map(({ body, type, username }, index) => {
      if (type === 'bot') {
        return (<div className={'message-bot text-thin'}>{body}</div>)
      }

      return (
        <ChatMessage
          body={body}
          key={index}
          username={username}
        />
      );
    });
  }

  /**
   * Render.
   */

  render() {
    return (
      <div className={'chat-messages-list'}>
        {this.renderMessages()}
      </div>
    );
  }
}
