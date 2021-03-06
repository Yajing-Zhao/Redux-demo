import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from "./reducers/index";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  )
{/* 
  // Store -> globalized states

//ACTION Increment
const increment = () => {
  return {
    type: "INCREMENT"
  }
}

const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

// Reducer
const counter = (state=0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state+1
    case "DECREMENT":
      return state-1
  }
  
}

let store = createStore(counter);

// Display it in the console
store.subscribe(()=>console.log(store.getState()))

//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
*/}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
