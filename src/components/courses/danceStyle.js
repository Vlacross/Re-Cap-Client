import React from 'react';
import { connect } from 'react-redux';

import './danceStyle.css'


function DanceStyle({style}) {
  return(
  <li  className="styleListing">
    <div>
    <div>
      <h1 className="danceName">Class: {style.style}</h1>
    </div>
    <div>
      <span className="danceTeacher">Teacher: {style.teacher}</span>
    </div>
    <div>
      <span className="danceAccepting">Currently accepting students: {style.accepting}</span>
    </div>
    <p className="danceDescription">{style.details.descriptionShort}</p>
    </div>
  </li>)
}


export default connect()(DanceStyle)


