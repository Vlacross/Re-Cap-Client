import  viewReducer  from './views';
import { setIsMobile, toggleMenu, doubleCheck, toggleAppInfo } from '../actions';


describe('authReducer', () => {


  const mockInitialState = {
    appInfo: false,
    isMobile: false,
    menuOpen: false,
    doubleCheck: {
      isOpen: false,
      checkingFor: ''
    }};


  it('should set the initial state when nothing is passed in', () => {
    const state = viewReducer(undefined, 'no_action');
    
    expect(state).toEqual(mockInitialState)
  });

  it('should return the state with any action', () => {
    let currentState = { state: "state" };
    let state = viewReducer(currentState, 'no_action');
    
    expect(state).toEqual(currentState)
  });

  describe('setIsMobile', () => {
    it('should set state.isMobile with supplied data', () => {
     
      let state = mockInitialState
      let isMobile = true
      state = viewReducer(state, setIsMobile(isMobile))

      expect(state.isMobile).toEqual(true)
    });
  });

  describe('toggleMenu', () => {
    it('should toggle state.menuOpen', () => {

      let oldState = mockInitialState;
      let newState = viewReducer(oldState, toggleMenu())
      expect(newState.menuOpen).toEqual(!oldState.menuOpen)
    });
  });

  describe('toggleAppInfo', () => {
    it('should toggle state.appInfo', () => {

      let oldState = mockInitialState;
      let newState = viewReducer(oldState, toggleAppInfo())
      expect(newState.appInfo).toEqual(!oldState.appInfo)
    });
  });

  describe('doubleCheck', () => {
    it('should toggle doubleCheck open status and update checkingFor with supplied data', () => {

      let checkingFor = "mock-account-managing-task"
      let oldState = mockInitialState;
      let newState =  viewReducer(oldState, doubleCheck(checkingFor));

      expect(newState.doubleCheck.isOpen).toEqual(!oldState.doubleCheck.isOpen)
      expect(newState.doubleCheck.checkingFor).toEqual(checkingFor)
    });
  });


});

