import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer  } from 'redux-form';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

import { loadToken } from './localStorage';
import { setToken } from './actions/authActions';

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

const authToken = loadToken();
const user = !authToken ? null : jwtDecode(authToken).user

if(authToken) {
  store.dispatch(setToken(authToken, user))

}



export default store;
