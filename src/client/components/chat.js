
/**
 * Module dependencies.
 */

import { connect } from 'react-redux';
import React, { Component } from 'react';

/**
 * `Chat`.
 */

class Chat extends Component {

  /**
   * Render.
   */

  render() {
    return (
      <div>{'chat'}</div>
    );
  }
}

/**
 * Export `Chat` connected component.
 */

export default connect()(Chat);
