import users from './reducers/users';
import user from './reducers/user';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'; 

export const initStore = () => {

  // reducers are PURE function
  // every time same output for same input
  // No  API calls or route changses
  // No Math.random() 
  const reducers = combineReducers({
    users,
    user
  });

  // to user chrome redux extension
  const composeEnhancerForChromeExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose
  const store = createStore(reducers, composeEnhancerForChromeExtension(applyMiddleware(thunk)));

  return store;

}