import React from 'react';
import { connect } from 'react-redux';
import checkAuth from '../checkAuth/checkAuth';
import './dashboard.css';

export class Dashboard extends React.Component {
  
  
  
  
  render() {

  console.log('Dashing', this.props)
  let { firstname, lastname, contact } = this.props.user;

      return (
        <div className="dashboard">
          <h1 className="dashboardTitle">
            Dashing Board, Idn't It, Huggaburgh?!
          </h1>
            <div className="courseProgress">
            <h2>{firstname} {lastname}</h2>
            <p>{contact}</p>
              
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
