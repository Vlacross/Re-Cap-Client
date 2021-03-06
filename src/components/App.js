import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './loginForm/loginForm';
import Header from './navBar/navBar';
import LandingPage from './landing/landingPage';
import OurStory from './about/ourStory';
import OfferedTypes from './courses/courses';
import Enroll from './enrollForm/enrollForm';
import Dashboard from './dashboard/dashboard';

import './App.css';

class App extends Component {
  



  
  render() {

    return (

      
        <div className="App">
        
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/enroll" component={Enroll} />
          <Route exact path="/offeredTypes" component={OfferedTypes} />
          <Route exact path="/ourStory" component={OurStory} />
        
        </div>
     
    );
  }
};

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  state: state
});

export default connect(mapStateToProps)(withRouter(App));
