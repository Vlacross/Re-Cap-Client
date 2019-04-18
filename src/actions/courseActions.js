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

  dispatch(offeredCourses())
  console.log(`fetching courses`)

  return fetch(`${API_URI}courses`)
  .then(res => normalizeResponse(res))
  .then(data => {
    dispatch(fetchCoursesSuccess(data))
  })
  .catch(error => {
    dispatch(fetchCoursesError(error))
  })
};

