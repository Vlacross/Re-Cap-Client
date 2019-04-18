import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


export default () => Component => {

  console.log('checking auths!!')
  function CheckAuth(props) {


    const showLoad = <div>Loading...</div>;
    const { loggedIn, loading, error, ...passThroughProps } = props;

    if(loading) {
      return {showLoad}
    } 
    else if (!loggedIn || error) {
      console.log(error, loggedIn)
      return <Redirect to="/login" />
    }
    console.log('movingToWrappedComponent')
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