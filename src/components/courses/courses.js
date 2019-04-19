import React from 'react';
import { connect } from 'react-redux';
import { fetchCourseData, offeredCourses, setDisplayView, getCourseInfo } from '../../actions';
import './courses.css'

import SingleCourse from './singleCourse';
import DanceStyle from './danceStyle';





export class OfferedTypes extends React.Component { 

  componentDidMount() {
    console.log('props from didMount ', this.props);
    this.props.dispatch(fetchCourseData())
    this.props.dispatch(offeredCourses())

  }

  handleToggle(id) {
    console.log('togglingClick', id)

    this.props.dispatch(getCourseInfo(id))
  }

  handleClick(type, id) {
    type === 'signUp' ?
    console.log('signUp', id) :
    console.log('back')
    this.props.dispatch(setDisplayView(null))
  }

 render() {

  const { courseList, singleCourse, course } = this.props;

 

  if(!singleCourse) {
    console.log('bog')
    return (
      <div className="offeredTypes">
       <ul className="coursesList">
        {courseList.map((course, index) => {
         return( <DanceStyle key={index} onClick={(id) => this.handleToggle(id)} id={course.id} course={course} /> )
          })
        }
       </ul>
      </div>
    ) 
  }
 
  
  return(
    <div className="offeredTypes">
      <ul className="coursesList">
      <SingleCourse course={course} onClick={(type, id) => this.handleClick(type, id)}/>

      </ul>
    </div>
);

}}



const mapStateToProps = state => ({
  state: state,
  course: state.courses.course,
  singleCourse: state.courses.course !== null,
  courseList: state.courses.courseList,
  loading: state.courses.loading
});

export default connect(mapStateToProps)(OfferedTypes);
