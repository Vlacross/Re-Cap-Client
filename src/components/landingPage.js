import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import LandingIntro from './landingIntro';
// import AboutUs from './aboutUs'


export default function LandingPage(props) {

  return (
    <div>
      <LandingIntro />
      <Route exact path="about-us" component={AboutUs} />
      <OfferedStyles />
    </div>
  );


}

