import React from 'react';

import NavBarLink from './navBarLink'
import './navBar.css';

export default class HeaderNav extends React.Component {

  //*[(About Us), (Offered Dance Types), (SignIn), (Enroll)] */
 

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

    return (
      <div className="Navbar">
          <NavBarLink name={ourStory.name} path={ourStory.path} />
          <NavBarLink name={offeredTypes.name} path={offeredTypes.path} />
          <NavBarLink name={login.name} path={login.path} />
          <NavBarLink name={enroll.name} path={enroll.path} />
      </div>
    );




  };

}



