import { OFFERED_COURSES, FETCH_COURSES_SUCCESS, FETCH_COURSES_ERROR, SET_DISPLAY_VIEW, 
  CLEAR_ERROR, offeredCourses, fetchCoursesSuccess, fetchCoursesError,
   setDisplayView, clearError, getCourseInfo } from './course';

   describe('OFFERED_COURSES', () => {
    it('should return the action', () => {
    let action = offeredCourses();
  
    expect(action.type).toEqual(OFFERED_COURSES)
    });
  });


  describe('FETCH_COURSES_SUCCESS', () => {
    it('should return the action', () => {
      let data = 'data';
      let action = fetchCoursesSuccess(data);
  
    expect(action.type).toEqual(FETCH_COURSES_SUCCESS)
    expect(action.data).toEqual(data)
    });
  });

  describe('FETCH_COURSES_ERROR', () => {
    it('should return the action', () => {
      let error = 'error';
      let action = fetchCoursesError(error);
  
    expect(action.type).toEqual(FETCH_COURSES_ERROR)
    expect(action.error).toEqual(error)
    });
  });

  describe('SET_DISPLAY_VIEW', () => {
    it('should return the action', () => {
      let data = 'data';
      let action = setDisplayView(data);
  
    expect(action.type).toEqual(SET_DISPLAY_VIEW)
    expect(action.data).toEqual(data)
    });
  });

  describe('CLEAR_ERROR', () => {
    it('should return the action', () => {
    let action = clearError();
  
    expect(action.type).toEqual(CLEAR_ERROR)
    });
  });

  describe('authFetch', () => {

    let id = {
      courseId: "000000000000000000000004",
    };
    it('should trigger the callback', () => {
    
  
      let dispatch = jest.fn()
  
      getCourseInfo(id)(dispatch)
      .then(expect(dispatch).toHaveBeenCalled())
    })
  })
  

