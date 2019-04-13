import { LOGIN_REQUEST_LOADING, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILURE } from '../actions';


const initialState = {
user: {
  firstname: '',
  lastname: ''
},
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
  else if(action.type === LOGIN_REQUEST_SUCCESS) {
    console.log('loginRequestSucces fired')
    return Object.assign({}, state, {
      user: action.user,
      loading: false
    })

  }
  else if(action.type === LOGIN_REQUEST_FAILURE) {
    console.log('loginRequestError fired')
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })

  }
console.log('auth', Date.now(), state)
return state
};


