import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
// import logo from '../logo.svg';

import Dashboard from './dashboard/dashboard';
import Header from './navBar/navBar';
import LandingPage from './landing/landingPage';
import OurStory from './about/ourStory';
import OfferedTypes from './courses/courses';

import './App.css';

class App extends Component {

  

  render() {
console.log("app")
    return (

      
        <div className="App">
          <Header />
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          {/* <Route exact path="/Login" component={Login} />
          <Route exact path="/enroll" component={EnrollForm} /> */}
          <Route exact path="/offeredTypes" component={OfferedTypes} />
          <Route exact path="/ourStory" component={OurStory} />
        </div>
     
    );
  }
}

export default withRouter(App);
