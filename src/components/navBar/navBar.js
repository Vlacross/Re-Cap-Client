import React from 'react';
import { connect } from 'react-redux';

import { clearAuth, clearAuthError, refreshToken, setDisplayView, toggleMenu } from '../../actions';
import { removeToken } from '../../localStorage';
import Hamburger from '../hamburger/hamburger';


import NavBarLink from './navBarLink';
import './navBar.css';

export class HeaderNav extends React.Component {

toggleMobileMenu() {
  this.props.dispatch(toggleMenu())
}

handleMobileMenu() {
  if(window.innerWidth < 600) {
  this.toggleMobileMenu() 
  }
}

 logOut() {
   this.handleMobileMenu()
   this.props.dispatch(clearAuth())
   removeToken()
 }

 setCourseListView() {
  this.handleMobileMenu()
  this.props.dispatch(setDisplayView(null))
 }

 clearAuthError() {
  this.handleMobileMenu()
  this.props.dispatch(clearAuthError())
 }

 hydrateUserState() {
  this.handleMobileMenu()
  this.props.dispatch(refreshToken())
 }

  render() {


    let dashboard = {
      name: "Home",
      path: "/dashboard"
    }

    let ourStory = {
      name: "Our Story",
      path: "/ourStory"
    }

    let offeredTypes = {
      name: "Dance Styles",
      path: "/offeredTypes"
    }

    let login = {
      name: "Sign In",
      path: "/login"
    }

    let enroll = {
      name: "Enroll",
      path: "/enroll"
    }

    let logOut = {
      name: "LogOut",
      path: "/"
    }

    let home;
    let logout;
    let signIn;
    let signup;
    let navBarClass;
    let navWrapperClass;
    
      if(!this.props.loggedIn) {
        signIn = <NavBarLink name={login.name} path={login.path} onClick={() => this.clearAuthError()} />
        signup = <NavBarLink name={enroll.name} path={enroll.path} onClick={() => this.clearAuthError()} />
        
        
        
      }
      if(this.props.loggedIn) {
        home = <NavBarLink name={dashboard.name} path={dashboard.path} onClick={() => this.hydrateUserState()} />
        logout = <NavBarLink name={logOut.name} path={logOut.path} onClick={() => this.logOut()} />
      }
      navBarClass = this.props.menuOpen ?
      "mobileNav" :
      "Navbar"

      navWrapperClass = this.props.menuOpen ?
      "mobileNavWrapper" :
      "navWrapper"

    return (
      
    <div className={navWrapperClass}>

        <Hamburger onClick={() => this.toggleMobileMenu()}/>


        <div className="siteName">
          
          <span>
            Dance
          </span>
          <span>
            School
          </span>
          
        </div>


        <div className={navBarClass}>
          {home}
          <NavBarLink name={ourStory.name} path={ourStory.path} onClick={() => this.setCourseListView()}/>
          <NavBarLink name={offeredTypes.name} path={offeredTypes.path} onClick={() => this.setCourseListView()} />
          {signIn}
          {signup}
          {logout}
        </div>
       
    </div>

      
    );




  };

};

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  isMobile: state.views.isMobile,
  menuOpen: state.views.menuOpen
});

export default connect(mapStateToProps)(HeaderNav);

