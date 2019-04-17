import React from 'react';
import { connect } from 'react-redux';

import { clearAuth } from '../../actions/authActions';
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

  render() {

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
          logout = <a className="logoutButton" onClick={() => this.logOut()}>LogOut</a>
      }
    

    return (
      <div className="Navbar">
          <NavBarLink name={ourStory.name} path={ourStory.path} />
          <NavBarLink name={offeredTypes.name} path={offeredTypes.path} />
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

