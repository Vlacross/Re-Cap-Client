import React from 'react';
import { Link } from 'react-router-dom';


import './landingIntro.css';

export default function LandingIntro(props) {



  return (
    <div className="landingIntro">
      <h1>Learn To Dance</h1>
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


