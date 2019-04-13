/*import actions from actions file */
import { OFFERED_COURSES, FETCH_COURSES_SUCCESS, FETCH_COURSES_ERROR } from '../actions'
import mockCourses from '../courses/styles';




let initialState = {
  courses: mockCourses,
  error: null,
  loading: false
 
}


export default function courseReducer(state = initialState, action) {
  if(action.type === OFFERED_COURSES) {
    console.log('courses-Action-Triggered')
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if(action.type === FETCH_COURSES_SUCCESS) {
    console.log('Course-Fetch-Success')
    return Object.assign({}, state, {
      courses: action.data,
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
  
  return state;
};


//** Will eventually want to write an action to call for fetching classes from DB*/





