import React from 'react';
import { Link } from 'react-router-dom';


import './landingIntro.css';

export default function LandingIntro(props) {



  return (
    <div className="landingIntro">
      <h1>Learn To Dance</h1>
      <label>
        <button className="introButton">
          <Link
            to="/login">
            Sign In
          </Link>
        </button>
      </label>

      <label>
        <button className="introButton">
            <Link 
              to="/enroll">
                Enroll
            </Link>
        </button>
      </label>
    </div>
  );
}


