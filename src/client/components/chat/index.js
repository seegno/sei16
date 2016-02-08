
/**
 * Module dependencies.
 */

import { ChatMessages } from 'src/client/components/chat/chat-messages';
import { UserList } from 'src/client/components/chat/user-list';
import { getMessages, getUsers } from 'src/client/actions';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

/**
 * `Chat`.
 */

class Chat extends Component {

  /**
   * `PropTypes` validators.
   */

  static propTypes = {
    chat: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    messages: PropTypes.object,
    users: PropTypes.object
  };

  /**
   * Handle web socket events and fetch messages and users list immediatly after
   * the initial rendering occurs.
   */

  componentDidMount() {
    const { dispatch, chat } = this.props;

    // Check if user is authenticated and redirect to register if not.
    if (!chat.username) {
      window.location.href = '/';
    }

    // Fetch messages.
    dispatch(getMessages());

    // Fetch users.
    dispatch(getUsers());
  }

  /**
   * Render.
   */

  render() {
    const { messages, users } = this.props;

    return (
      <div className={'chat'}>
        <div className={'sidebar'}>
          <UserList users={users.userList} />
        </div>

        <div className={'chat-messages'}>
          <ChatMessages messages={messages.messageList} />
        </div>
      </div>
    );
  }
}

/**
 * Filter users to remove username from user list.
 */

function removeSessionUser(list, username) {
  return list.filter((user) => user.username !== username);
}

/**
 * Map state to props.
 */

function mapStateToProps({ chat, messages, users }) {
  return {
    chat,
    messages,
    users: Object.assign({}, users, {
      userList: removeSessionUser(users.userList, chat.username)
    })
  }
}

/**
 * Export `Chat` connected component.
 */

export default connect(mapStateToProps)(Chat);
