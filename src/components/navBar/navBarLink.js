import React from 'react';
import { Link } from 'react-router-dom';
import './navBarLink.css';

export default function navBarLink(props) {

  
  const { path, name } = props;

  if(props.onClick) {
    
    return (
      <Link 
        className="navLink"
        to={path}
        onClick={() => props.onClick()}>
        {name}
      </Link>
    );
  }
  
    return (
      <Link 
        className="navLink"
        to={path}>
        {name}
        
      </Link>
    );
};

