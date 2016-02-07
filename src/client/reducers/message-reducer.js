
/**
 * Module dependencies.
 */

import ActionTypes from 'src/client/action-types';

/**
 * Export `messages` reducer.
 */

export function messages(state = { messageList: [] }, action) {
  const { payload, type } = action;

  switch (type) {
    case ActionTypes.GET_MESSAGES_FAILURE:
      return Object.assign({}, state, {
        hasError: !!action.error,
        isFetching: false
      });

    case ActionTypes.GET_MESSAGES_REQUEST:
      return Object.assign({}, state, {
        hasError: false,
        isFetching: true
      });

    case ActionTypes.GET_MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        hasError: false,
        isFetching: false,
        messageList: [...state.messageList, ...payload]
      });

    case ActionTypes.ADD_MESSAGE:
      return Object.assign({}, state, {
        messageList: [...state.messageList, payload]
      });

    default:
      return state;
  }
}
