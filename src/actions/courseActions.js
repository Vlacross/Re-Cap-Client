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


export const fetchCourseData = () => (dispatch, getState) => {

  let wait = ms => new Promise(resolve => setTimeout(resolve, ms))

  dispatch(offeredCourses())
  console.log(`fetching from ${API_URI}courses`)

  return fetch(`${API_URI}courses`)
  .then(res => normalizeResponse(res))
  .then(data => {
    console.log('data', data)
    dispatch(fetchCoursesSuccess(data))
  })
  .catch(error => {
    console.log('errerr', error)
    dispatch(fetchCoursesError(error))
  })
};

