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

export const CLEAR_AUTH_ERROR = 'CLEAR_AUTH_ERROR';
export const clearAuthError = () => ({
  type: CLEAR_AUTH_ERROR
});

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
  dispatch(setToken(token, decodedToken.user))
  dispatch(loginRequestSuccess())
  storeToken(token)
};


export const authFetch = (values) => (dispatch) => {

  let credentials = distinguishAuthFormat(values)
  let { load, route } = credentials

 const options = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(load)
  }

  dispatch(loginRequestLoading())
   
  return fetch(`${API_URI}login${route}`, options)
  .then(res => normalizeResponse(res))
  .then(token => { 
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
};


export const refreshToken = () => (dispatch, getState) => {

  dispatch(loginRequestLoading());

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

};

function deleteEnrolled(load, dispatch, getState) {

  let { user, token, course } = load

  let options = {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({user: user})
  }

  return fetch(`${API_URI}courses/remove/${course}`, options)
  .then(res => normalizeResponse(res))
  .then(() => {

    let id = getState().auth.user.id

    let options = {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({id: id})
    }

    return fetch(`${API_URI}accounts/remove`, options)
    .then(res => normalizeResponse(res))
    .then(data => {
      if(data.type === 'error') { return Promise.reject(data) }
      dispatch(clearAuth())
      removeToken()
    })
 
  })
 .catch(err => {
    console.log(err)
    dispatch(loginRequestFailure(err))
    dispatch(clearAuth())
    removeToken()
 }) 



};



export const deleteAccount = (load) => (dispatch, getState) => {

 
  if(load.course) {
    return deleteEnrolled(load, dispatch, getState)
  }
  else {
    let { user, token } = load

    let options = {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({id: user})
    }

    return fetch(`${API_URI}accounts/remove`, options)
    .then(res => normalizeResponse(res))
    .then(data => {
      if(data.type === 'error') { return Promise.reject(data) } 
      console.log('account deleted')
      dispatch(clearAuth())
      removeToken()
    })
    .catch(err => {
      console.log(err)
      dispatch(loginRequestFailure(err))
      dispatch(clearAuth())
      removeToken()

     }) 
  }
};

