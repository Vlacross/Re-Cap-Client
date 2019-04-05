import React from 'react';

import LandingIntro from './landingIntro';
// import AboutUs from './aboutUs'

import './landingPage.css';


export default function LandingPage(props) {

  return (
    <div className="landingPage">
      <LandingIntro />
      {/* <Route exact path="about-us" component={AboutUs} />
      <OfferedStyles /> */}
    </div>
  );


}

