import React from 'react';
import { connect } from 'react-redux';
import './hamburger.css';

 export default function Hamburger(props) {
  
  
  
  return (
    <div className="hamburger" onClick={() => props.onClick()}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </div>
  );
};
