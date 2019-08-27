import React from 'react';
import { connect } from 'react-redux';
import NavBarLink from '../navBar/navBarLink';
import { setDisplayView, dropOut, deleteAccount, doubleCheck, clearProtected } from '../../actions';
import checkAuth from '../checkAuth/checkAuth';
import DoubleCheck from './doubleCheck';
import './dashboard.css';

export class Dashboard extends React.Component {
  
  componentDidMount() {
  }
  
  setCourseListView() {
    this.props.dispatch(setDisplayView(null))
   }

   handleDropOutPrompt(type) {

    this.props.dispatch(doubleCheck(type))
   }

   clearDropOutPrompt() {

    let status = {
      checkingFor: ''
      }
    this.props.dispatch(doubleCheck(status))
   }

   dropOut() {
    
   }

   handleClick(type) {
    let load = this.props.user.enrolled ? 
        {
        course: this.props.user.courses[0].id,
        user: this.props.user.id, 
        token: this.props.state.auth.token
        } : {
        user: this.props.user.id, 
        token: this.props.state.auth.token
        }

    switch(type) {
      case 'drop out':
        this.props.dispatch(dropOut(load))
        this.clearDropOutPrompt();
        break;

      case 'delete your account':
        this.props.dispatch(doubleCheck('completely remove'))
        this.handleDropOutPrompt('completely remove')
        break;

      case 'completely remove':
        this.props.dispatch(deleteAccount(load, this.props.protectedAccount))
        break;

      case 'back':
        this.clearDropOutPrompt();
        this.props.dispatch(clearProtected());
        break;
      default:
      this.clearDropOutPrompt()
    }
   }
  
  render() {

    let offeredTypes = {
      name: "Dance Styles",
      path: "/offeredTypes"
    }


    let DROP_OUT = 'drop out';
    let DELETE_ACCOUNT = "delete your account";
    let doubleCheckResponse;
    let reserved;
    let isEnrolled;
    let courseBrowse;
    let courseProgress;
    


  let { firstname, lastname, contact, enrolled, progress } = this.props.user;


  doubleCheckResponse = !this.props.doubleCheck.isOpen ?
        undefined :
        (<DoubleCheck onClick={(type) => this.handleClick(type)} user={this.props.user} checkingFor={this.props.doubleCheck.checkingFor} error={this.props.protectedAccount} />);
      
        reserved = this.props.protectedAccount !== null ? 
        (<DoubleCheck onClick={(type) => this.handleClick(type)} user={this.props.user} checkingFor={this.props.doubleCheck.checkingFor} error={this.props.protectedAccount} />)
        :
        undefined;

  
  if(!enrolled || enrolled === null) {
    courseBrowse = <NavBarLink name={offeredTypes.name} path={offeredTypes.path} onClick={() => this.setCourseListView()} />
    isEnrolled = <h2>You are currently not enrolled in any dance courses. Click here to view a list of our offered courses!</h2>
  }
  
  else if(enrolled) {
    let { style, teacher, details: { schedule, length, difficulty } } = this.props.user.courses[0];
    let classes = length * schedule.length
    
    courseProgress = !progress >= 1 ?
        (`You have not yet started this ${length} week course.`) :
       (`You have currently completed ${progress} out of ${classes} classes in a ${length} week course.`);

    
      
    isEnrolled = (
      <div className="userInfo">
        <h2>You are currently enrolled in our {style} dance course!</h2>
        <button name="dropOut" className="dropOut dashboardButton" onClick={() => this.handleDropOutPrompt(DROP_OUT)}>Drop Out</button>
        <p>Current teacher: {teacher}</p>
        <p className="courseProgress">{courseProgress}</p>
        <p>Rated difficulty of {difficulty} out of 5.</p>
       
      </div>
      )
    }
    
    return (
      <div className="dashboard">
          <h1 className="dashboardTitle">
            
            Welcome to your homePage!
          </h1>
            <div className="courseProgress">
            <h2>{firstname} {lastname}</h2>
            <p>{contact}</p>
            <div className="enrolled">
              {isEnrolled}
              {courseBrowse}
              <button name="accountDelete" className="accountDelete dashboardButton" onClick={() => this.handleDropOutPrompt(DELETE_ACCOUNT)}>Delete Account</button>
              {doubleCheckResponse}
              {!this.props.doubleCheck.isOpen && this.props.protectedAccount && reserved}
            
            </div>
              
            </div>

        </div>
      );
  }

};

const mapStateToProps = state => ({
  state: state,
  user: state.auth.user,
  doubleCheck: state.views.doubleCheck,
  protectedAccount: state.auth.protectedAccount
});

export default checkAuth()(connect(mapStateToProps)(Dashboard));
