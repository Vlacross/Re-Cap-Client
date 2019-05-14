import  authReducer  from './auth';
import { loginRequestFailure, loginRequestSuccess, loginRequestLoading,
  clearAuthError, clearAuth, setToken  } from '../actions';


describe('authReducer', () => {

  const mockInitialState = {
    token: null,
  user: null,
  loading: false,
  error: null
  };

  const mockInitialStateLoggedIn = {
    token: "token",
  user: {
    fistname: 'firstMockLogged',
    lastname: 'lastMockLogged'
  },
  loading: false,
  error: null
  };

  let token = "token";

  let user = {
    firstname: "mockyFirst",
    lastname: "mockyLast"
  };


  it('should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, 'no_action');
    
    expect(state).toEqual(mockInitialState)
  });

  it('should return the state with any action', () => {
    let currentState = { state: "state" };
    let state = authReducer(currentState, 'no_action');
    
    expect(state).toEqual(currentState)
  });

  describe('loginRequestLoading', () => {
    it('should set the loading state to true', () => {
      let state = mockInitialState;
      state = authReducer(state, loginRequestLoading())
      expect(state.loading).toEqual(true)

    });
  });

  describe('setToken', () => {
    it('should set the user/token state with supplied data', () => {

      let state = mockInitialState;
      state = authReducer(state, setToken(token, user))
      expect(state.token).toEqual(token)
      expect(state.user).toEqual(user)
    });
  });

  describe('clearAuth', () => {
    it('should clear the user/token state data', () => {

      let state = mockInitialStateLoggedIn;
      state = authReducer(state, clearAuth())
      expect(state.token).toEqual(null)
      expect(state.user).toEqual(null)
    });
  });

  describe('clearAuthError', () => {
    it('should clear the state error', () => {

      let state = mockInitialStateLoggedIn;
      state.error = true

      state = authReducer(state, clearAuthError())
      expect(state.error).toEqual(null)
    });
  });

  describe('loginRequestSuccess', () => {
    it('should set the state loading data to false success', () => {

      let state = mockInitialStateLoggedIn;
      state.loading = true

      state = authReducer(state, loginRequestSuccess())
      expect(state.loading).toEqual(false)
    });
  });

  describe('loginRequestFailure', () => {
    it('should set the state loading data to false success', () => {

      let error = "mock errors are getting mocky!";
      let state = mockInitialStateLoggedIn;
      state.loading = true

      state = authReducer(state, loginRequestFailure(error))
      expect(state.error).toEqual(error)
      expect(state.loading).toEqual(false)
    });
  });


});

