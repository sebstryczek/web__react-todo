import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReactReduxProvider } from 'react-redux';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ReactReduxProvider store={store}>
    <App />
  </ReactReduxProvider>,
  document.getElementById('root'),
);

registerServiceWorker();