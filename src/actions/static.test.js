import { OUR_STORY, ourStory } from './static';

   describe('OUR_STORY', () => {
    it('should return the action', () => {
    let action = ourStory();
  
    expect(action.type).toEqual(OUR_STORY)
    });
  });