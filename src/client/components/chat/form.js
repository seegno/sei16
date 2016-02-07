
/**
 * Module dependencies.
 */

import React, { Component, PropTypes } from 'react';

/**
 * Export `ChatForm`.
 */

export class ChatForm extends Component {

  /**
   * `PropTypes` validators.
   */

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  /**
   * Get value.
   */

  getValue() {
    return this.refs.input.value;
  }

  /**
   * Handle form `onChange` event.
   */

  onChange(event) {
    this.props.onChange(event);
  }

  /**
   * Handle form `onSubmit` event.
   */

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit();

    this.refs.input.value = '';
  }

  /**
   * Render.
   */

  render() {
    return (
      <form
        className={'chat-form'}
        onSubmit={this.onSubmit.bind(this)}
      >
        <input
          className={'form-control'}
          onChange={this.onChange.bind(this)}
          placeholder={'Type your message...'}
          ref={'input'}
        />
      </form>
    );
  }
}
