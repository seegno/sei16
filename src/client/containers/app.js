
/**
 * Module dependencies.
 */

import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import Register from 'src/client/components/register';
import React, { Component } from 'react';

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
        </Route>
      </Router>
    );
  }
}
