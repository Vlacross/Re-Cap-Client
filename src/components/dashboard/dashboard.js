import React from 'react';
import { connect } from 'react-redux';
import NavBarLink from '../navBar/navBarLink';
import ProgressBar from './progressBar';
import { setDisplayView } from '../../actions/courseActions';
import checkAuth from '../checkAuth/checkAuth';
import './dashboard.css';

export class Dashboard extends React.Component {
  
  componentDidMount() {
    console.log('moutnymountymountbounty')
  }
  
  setCourseListView() {
    this.props.dispatch(setDisplayView(null))
   }
  
  render() {

    let offeredTypes = {
      name: "Dance Styles",
      path: "/offeredTypes"
    }

    let isEnrolled;
    let courseBrowse;
    let progressBar;

  console.log('Dashing', this.props)

  let { firstname, lastname, contact, enrolled, courses, progress } = this.props.user;

  if(!enrolled || enrolled === null) {
    courseBrowse = <NavBarLink name={offeredTypes.name} path={offeredTypes.path} onClick={() => this.setCourseListView()} />
    isEnrolled = <h2>You are currently not enrolled in any dance courses. Click here to view a list of our offered courses!</h2>
  }

  else if(enrolled) {
    let { style, teacher, details: { schedule, length, difficulty } } = this.props.user.courses[0];
    let classes = length * schedule.length

    isEnrolled = (
      <div className="userInfo">
        <h2>You are currently enrolled in our {style} dance course!</h2>
        <p>Current teacher: {teacher}</p>
        <p className="courseProgress">You have currently completed {progress} out of {classes} classes in a {length} week course.</p>
        <p>Difficulty Rating: {difficulty}</p>
      </div>
      )
   progressBar = <ProgressBar classes={classes} progress={progress}/>
  }


      return (
        <div className="dashboard">
          <h1 className="dashboardTitle">
            Dashing Board, Idn't It, Huggaburgh?!
            Welcome to your homePage!
          </h1>
            <div className="courseProgress">
            <h2>{firstname} {lastname}</h2>
            <p>{contact}</p>
            <div className="enrolled">
            {isEnrolled}
            {courseBrowse}
            {progressBar}
            </div>
              
            </div>

        </div>
      );
  }

}

const mapStateToProps = state => ({
  state: state,
  user: state.auth.user
});

export default checkAuth()(connect(mapStateToProps)(Dashboard));
