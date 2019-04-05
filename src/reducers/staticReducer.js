/*import actions from actions file */
import { OUR_STORY } from '../actions/staticActions'



const bio = 
`Dance School started out when the owners wanted to learn to dance
 for their wedding. The went to a few local events and soon found out
 that their location (and jsut about everywhere) has a local
 dance underground network! They found a group of elitist ballroom 
 dancers so they and some friends began learning. Soon there was enough
 popularity they were hosting weekly socials which become popular between towns.
 Today Dance school offers several types of dance for a multitude of skill levels, 
 and is an emense resource for dance competitions, events, and techniques. `



let initialState = {
  bio: bio
 
}


export default function staticReducer(state = initialState, action) {
  if(action.type === OUR_STORY) {
    console.log('Bio-Action-Triggered')
  }
  return state;
};








