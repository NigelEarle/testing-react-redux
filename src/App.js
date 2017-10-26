import React, { Component } from 'react';
import { Provider } from 'react-redux';
import InstaCloneRouter from './routes';
import { Link } from 'react-router-dom';
import configureStore from './store/configureStore';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store="store">
          <InstaCloneRouter/>
        </Provider>
      </div>
    );
  }
}

export default App;
