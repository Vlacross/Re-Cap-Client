import { LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_LOADING, CLEAR_AUTH_ERROR,
   CLEAR_AUTH, SET_TOKEN, loginRequestFailure, loginRequestSuccess, loginRequestLoading,
    clearAuthError, clearAuth, setToken, authFetch } from './auth';



describe('SET_TOKEN', () => {
  it('should return the action', () => {
    let token = 'token';
    let user = { name: "mockUser" }
  let action = setToken(token, user);

  expect(action.type).toEqual(SET_TOKEN)
  expect(action.user).toEqual(user)
  expect(action.token).toEqual(token)
  });
});


describe('CLEAR_AUTH', () => {
  it('should return the action', () => {
  let action = clearAuth()

  expect(action.type).toEqual(CLEAR_AUTH)
  });
});

describe('CLEAR_AUTH_ERROR', () => {
  it('should return the action', () => {
  let action = clearAuthError()

  expect(action.type).toEqual(CLEAR_AUTH_ERROR)
  });
});

describe('LOGIN_REQUEST_LOADING', () => {
  it('should return the action', () => {
  let action = loginRequestLoading()

  expect(action.type).toEqual(LOGIN_REQUEST_LOADING)
  });
});

describe('LOGIN_REQUEST_SUCCESS', () => {
  it('should return the action', () => {
  let action = loginRequestSuccess()

  expect(action.type).toEqual(LOGIN_REQUEST_SUCCESS)
  });
});

describe('LOGIN_REQUEST_FAILURE', () => {
  it('should return the action', () => {
    let error = "Error, Oh Noooooo!"
  let action = loginRequestFailure(error)

  expect(action.type).toEqual(LOGIN_REQUEST_FAILURE)
  expect(action.error).toEqual(error)
  });
});

describe('authFetch', () => {

  let load = {
    username: "mockUser",
    password: "mockPassword"
  };
  it('should trigger the callback', () => {
  

    let dispatch = jest.fn()

    authFetch(load)(dispatch)
    .then(expect(dispatch).toHaveBeenCalled())


  })
})

