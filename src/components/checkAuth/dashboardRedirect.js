import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default () => Component => {


  function routeToDashboard(props) {

    const { loggedIn, loading, error, ...passThroughProps } = props;

    if(loading) {

      return <div>Loading...</div>
    } 
    else if (!loggedIn || error) {

      return <Component {...passThroughProps} />
      
    }
    return <Redirect to="/dashboard" />

  };
  
  
  const displayName = Component.displayName || Component.name || 'Component';
  routeToDashboard.displayName = `routeToDashboard(${displayName})`;
 
  
  const mapStateToProps = (state, props) => ({
    loggedIn: state.auth.user !== null,
    loading: state.auth.loading,
    error: state.auth.error 
  });
 
  
  return connect(mapStateToProps)(routeToDashboard);
};




/**
 * 
 * display Name Docs --  https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
 * Redirect docs --  https://reacttraining.com/react-router/web/api/Redirect
 * 
 * 
 * 
 */