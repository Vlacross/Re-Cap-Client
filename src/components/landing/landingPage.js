import React from 'react';

import LandingIntro from './landingIntro';
import dashboardRedirect from '../checkAuth/dashboardRedirect';
import { connect } from 'react-redux';
import { toggleAppInfo } from '../../actions/viewActions';


import './landingPage.css';


 export function LandingPage(props) {

  console.log(props.appInfoOpen)
  return (
    <div className="landingPage">
      <LandingIntro onClick={() => props.dispatch(toggleAppInfo())}/>
    </div>
  );


}

const mapStateToProps = state => ({
  appInfoOpen: state.views.appInfo
})


export default dashboardRedirect()(connect(mapStateToProps)(LandingPage))
