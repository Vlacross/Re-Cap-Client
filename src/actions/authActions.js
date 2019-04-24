import jwtDecode from 'jwt-decode';
import { API_URI } from '../config';
import { storeToken, removeToken } from '../localStorage';
import { normalizeResponse, distinguishAuthFormat } from './utils' ;


export const SET_TOKEN = 'SET_TOKEN';
export const setToken = (token, user) => ({
  type: SET_TOKEN,
  user,
  token
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const CLEAR_AUTH_ERROR = 'CLEAR_AUTH_ERROR'
export const clearAuthError = () => ({
  type: CLEAR_AUTH_ERROR
})

export const LOGIN_REQUEST_LOADING = 'LOGIN_REQUEST_LOADING';
export const loginRequestLoading = () => ({
  type: LOGIN_REQUEST_LOADING
});


export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const loginRequestSuccess = () => ({
  type: LOGIN_REQUEST_SUCCESS
});


export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';
export const loginRequestFailure = error => ({
  type: LOGIN_REQUEST_FAILURE,
  error: error
});


const storeAuth = (token, dispatch) => {
  
  const decodedToken = jwtDecode(token);
  // console.log('storing-39', decodedToken)
  dispatch(setToken(token, decodedToken.user))
  dispatch(loginRequestSuccess())
  storeToken(token)
};


export const authFetch = (values) => (dispatch) => {

  let credentials = distinguishAuthFormat(values)
  let { load, route } = credentials

  // console.log('creds-51', credentials)

 const options = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(load)
}

  dispatch(loginRequestLoading())
  console.log(`fetching from ${API_URI}login${route}--63`)
  // console.log(process.env.REACT_APP_API_URI)

   
  return fetch(`${API_URI}login${route}`, options)
  .then(res => normalizeResponse(res))
  .then(token => {
    // console.log('postFetch -64', token)
    // if(token.errmsg) { console.log('return Promise.reject(token)') } 
    storeAuth(token, dispatch)
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


export const refreshToken = () => (dispatch, getState) => {

  dispatch(loginRequestLoading());
  console.log('refrefre')

  let token = getState().auth.token

  let options = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  
  return fetch(`${API_URI}login/refresh`, options)
  .then(res => normalizeResponse(res))
  .then(token => {
    storeAuth(token, dispatch)
  })
  .catch(error => {
    console.log(error)
    dispatch(loginRequestFailure(error))
    dispatch(clearAuth())
    removeToken()
  })

}


