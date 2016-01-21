
/**
 * Module dependencies.
 */

import { App } from 'src/containers/app';
import { Provider } from 'react-redux';
import { store } from 'src/store';
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
        <App />
      </Provider>
    );
  }
}
