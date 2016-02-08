
/**
 * Module dependencies.
 */

import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import Chat from 'src/client/components/chat';
import React, { Component } from 'react';
import Register from 'src/client/components/register';

/**
 * Export `App`.
 */

export class App extends Component {

  /**
   * Render.
   */

  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/'}>
          <IndexRoute
            component={Register}
          />

          <Route
            component={Chat}
            path={'/chat'}
          />
        </Route>
      </Router>
    );
  }
}
