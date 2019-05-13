/*import actions from actions file */
import { OUR_STORY } from '../actions/staticActions'



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



let initialState = {
  bio: bio
 
}


export default function staticReducer(state = initialState, action) {
  if(action.type === OUR_STORY) {
    console.log('Bio-Action-Triggered')
  }
  return state;
};








