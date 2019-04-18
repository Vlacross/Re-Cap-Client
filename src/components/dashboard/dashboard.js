import React from 'react';
import { connect } from 'react-redux';
import checkAuth from '../checkAuth/checkAuth';
import './dashboard.css';

export class Dashboard extends React.Component {
  
  
  
  
  render() {

  console.log('Dashing', this.props)

      return (
        <div className="dashboard">
          <h4>
            Dashing Board, Idn't It, Huggaburgh?!
            <div className="courseProgress">
              
            </div>

          </h4>
        </div>
      );
  }

}

const mapStateToProps = state => ({
  state: state,
  user: state.auth.user
});

export default checkAuth()(connect(mapStateToProps)(Dashboard));
