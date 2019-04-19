import React from 'react';
import { connect } from 'react-redux';

import './danceStyle.css'


function DanceStyle({ course, onClick }) {

/*use less course details here */
let handleClick = (e, id) => {
e.preventDefault();
onClick(id)
}

let accepting = course.accepting ? "is" : "is not"

  return(
  <li  className="styleListing">
    <div>
    <div>
      <button onClick={(e) => handleClick(e, course.id)} className="danceStyle">Class: {course.style}</button>
    </div>
    <div>
      <span className="danceTeacher">Teacher: {course.teacher}</span>
    </div>
    <div>
      <span className="danceAccepting">This course {accepting} currently accepting students.</span>
    </div>
    <p className="danceDescription">{course.description}</p>
    </div>
    
  </li>)
}


export default connect()(DanceStyle)


