import { combineReducers } from 'redux';
import  staticReducer  from './staticReducer';


export default 

combineReducers({
  bio: staticReducer
}) 

/*This way all reducers are in a single file then imported here, and exported with 'combine reducer' inside an object literal */
