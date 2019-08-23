import React from 'react';
import { connect } from 'react-redux';
import './ourStory.css';

 export function OurStory(props) {
  
  return (
    <div className="ourStory">
      <h4 className="bioText who">
        {props.bio && props.bio.who}
      </h4>

      <h4 className="bioText what">
        {props.bio && props.bio.what}
      </h4>

      <h4 className="bioText when">
        {props.bio && props.bio.when}
      </h4>

      <h4 className="bioText where">
        {props.bio && props.bio.where}
      </h4>

      <h4 className="bioText whoNow">
        {props.bio && props.bio.whoNow}
      </h4>
      {/* <h4 className="bioText">
        {props.bio}
      </h4> */}
    </div>
  );
};

const mapStateToProps = state => ({
  state: state,
  bio: state.bio.bio
});

export default connect(mapStateToProps)(OurStory);
