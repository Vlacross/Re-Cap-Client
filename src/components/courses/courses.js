import React from 'react';
import { connect } from 'react-redux';
import { fetchCourseData, setDisplayView, getCourseInfo, signUp, clearError } from '../../actions';
import './courses.css';

import SingleCourse from './singleCourse';
import DanceStyle from './danceStyle';





export class OfferedTypes extends React.Component { 

  componentDidMount() {
    this.props.dispatch(fetchCourseData())

  };

  handleToggle(id) {
    this.props.dispatch(getCourseInfo(id))
  };

  handleClick(type, id) {
    let load = {
      course: id,
      user: this.props.state.auth.user.id, 
      token: this.props.state.auth.token
    }
    type === 'signUp' ?
    this.props.dispatch(signUp(load)) 
    : this.props.dispatch(setDisplayView(null))
  };

  handleError() {
    this.props.dispatch(clearError())
  };

  render() {

  const { courseList, singleCourse, course, loggedIn, user, error, loading } = this.props;

  if(error) {
    return (
      <div className="offeredTypes">
       <ul className="coursesList">
       <h1 className="error">{error}</h1>
       
          <button onClick={() => this.handleError()} className="errorButton">Back</button>
      
       </ul>
      </div>
    )
  };

  if(loading) {
    return (
      <div className="offeredTypes">
        <h1 className="styleListing">Loading...</h1>
      </div>
    )
  };

 
  if(!singleCourse) {
    return (
      <div className="offeredTypes">
       <ul className="coursesList">
        {courseList.map((course, index) => {
         return( <DanceStyle key={index} onClick={(id) => this.handleToggle(id)} user={user} loggedIn={loggedIn} course={course} /> )
          })
        }
       </ul>
      </div>
    ) 
  };
 
  
  return(
    <div className="offeredTypes">
      <ul className="coursesList">
      <SingleCourse course={course} enrolled={user.enrolled} onClick={(type, id) => this.handleClick(type, id)}/>

      </ul>
    </div>
  );

}};



const mapStateToProps = state => ({
  state: state,
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  course: state.courses.course,
  singleCourse: state.courses.course !== null,
  courseList: state.courses.courseList,
  loading: state.courses.loading,
  error: state.courses.error
});

export default connect(mapStateToProps)(OfferedTypes);
