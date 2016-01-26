
/**
 * Module dependencies.
 */

import { connect } from 'react-redux';
import React, { Component } from 'react';

/**
 * `Register` component.
 */

class Register extends Component {

  /**
   * Render.
   */

  render() {
    return (
      <div>{'register'}</div>
    );
  }
}

/**
 * Export `Register` connected component.
 */

export default connect()(Register);
