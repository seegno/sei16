
/**
 * Module dependencies.
 */

import { findIndex } from 'lodash';
import ActionTypes from 'src/client/action-types';

/**
 * Export `user` reducer.
 */

export function users(state = { userList: [] }, action) {
  const { payload, type } = action;

  switch (type) {
    case ActionTypes.GET_USERS_FAILURE:
      return Object.assign({}, state, {
        hasError: !!action.error,
        isFetching: false
      });

    case ActionTypes.GET_USERS_REQUEST:
      return Object.assign({}, state, {
        hasError: false,
        isFetching: true
      });

    case ActionTypes.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        hasError: false,
        isFetching: false,
        userList: [...payload, ...state.userList]
      });

    case ActionTypes.ADD_USER:
      return Object.assign({}, state, {
        userList: [...state.userList, payload]
      });

    case ActionTypes.REMOVE_USER:
      return Object.assign({}, state, {
        userList: state.userList.filter(({ username }) => username !== payload.username)
      });

    case ActionTypes.START_TYPING:
      const typingUserIndex = findIndex(state.userList, { username: payload.username });

      return Object.assign({}, state, {
        userList: [
          ...state.userList.slice(0, typingUserIndex),
          Object.assign({}, state.userList[typingUserIndex], { typing: true }),
          ...state.userList.slice(typingUserIndex + 1)
        ]
      });

    case ActionTypes.STOP_TYPING:
      const stopTypingUserIndex = findIndex(state.userList, { username: payload.username });

      return Object.assign({}, state, {
        userList: [
          ...state.userList.slice(0, stopTypingUserIndex),
          Object.assign({}, state.userList[stopTypingUserIndex], { typing: false }),
          ...state.userList.slice(stopTypingUserIndex + 1)
        ]
      });

    default:
      return state;
  }
}
