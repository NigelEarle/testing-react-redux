import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../.';
import {
  addEmail,
  addPassword,
  submitLoginSuccess,
  submitLoginFail,
} from '../../actions/user';

class Login extends Component {

  static propTypes = {

  };

  handleInputChange = ({ target }) => {
    const {
      addEmail,
      addPassword,
    } = this.props;
    if (target.name === 'email') {
      // email action
      addEmail(target.value);
    }

    if (target.name === 'password') {
      // password action
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
          <input type="text" name="email" onChange={this.handleInputChange} placeholder="Email" autoFocus/>
          <input type="text" name="password" onChange={this.handleInputChange} placeholder="Password"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ email, password, user }) => (
  {
    email,
    password,
    user,
  }
);
  
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
