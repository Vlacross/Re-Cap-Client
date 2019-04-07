import { combineReducers } from 'redux';
import  staticReducer  from './staticReducer';
import courseReducer from './courses';


export default 

combineReducers({
  bio: staticReducer,
  courses: courseReducer
}) 

/*This way all reducers are in a single file then imported here, and exported with 'combine reducer' inside an object literal */
