import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseRouter from './routes';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BaseRouter/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
