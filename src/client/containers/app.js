
/**
 * Module dependencies.
 */

import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { Welcome } from 'src/client/components/welcome';
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
            component={Welcome}
          />
        </Route>
      </Router>
    );
  }
}
