import React from 'react';
import { connect } from 'react-redux';
import { fetchCourseData, offeredCourses } from '../../actions';
import './courses.css'

import DanceStyle from './danceStyle';





export class OfferedTypes extends React.Component { 

  componentDidMount() {
    console.log('props from didMount ', this.props);
    this.props.dispatch(fetchCourseData())
    this.props.dispatch(offeredCourses())

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
  state: state,
  courses: state.courses.courses,
  loading: state.courses.loading
});

export default connect(mapStateToProps)(OfferedTypes);
