import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import jquery from 'jquery';
window.jQuery = jquery;

import 'bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import allReducers from './reducers/reducers-combine';

import App from './components/App';



const middleWare = applyMiddleware(thunk, logger);

const store = createStore(allReducers, middleWare);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
	document.getElementById('root')
);
