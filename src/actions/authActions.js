import jwtDecode from 'jwt-decode';
import { API_URI } from '../config';
import { loadToken, storeToken, removeToken } from '../localStorage';
import { normalizeResponse, distinguishAuthFormat } from './utils' 

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = token => ({
  type: SET_TOKEN,
  token
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const LOGIN_REQUEST_LOADING = 'LOGIN_REQUEST_LOADING';
export const loginRequestLoading = () => ({
  type: LOGIN_REQUEST_LOADING
});


export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const loginRequestSuccess = user => ({
  type: LOGIN_REQUEST_SUCCESS,
  user: user
});


export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';
export const loginRequestFailure = error => ({
  type: LOGIN_REQUEST_FAILURE,
  error: error
});


const storeAuth = (token, dispatch) => {
  const decodedToken = jwtDecode(token);
  console.log('storing-34', decodedToken)
  dispatch(setToken(token))
  dispatch(loginRequestSuccess(decodedToken.user))
  storeToken(token)
};


export const authFetch = (values) => (dispatch) => {

  let credentials = distinguishAuthFormat(values)
  let { load, route } = credentials

  console.log('creds-46', credentials)

 const options = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(load)
}

  dispatch(loginRequestLoading())
  console.log(`fetching from ${API_URI}login${route}--58`)

   
  return fetch(`${API_URI}login${route}`, options)
  .then(res => normalizeResponse(res))
  .then(payload => {
    console.log('postFetch -64', payload)
    if(payload.errmsg) { return Promise.reject(payload) } 
    storeAuth(payload, dispatch)
  })
  .catch(error => {
    console.log(error)
    let msg;
    switch(error.code) {
      case 401:
        msg = 'Login error! Check username and password and try again!';
        break;
      case 11000:
        msg = 'Username already in use, pick something else';
        break;
      default:
        msg = 'Something went wrong, try again!';
    }
    dispatch(loginRequestFailure(msg))
  })
}



