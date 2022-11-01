import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reducer } from './redux/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { compose, applyMiddleware } from '@reduxjs/toolkit';
import { configureStore} from '@reduxjs/toolkit';

const thunked= applyMiddleware(thunk);
const composed=compose(thunked, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store=configureStore({
    reducer,
    composed
});
ReactDOM.render(
  <Provider store={store}>
  <App /></Provider>,
  document.getElementById('root')
);
