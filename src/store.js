import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer  } from 'redux-form';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

import { loadToken, storeToken } from './localStorage';
import { setToken, refreshToken } from './actions/authActions';

import  staticReducer  from './reducers/staticReducer';
import courseReducer from './reducers/courses';
import authReducer from './reducers/auth';
import viewsReducer from './reducers/views';






const store = createStore(
  combineReducers({
  bio: staticReducer,
courses: courseReducer,
auth: authReducer,
form: formReducer,
views: viewsReducer
}),
  applyMiddleware(thunk)
);

const authToken = loadToken();
const user = !authToken ? null : jwtDecode(authToken).user

if(authToken) {
  console.log('authy!', store.getState())
  store.dispatch(setToken(authToken, user))
  store.dispatch(refreshToken(authToken))
  storeToken(store.getState().auth.token)

}


export default store;
