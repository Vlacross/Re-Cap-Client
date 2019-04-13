import { createStore, applyMiddleware } from 'redux';
import { reducer as formReducer  } from 'redux-form';
import thunk from 'redux-thunk';
import reducer from './reducers';

import { combineReducers } from 'redux';
import  staticReducer  from './reducers/staticReducer';
import courseReducer from './reducers/courses';
import authReducer from './reducers/auth';


const store = createStore(
 combineReducers({
     bio: staticReducer,
   courses: courseReducer,
   auth: authReducer,
   form: formReducer
 }),
  applyMiddleware(thunk)
  

);
console.log('store', store.getState())
export default store;
