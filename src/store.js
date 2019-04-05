import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import { combineReducers } from 'redux';
import  staticReducer  from './reducers/staticReducer';


const store = createStore(
 
  
   staticReducer

);
console.log('store')
export default store;
