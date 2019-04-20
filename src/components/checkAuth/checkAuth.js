import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default () => Component => {

  function CheckAuth(props) {


    const { loggedIn, loading, error, ...passThroughProps } = props;

    if(loading) {
      return <div>Loading...</div>
    } 
    else if (!loggedIn || error) {
      
      return <Redirect to="/login" />
    }
    
    return <Component {...passThroughProps}/>

  };
  
  
  const displayName = Component.displayName || Component.name || 'Component';
  CheckAuth.displayName = `CheckAuth(${displayName})`;
 
  
  const mapStateToProps = (state, props) => ({
    loggedIn: state.auth.user !== null,
    loading: state.auth.loading,
    error: state.auth.error 
  });
 
  
  return connect(mapStateToProps)(CheckAuth);
};


/**
 * 
 * display Name Docs --  https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
 * Redirect docs --  https://reacttraining.com/react-router/web/api/Redirect
 * 
 * 
 * 
 */