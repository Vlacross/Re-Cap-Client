import { createStore, applyMiddleware } from 'redux';
import { reducer as formReducer  } from 'redux-form';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { combineReducers } from 'redux';
import  staticReducer  from './reducers/staticReducer';
import courseReducer from './reducers/courses';


const store = createStore(
 combineReducers({
     bio: staticReducer,
   courses: courseReducer,
   form: formReducer
 }),
  applyMiddleware(thunk)
  

);
console.log('store', store.getState())
export default store;
