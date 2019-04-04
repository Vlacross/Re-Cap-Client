import React from 'react';
import { Link } from 'react-router-dom';
import './navBarLink.css';

export default function navBarLink(props) {

  const { path, name } = props;


  return (
    <Link 
    to={path}>
      <button className="navBarLink">
        {name}
      </button>
    </Link>

  );
}

