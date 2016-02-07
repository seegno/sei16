
/**
 * Module dependencies.
 */

import ActionTypes from 'src/client/action-types';

/**
 * Module dependencies.
 */

export function chat(state = {}, action) {
  const { payload, type } = action;

  switch (type) {
    case ActionTypes.JOIN_CHAT_FAILURE:
      return Object.assign({}, state, {
        hasError: !!action.error
      });

    case ActionTypes.JOIN_CHAT_SUCCESS:
      return Object.assign({}, state, {
        hasError: false,
        username: payload.username
      });

    default:
      return state;
  }
}
