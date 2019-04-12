import React from 'react';
import { connect } from 'react-redux';
import { fetchCourseData, offeredCourses } from '../../actions';
import './courses.css'

import DanceStyle from './danceStyle';





export class OfferedTypes extends React.Component { 

  componentDidMount() {
    console.log('props from didMount ', this.props);
    this.props.dispatch(fetchCourseData())

  }

 render() {

  const listings = 
  this.props.courses.map((course, index) => {
    return(
    <DanceStyle key={index} style={course} />
    )
  })
 
  
  return(
    <div className="offeredTypes">
      <ul className="coursesList">
        {listings}

      </ul>

    </div>
);

}}



const mapStateToProps = state => ({
  courses: state.courses.courses
});

export default connect(mapStateToProps)(OfferedTypes);
