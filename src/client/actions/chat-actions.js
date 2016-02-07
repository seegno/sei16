
/**
 * Module dependencies.
 */

import { routeActions } from 'react-router-redux';
import ActionTypes from 'src/client/action-types';
import socket from 'src/client/util/socket';

/**
 * Export `joinChat` action.
 */

export function joinChat(username) {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.JOIN_CHAT_REQUEST
    });

    socket
      .emit('join', username)
      .on('joinResponse', (data) => {
        if (data.type === 'error') {
          dispatch({
            error: true,
            payload: new Error(data.message),
            type: ActionTypes.JOIN_CHAT_FAILURE
          });

          return;
        }
        dispatch({
          type: ActionTypes.JOIN_CHAT_SUCCESS,
          payload: { username }
        });

        dispatch(routeActions.push('/'));
      });
  }
}
