import React from 'react';
import { connect } from 'react-redux';

import './danceStyle.css'


function DanceStyle({ course, onClick }) {

/*use less course details here */

let accepting = course.accepting ? "is" : "is not"

  return(
  <li  className="styleListing">
    <div>
    <div>
      <a className="danceStyle">Class: {course.style}</a>
    </div>
    <div>
      <span className="danceTeacher">Teacher: {course.teacher}</span>
    </div>
    <div>
      <span className="danceAccepting">This course {accepting} currently accepting students.</span>
    </div>
    <p className="danceDescription">{course.description}</p>
    </div>
    <button onClick={() => onClick(course.id)}>click</button>
  </li>)
}


export default connect()(DanceStyle)


