/*import actions from actions file */
import { SET_ISMOBILE, TOGGLE_MENU } from '../actions/viewActions'





let initialState = {
  isMobile: false,
  menuOpen: false
 
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
console.log(state)
  return state;
};








