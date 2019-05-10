import React from 'react';
import './hamburger.css';

 export default function Hamburger(props) {
  
  
  
  return (
    <div className="hamburger" onClick={() => props.onClick()}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </div>
  );
};
