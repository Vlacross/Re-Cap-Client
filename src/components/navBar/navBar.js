import React from 'react';
import { connect } from 'react-redux';

import { clearAuth } from '../../actions/authActions';
import { setDisplayView } from '../../actions/courseActions';
import { removeToken } from '../../localStorage';

import NavBarLink from './navBarLink'
import './navBar.css';

class HeaderNav extends React.Component {

  //*[(About Us), (Offered Dance Types), (SignIn), (Enroll)] */
 logOut() {
   console.log('OUT!')
   this.props.dispatch(clearAuth())
   removeToken()
 }

 setCourseListView() {
  this.props.dispatch(setDisplayView(null))
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
    

    
      if(!this.props.loggedIn) {
        console.log('loggedIn')
        signIn = <NavBarLink name={login.name} path={login.path} />
        signup = <NavBarLink name={enroll.name} path={enroll.path} />
        
        
        
      }
      if(this.props.loggedIn) {
        console.log('NOTTYNOTTYNOTTYloggedIn')
        home = <NavBarLink name={dashboard.name} path={dashboard.path} />
        logout = <button className="logoutButton" href="" onClick={() => this.logOut()}>LogOut</button>
      }
    

    return (
      <div className="Navbar">
          {home}
          <NavBarLink name={ourStory.name} path={ourStory.path} />
          <NavBarLink name={offeredTypes.name} path={offeredTypes.path} onClick={() => this.setCourseListView()} />
          {signIn}
          {signup}
          {logout}
      </div>
    );




  };

}

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
})

export default connect(mapStateToProps)(HeaderNav)

