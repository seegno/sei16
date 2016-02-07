
/**
 * Module dependencies.
 */

import { joinChat } from 'src/client/actions'
import { RegisterForm } from 'src/client/components/register/form';
import { connect } from 'react-redux';
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
   * Render.
   */

  render() {
    return (
      <div className={'register-container'}>
        <h1 className={'text-thinner text-primary'}>
          {'Welcome!'}
        </h1>

        <h4 className={'text-thinner'}>
          {'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        </h4>

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
