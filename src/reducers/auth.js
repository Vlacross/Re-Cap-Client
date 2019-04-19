import { LOGIN_REQUEST_LOADING, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILURE, CLEAR_AUTH_ERROR, SET_TOKEN, CLEAR_AUTH } from '../actions';


const initialState = {
  token: null,
user: null,
loading: false,
error: null
};


export default function authReducer(state = initialState, action) {
  if(action.type === LOGIN_REQUEST_LOADING) {
    console.log('loginRequestLoading fired')
    return Object.assign({}, state, {
      loading: true,
      error: null
    })

  }
  else if (action.type === SET_TOKEN) {
    console.log('StoringTokenToState', action.token)
    return Object.assign({}, state, {
      user: action.user,
      token: action.token
    })
  }
  else if (action.type === CLEAR_AUTH) {
    console.log('clearingAuthInTheDucer')
    return Object.assign({}, state, {
      token: null,
      user: null
    })
  }
  else if (action.type === CLEAR_AUTH_ERROR) {
    console.log('clearingAuthErrors')
    return Object.assign({}, state, {
      error: null
    })
  }
  else if(action.type === LOGIN_REQUEST_SUCCESS) {
    console.log('loginRequestSucces fired')
    return Object.assign({}, state, {
      loading: false
    })

  }
  else if(action.type === LOGIN_REQUEST_FAILURE) {
    console.log('loginRequestError fired')
    console.log(action.error)
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })

  }
// console.log('auth', Date.now(), state)
return state
};


