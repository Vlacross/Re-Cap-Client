import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './landingIntro.css'

export default function LandingIntro(props) {



  return (
    <div>
      <h1>Learn To Dance</h1>
      <label>
        <button>
          <Link
            to="/login">
            Sign In
          </Link>
        </button>
      </label>

      <label>
        <button>
            <Link 
              to="/enroll">
                Enroll
            </Link>
        </button>
      </label>
    </div>
  );
}


