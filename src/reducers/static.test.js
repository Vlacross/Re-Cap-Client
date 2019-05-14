import  staticReducer  from './static';
import { ourStory } from '../actions';


describe('authReducer', () => {

  const bio = 
 `Dance School began with Dave and Lilian wanting to learn to dance
 for their wedding. After attending a few local events, they soon found out
 that their own town (among most other places) had an intricate network 
 revolving dance culture. They befriended a group of elitist ballroom 
 dancers that saw their ambition and gave them a variety instruction. Soon enough,
  their friends and family began to feel the influence of their presence at parties,
  and decided they wouldn't mind learning a few steps themselves. Before long,
they were hosting weekly socials, attracting attendance from surrounding towns.
 Today Dance school offers several types of dance for a multitude of skill levels, 
 and is an emense resource for dance competitions, events, and techniques. Today,
  Dave and Lily use their presence in the local dance culture to give teachers and 
  interested toe-tappers alike an opportunity to collaborate grow through dancing!`

  const mockInitialState = {
    bio: bio
   
  };


  it('should set the initial state when nothing is passed in', () => {
    const state = staticReducer(undefined, 'no_action');
    
    expect(state).toEqual(mockInitialState)
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
