import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import {users, currentUser} from './reducers';

const getInitialState = () => {
  return axios.get('https://enbx9hfr33.execute-api.us-east-2.amazonaws.com/dev/users', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    crossDomain: true
  })
  .then((result) => {
    console.dir(result);
    return {users: result.data, currentUser: {}};
  });
};

getInitialState().then((initialState) => {
  const store = createStore(
    combineReducers({users, currentUser}),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
});

registerServiceWorker();
