
/**
 * Module dependencies.
 */

import { App } from 'src/client/containers/app';
import { Provider } from 'react-redux';
import { store } from 'src/client/store';
import React, { Component } from 'react';

/**
 * Export `Root` component.
 */

export class Root extends Component {

  /**
   * Render.
   */

  render() {
    return (
      <Provider store={store}>
        <App className={'app'} />
      </Provider>
    );
  }
}
