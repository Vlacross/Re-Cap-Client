import  staticReducer  from './static';
import { ourStory } from '../actions';


describe('authReducer', () => {

  const bio = {
    who: 'who',
    what: 'what',
    when: 'when',
    where: 'where',
    whoNow: 'whoNow'
  }

  const mockInitialState = {
    bio: bio
   
  };


  it('should set the initial state when nothing is passed in', () => {
    const state = staticReducer(undefined, 'no_action');
    expect(state).not.toEqual(mockInitialState)
  });

  it('should return the state with any action', () => {
    let currentState = { state: "state" };
    let state = staticReducer(currentState, 'no_action');
    
    expect(state).toEqual(currentState)
  });

  describe('ourStory', () => {
    it('should toggle loading status and set error to null', () => {
      let state = mockInitialState;
      state = staticReducer(state, ourStory())
      expect(state.bio).toEqual(bio)

    });
  });

});
