import { LOGIN_REQUEST_LOADING, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILURE, SET_TOKEN, CLEAR_AUTH } from '../actions';


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
  else if (action.typ === SET_TOKEN) {
    console.log('StoringTokenToState')
    return Object.assign({}, state, {
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
  else if(action.type === LOGIN_REQUEST_SUCCESS) {
    console.log('loginRequestSucces fired')
    return Object.assign({}, state, {
      user: action.user,
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


