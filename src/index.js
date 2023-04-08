import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './redux/index';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);