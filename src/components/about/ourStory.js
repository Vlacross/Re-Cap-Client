import React from 'react';
import { connect } from 'react-redux';
import './ourStory.css';

 export function OurStory(props) {
  
  console.log(props)
  
  return (
    <div className="ourStory">
      <h4 className="bioText">
        Hello Then!i
        {props.bio}
      </h4>
    </div>
  );
}

const mapStateToProps = state => ({
  state: state,
  bio: state.bio.bio
})

export default connect(mapStateToProps)(OurStory);
