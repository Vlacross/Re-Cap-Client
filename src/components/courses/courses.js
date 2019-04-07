import React, { Component } from 'react';
import { connect } from 'react-redux';
import './courses.css'

import DanceStyle from './danceStyle';





function OfferedTypes(props) { 

  console.log(props.courses)

  const listings = 
  props.courses.map((course, index) => {
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
}



const mapStateToProps = state => ({
  courses: state.courses.courses
});

export default connect(mapStateToProps)(OfferedTypes);
