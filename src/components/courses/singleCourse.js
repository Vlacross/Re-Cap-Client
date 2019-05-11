import React from 'react';
import checkAuth from '../checkAuth/checkAuth'
import { Link } from 'react-router-dom';
import './singleCourse.css'


function SingleCourse( {enrolled, course, onClick} ) { 

/*use more course details here */
console.log(enrolled)
let button;
let SIGNUP = 'signUp';
let BACK = 'back';
let HOME = 'home';

enrolled ? 
button = (<Link className="homeLink" to='/dashboard' onClick={() => onClick(BACK, course.id)}>Home</Link>) :
button = (<button onClick={() => onClick(SIGNUP, course.id)}>signUp</button>)

let accepting = course.accepting ? "is" : "is not"
 
  
  return(
    <div className="singleCourseCard">
     
    <div>
    <div>
      <h1 className="danceStyleSingle">Dance Style:{course.style}</h1>
    </div>
    <div>
      <span className="danceTeacher">Teacher: {course.teacher}</span>
    </div>
    <div>
      <span className="danceAccepting">This course {accepting} currently accepting students.</span>
    </div>
    <div>
      <span className="danceCourseLength">This course is {course.length} weeks long.</span>
    </div>
    <div>
      <span className="danceCourseClassSize">Current class size {course.classSize}</span>
    </div>
    <div>
      <span className="danceCourseCost">Overall cost for this course is {course.cost}</span>
    </div>
    <div>
      <span className="danceCourseSchedule">{course.style} currently meets {course.schedule}</span>
    </div>
    <p className="danceDescription">{course.description}</p>
    </div>
    <div className="buttonDiv">
      {button}
      <button onClick={() => onClick(BACK, course.id)}>back</button>
    </div>
    

    </div>
);

}





export default checkAuth()(SingleCourse);
