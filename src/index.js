import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import userReducer from './store/reducers/user'
import itemReducer from './store/reducers/item'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'develpoment' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const rootReducer = combineReducers({
  user: userReducer,
  item: itemReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(ReduxThunk)
) )
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
