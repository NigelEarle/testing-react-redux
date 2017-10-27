import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../.';
import {
  addEmail,
  addPassword,
  submitCreds
} from '../../actions/user';

class Login extends Component {

  static propTypes = {

  };

  handleInputChange = ({ target }) => {
    const { addEmail, addPassword } = this.props;
    if (target.name === 'email') {
      // call email action
      addEmail(target.email);
    }

    if (target.name === 'password') {
      // call password action
      addPassword(target.password);
    }
  }

  submitCreds = (e) => {
    console.log(e)
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

const mapStateToProps = ({ email, user}) => (
  {
    email,
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
    submitCreds() {
      dispatch(submitCreds())
    }
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
