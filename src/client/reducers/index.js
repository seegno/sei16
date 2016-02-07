
/**
 * Module dependencies.
 */

import { chat } from 'src/client/reducers/chat-reducer';
import { combineReducers } from 'redux';
import { routeReducer as router } from 'react-router-redux';

/**
 * Export `reducers`.
 */

export const reducers = combineReducers({
  chat,
  router,
});
