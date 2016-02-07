
/**
 * Module dependencies.
 */

import { RegisterForm } from 'src/client/components/register/form';
import { connect } from 'react-redux';
import { joinChat } from 'src/client/actions'
import React, { Component, PropTypes } from 'react';

/**
 * `Register` component.
 */

class Register extends Component {

  /**
   * `PropTypes` validators.
   */

  static propTypes = {
    chat: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  /**
   * Handle submit.
   */

  handleSubmit() {
    const username = this.refs.form.getValue();

    if (!username) {
      return;
    }

    this.props.dispatch(joinChat(username));
  }

  /**
   * Render error message.
   */

  renderErrorMessage(hasError, message) {
    if (!hasError) {
      return;
    }

    return (
      <div className={'error-message text-thinner'}>{message}</div>
    );
  }

  /**
   * Render.
   */

  render() {
    const { hasError, message } = this.props.chat;

    return (
      <div className={'register-container'}>
        <h1 className={'text-thinner text-primary'}>{'Welcome!'}</h1>

        <h4 className={'text-thinner'}>{'Chat for SEI16 Workshop by Seegno.'}</h4>

        <div>
          {this.renderErrorMessage(hasError, message)}
        </div>

        <RegisterForm
          onSubmit={this.handleSubmit.bind(this)}
          ref={'form'}
        />
      </div>
    );
  }
}

/**
 * Export `Register` connected component.
 */

export default connect(({ chat }) => ({ chat }))(Register);
