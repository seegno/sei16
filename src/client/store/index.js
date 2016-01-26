
/**
* Module dependencies.
*/

import { applyMiddleware, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { reducers } from 'src/client/reducers';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';

/**
* Create store with middleware.
*/

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunk, reduxRouterMiddleware)(createStore);

/**
* Export `store`.
*/

export const store = createStoreWithMiddleware(reducers);
