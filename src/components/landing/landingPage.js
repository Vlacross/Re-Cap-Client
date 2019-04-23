import React from 'react';

import LandingIntro from './landingIntro';
import dashboardRedirect from '../checkAuth/dashboardRedirect';


import './landingPage.css';


 function LandingPage(props) {

  return (
    <div className="landingPage">
      <LandingIntro />
    </div>
  );


}

export default dashboardRedirect()(LandingPage)
