import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from '../.';
import {
  addEmail,
  addPassword,
  submitLoginSuccess,
  submitLoginFail,
} from '../../actions/user';

export class Login extends Component {

  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    user: PropTypes.object,
    addEmail: PropTypes.func.isRequired,
    addPassword: PropTypes.func.isRequired,
    submitLoginSuccess: PropTypes.func.isRequired,
    submitLoginFail: PropTypes.func.isRequired
  };

  static defaultProps = {
    email: '',
    password: '',
    user: {},
    addEmail: () => {},
    addPassword: () => {},
    submitLoginSuccess: () => {},
    submitLoginFail: () => {}
  }

  handleInputChange = ({ target }) => {
    const {
      addEmail,
      addPassword,
    } = this.props;
    if (target.name === 'email') {
      addEmail(target.value);
    }

    if (target.name === 'password') {
      addPassword(target.value);
    }
  }

  submitCreds = (e) => {
    e.preventDefault();
    // if email and password matches user.email/password submit success
    // else submitFail

  }

  render() {
    return (
      <div>
        <Header/>
        <form onSubmit={this.submitCreds}>
          <input
            type="text"
            name="email"
            onChange={this.handleInputChange}
            placeholder="Email"
            autoFocus
          />
          <input
            type="text"
            name="password"
            onChange={this.handleInputChange}
            placeholder="Password"
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ email, password, user }) => ({
  email,
  password,
  user,
});
  
const mapDispatchToProps = (dispatch, props) => (
  {
    addEmail(char) {
      dispatch(addEmail(char))
    },
    addPassword(char) {
      dispatch(addPassword(char))
    },
    submitCredsSuccess() {
      dispatch(submitLoginSuccess())
    },
    submitCredsFail() {
      dispatch(submitLoginFail())
    }
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
