/*import actions from actions file */
import { SET_ISMOBILE, TOGGLE_MENU, SET_DOUBLECHECK, TOGGLE_APP_INFO } from '../actions';





let initialState = {
  appInfo: false,
  isMobile: false,
  menuOpen: false,
  doubleCheck: {
    isOpen: false,
    checkingFor: ''
  }
 
};


export default function viewsReducer(state = initialState, action) {
  if(action.type === SET_ISMOBILE) {
    return Object.assign({}, state, {
      isMobile: action.isMobile
    })
  }
  if(action.type === TOGGLE_MENU) {
    return Object.assign({}, state, {
      menuOpen: !state.menuOpen
    })
  }
  if(action.type === TOGGLE_APP_INFO) {
    return Object.assign({}, state, {
      appInfo: !state.appInfo
    })
  }
  if(action.type === SET_DOUBLECHECK) {
    return Object.assign({}, state, {
      doubleCheck: {
        isOpen: !state.doubleCheck.isOpen,
        checkingFor: action.checkingFor
    }
    })
  }  
  return state;
};








