import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import Header from './header';
import LandingPage from './landingPage';

class App extends Component {

  render() {

    return (

      
        <div className="App">
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/enroll" component={EnrollForm} />
        </div>
     
    );
  }
}

export default withRouter(App);
