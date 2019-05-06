/*import actions from actions file */
import { OFFERED_COURSES, FETCH_COURSES_SUCCESS, FETCH_COURSES_ERROR, SET_DISPLAY_VIEW, CLEAR_ERROR } from '../actions'





let initialState = {
  courseList: [],
  course: null,
  error: null,
  loading: false
 
}

/*add 'toggleView' prop to state, to switch between displaying the list or single course */

export default function courseReducer(state = initialState, action) {
  if(action.type === OFFERED_COURSES) {
    console.log('courses-Action-Triggered')
    return Object.assign({}, state, {
      loading: !state.loading,
      error: null
    })
  }
  else if(action.type === FETCH_COURSES_SUCCESS) {
    console.log('Course-Fetch-Success')
    return Object.assign({}, state, {
      courseList: action.data,
      error: null,
      loading: false
    });
  }
  else if(action.type === FETCH_COURSES_ERROR) {
    console.log('Course-Fetch_errored') 
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    
  }
  else if(action.type === CLEAR_ERROR) {
    console.log('Course-Error-Clear') 
      return Object.assign({}, state, {
        error: null,
        loading: false
      })
    
  }
  else if(action.type === SET_DISPLAY_VIEW) {
    console.log('switching course display')
    return Object.assign({}, state, {
      course: action.data,
      loading: false
    })
  }
  
  return state;
};


//** Will eventually want to write an action to call for fetching classes from DB*/





