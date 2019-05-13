import React from 'react';
import { Link } from 'react-router-dom';


import './landingIntro.css';

export default function LandingIntro(props) {

  let appInfo;

  appInfo = props.appInfoOpen ?
   (
     <div className="appInfoWrapper">
      <div className="appInfo">
        <p>
          Welcome to Dance School's online resource for learning how to dance!
          Feel free to browse our list of offered courses, and if you see something
            you might be interested in, you can enroll in Dance School to Sign Up for a course
            or to simply view more details on each course!
        </p>
        <button className="appInfoButton" onClick={() => props.onClick()}>Back</button>
      </div>
     </div>
   ) :
  undefined;

  return (
    <div className="landingIntro">
      <h1 className="introBanner"><span className="introSpan">Welcome to </span>Dance School</h1>
      {appInfo}
      <label>
        <button
          className="appInfoButton"
          name="appInfoButton"
          onClick={() => props.onClick()}>
          Find Out More!
        </button>
      </label>

      <label>
        <Link
          className="introLink"
          name="Sign In"
          to="/login">
          Sign In
        </Link>
      </label>

      <label>
        <Link 
          className="introLink"
          name="Enroll"
          to="/enroll">
            Enroll
        </Link>
      </label>
           
    </div>
  );
}


