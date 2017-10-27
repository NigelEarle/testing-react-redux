import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../.';

class Login extends Component {

  static propTypes = {

  };

  submitCreds = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <Header/>
        <form onSubmit={this.submitCreds}>
          <input type="text" name="email" placeholder="Email" autoFocus/>
          <input type="text" name="password" placeholder="Password"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {}
);
  
const mapDispatchToProps = () => (
  {}
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
