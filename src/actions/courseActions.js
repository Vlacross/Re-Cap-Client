import  { API_URI } from '../config';
import {normalizeResponse} from './utils';



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

// export const SIGNUP = 'SIGNUP';
// export const signUp = () => ({

// })

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

export const getCourseInfo = (id) => (dispatch) => {

  dispatch(offeredCourses())

  return fetch(`${API_URI}courses/details/${id}`)
  .then(res => normalizeResponse(res))
  .then(data => {
    console.log('single', data)
    dispatch(setDisplayView(data))
  })

}

export const signUp = (id) => (dispatch) => {

  // dispatch(offeredCourses())
  console.log('inACtions with id = ', id)

}
