/*import actions from actions file */
import { SET_ISMOBILE, TOGGLE_MENU, SET_DOUBLECHECK } from '../actions/viewActions'





let initialState = {
  isMobile: false,
  menuOpen: false,
  doubleCheck: {
    isOpen: false,
    checkingFor: ''
  }
 
}


export default function viewsReducer(state = initialState, action) {
  if(action.type === SET_ISMOBILE) {
    // console.log('setting ismobile to', action.isMobile)
    return Object.assign({}, state, {
      isMobile: action.isMobile
    })
  }
  if(action.type === TOGGLE_MENU) {
    return Object.assign({}, state, {
      menuOpen: !state.menuOpen
    })
  }
  if(action.type === SET_DOUBLECHECK) {
    console.log(action)
    return Object.assign({}, state, {
      doubleCheck: {
        isOpen: !state.doubleCheck.isOpen,
        checkingFor: action.checkingFor.checkingFor
    }
    })
  }
// console.log(state)
  return state;
};








