import React from 'react';
import { connect } from 'react-redux';

import './danceStyle.css'


function DanceStyle({ course, onClick, user, loggedIn }) {

/*use less course details here */
let handleClick = (e, id) => {
e.preventDefault();
onClick(id)
}

let offer;
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

if(!user) {
  offer = <p>Enroll or log in for more info or to sign up for this course!</p>
}
else if (!user.enrolled) {
  offer = <p>To learn more about this course, or to sign up, select the title!</p>
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
    {offer}
  </li>)
}


export default connect()(DanceStyle)


