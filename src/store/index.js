
/**
* Module dependencies.
*/

import { applyMiddleware, createStore } from 'redux';
import { reducers } from 'src/reducers';
import thunk from 'redux-thunk';

/**
* Create store with middleware.
*/

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

/**
* Export `store`.
*/

export const store = createStoreWithMiddleware(reducers);
