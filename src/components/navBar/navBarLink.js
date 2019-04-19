import React from 'react';
import { Link } from 'react-router-dom';
import './navBarLink.css';

export default function navBarLink(props) {

  const { path, name, onClick } = props;


  return (
    <Link 
      to={path}
      onClick={() => onClick()}>
      {name}
      
    </Link>

  );
}

