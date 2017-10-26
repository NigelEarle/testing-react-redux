import React, { Component } from 'react';
import { Provider } from 'react-redux';
import BaseRouter from './routes';
import configureStore from './store/configureStore';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BaseRouter/>
        </Provider>
      </div>
    );
  }
}

export default App;
