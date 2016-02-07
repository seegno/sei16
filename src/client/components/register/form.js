
/**
 * Module dependencies.
 */

import React, { Component, PropTypes } from 'react';

/**
 * Export `RegisterForm`.
 */

export class RegisterForm extends Component {

  /**
   * `PropTypes` validators.
   */

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit();
  }

  /**
   * Get `username` field value.
   */

  getValue() {
    return this.refs.username.value;
  }

  /**
   * Render.
   */

  render() {
    return (
      <div>
        <form
          className={'register-form'}
          onSubmit={this.onSubmit.bind(this)}
        >
          <input
            className={'form-control'}
            placeholder={'Insert your username'}
            ref={'username'}
          />

          <button
            className={'btn btn-secundary'}
            type={'submit'}
          >
            {'Join Chat!'}
          </button>
        </form>
      </div>
    );
  }
}
