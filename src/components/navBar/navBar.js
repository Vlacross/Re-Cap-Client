import React from 'react';
import { connect } from 'react-redux';

import { clearAuth, clearAuthError, refreshToken } from '../../actions/authActions';
import { setDisplayView } from '../../actions/courseActions';
import { removeToken } from '../../localStorage';
import { toggleMenu } from '../../actions/viewActions';
import Hamburger from '../hamburger/hamburger';


import NavBarLink from './navBarLink'
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
   console.log('OUT!')
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

    let home;
    let logout;
    let signIn;
    let signup;
    let navBarClass;
    let navWrapperClass;
    
      if(!this.props.loggedIn) {
        console.log('NOTNOTloggedIn')
        signIn = <NavBarLink name={login.name} path={login.path} onClick={() => this.clearAuthError()} />
        signup = <NavBarLink name={enroll.name} path={enroll.path} onClick={() => this.clearAuthError()} />
        
        
        
      }
      if(this.props.loggedIn) {
        console.log('loggedIn')
        home = <NavBarLink name={dashboard.name} path={dashboard.path} onClick={() => this.hydrateUserState()} />
        logout = <button name="LogOut" className="logoutButton" onClick={() => this.logOut()}>LogOut</button>
      }
      navBarClass = this.props.menuOpen ?
      "mobileNav" :
      "Navbar"

      navWrapperClass = this.props.menuOpen ?
      "mobileNavWrapper" :
      "navWrapper"

      
      console.log(navWrapperClass)

    

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

}

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  isMobile: state.views.isMobile,
  menuOpen: state.views.menuOpen
})

export default connect(mapStateToProps)(HeaderNav)

