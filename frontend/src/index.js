import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import app from './reducers'
import Root from './components/Root'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    loading: false
}
const middleware = [thunk]
const store = createStore(app, initialState,composeWithDevTools(applyMiddleware(...middleware)))


export const API_BASE_URL = '/api';

ReactDOM.render(
    <React.StrictMode><Root store={store} /></React.StrictMode>,
  document.getElementById('root')
);
