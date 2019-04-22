import  { API_URI } from '../config';
import {normalizeResponse} from './utils';

import { refreshToken } from './authActions'



export const OFFERED_COURSES = 'OFFERED_COURSES';
export const offeredCourses = () => ({
  type: OFFERED_COURSES
})

export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const fetchCoursesSuccess = data => ({
  type: FETCH_COURSES_SUCCESS,
  data: data
});

export const FETCH_COURSES_ERROR = 'FETCH_COURSES_ERROR';
export const fetchCoursesError = error => ({
  type: FETCH_COURSES_ERROR,
  error: error
});


export const SET_DISPLAY_VIEW = 'SET_DISPLAY_VIEW';
export const setDisplayView = data => ({
  type: SET_DISPLAY_VIEW,
  data
})

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const clearError = () => ({
  type: CLEAR_ERROR
})

/*Courses List Fetch */
export const fetchCourseData = () => (dispatch, getState) => {

  dispatch(offeredCourses())
  console.log(`fetching courses`)

  return fetch(`${API_URI}courses`)
  .then(res => normalizeResponse(res))
  .then(data => {
    console.log('acts', data)
    dispatch(fetchCoursesSuccess(data))
  })
  .catch(error => {
    dispatch(fetchCoursesError(error))
  })
};

/*single Course Info */
export const getCourseInfo = (id) => (dispatch) => {

  dispatch(offeredCourses())

  return fetch(`${API_URI}courses/details/${id}`)
  .then(res => normalizeResponse(res))
  .then(data => {
    console.log('single', data)
    dispatch(setDisplayView(data))
  })

}

/*Dance Course SignUp */
export const signUp = (load) => (dispatch) => {

  const { course, user, token } = load

  dispatch(offeredCourses())
  
  const options = {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({user: user})
  }

  return fetch(`${API_URI}courses/signup/${course}`, options)
  .then(res => normalizeResponse(res))
  .then(data => {
    if(data.type === 'error') { return Promise.reject(data) } 
    console.log('single', data)
    dispatch(refreshToken())
    
  })
  .catch(err => {
    console.log(err)
    let msg;
    switch(err.code) {
      case 451:
        msg = err.message;
        break;
      case 11000:
        msg = 'Username already in use, pick something else';
        break;
      default:
        msg = 'Something went wrong, try again!';
    }
    console.log(msg)
    dispatch(fetchCoursesError(msg))
  })
}


/*code: 451,
        message: "User is already enrolled in this course!" */