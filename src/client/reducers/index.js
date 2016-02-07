
/**
 * Module dependencies.
 */

import { chat } from 'src/client/reducers/chat-reducer';
import { combineReducers } from 'redux';
import { messages } from 'src/client/reducers/message-reducer';
import { routeReducer as router } from 'react-router-redux';
import { users } from 'src/client/reducers/user-reducer';

/**
 * Export `reducers`.
 */

export const reducers = combineReducers({
  chat,
  messages,
  router,
  users
});
