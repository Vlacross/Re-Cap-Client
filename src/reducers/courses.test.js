import  courseReducer  from './courses';
import { offeredCourses, fetchCoursesSuccess, fetchCoursesError,
  setDisplayView } from '../actions';


describe('authReducer', () => {

  let class1 = { className: "class1" };
  let class2 = { className: "class2" };
  let class3 = { className: "class3" };
  let data = [class1, class2, class3];

  const mockInitialState = {
    courseList: [],
    course: null,
    error: null,
    loading: false
   
  };

  const erroredState = {
    courseList: [],
    course: null,
    error: "A Cartoon Mouse Called Mocky Mocks!",
    loading: false
   
  };



  it('should set the initial state when nothing is passed in', () => {
    const state = courseReducer(undefined, 'no_action');
    
    expect(state).toEqual(mockInitialState)
  });

  it('should return the state with any action', () => {
    let currentState = { state: "state" };
    let state = courseReducer(currentState, 'no_action');
    
    expect(state).toEqual(currentState)
  });

  describe('offeredCourses', () => {
    it('should toggle loading status and set error to null', () => {
      let oldasteState = erroredState;
      let newState = courseReducer(oldasteState, offeredCourses())
      expect(newState.loading).toEqual(!oldasteState.loading)
      expect(newState.error).toEqual(null)

    });
  });

  describe('fetchCoursesSuccess', () => {
    it('should set the user/token state with supplied data', () => {

      let state = mockInitialState;
      state = courseReducer(state, fetchCoursesSuccess(data))
      expect(state.courseList).toEqual(data)
      expect(state.error).toEqual(null)
      expect(state.loading).toEqual(false)
    });
  });

  describe('fetchCoursesError', () => {
    it('should clear the user/token state data', () => {

      let newError = "Not the biggest Mock I've seen, but it'll do"
      let state = mockInitialState;
      state = courseReducer(state, fetchCoursesError(newError))
      expect(state.error).toEqual(newError)
      expect(state.loading).toEqual(false)
    });
  });

  describe('setDisplayView', () => {
    it('should clear the state error', () => {

      let state = mockInitialState;

      state = courseReducer(state, setDisplayView(class1))
      expect(state.course).toEqual(class1)
      expect(state.loading).toEqual(false)
    });
  });

});

