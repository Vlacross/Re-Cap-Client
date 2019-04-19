import React from 'react';
import { connect } from 'react-redux';

import './danceStyle.css'


function DanceStyle({ course, onClick, loggedIn }) {

/*use less course details here */
let handleClick = (e, id) => {
e.preventDefault();
onClick(id)
}


let button;
let title;

if(loggedIn) {
  title = 
    <div>
      <button onClick={(e) => handleClick(e, course.id)} className="danceStyle">Class: {course.style}</button>
    </div>
}
else if(!loggedIn) {
  title =
    <div>
      <h1 className="danceStyleTitle">Class: {course.style}</h1>
    </div>
}



let accepting = course.accepting ? "is" : "is not"

  return(
  <li  className="styleListing">
    <div>
    {title}
    <div>
      <span className="danceTeacher">Teacher: {course.teacher}</span>
    </div>
    <div>
      <span className="danceAccepting">This course {accepting} currently accepting students.</span>
    </div>
    <p className="danceDescription">{course.description}</p>
    </div>
    <p>Enroll or log in for more info or to sign up for this course!</p>
  </li>)
}


export default connect()(DanceStyle)


