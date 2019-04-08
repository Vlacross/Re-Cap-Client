/*import actions from actions file */
import { OFFERED_COURSES } from '../actions/courseActions'
import mockCourses from '../courses/styles';




let initialState = {
  courses: mockCourses
 
}


export default function courseReducer(state = initialState, action) {
  if(action.type === OFFERED_COURSES) {
    console.log('courses-Action-Triggered')
  }
  return state;
};


//** Will eventually want to write an action to call for fetching classes from DB*/





