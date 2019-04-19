import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import Input from '../input/input';
import { authFetch } from '../../actions'
import { required, notEmpty, trimmed, lengthMax, lengthMin } from '../../validators';
import dashboardRedirect from '../checkAuth/dashboardRedirect';


import './loginForm.css'

let minLength = lengthMin(4);
let maxLength = lengthMax(11);

export class LoginForm extends React.Component {
  

    onSubmit(values, dispatch) {
      dispatch(authFetch(values))
    };

    
  render() {
      

      const {  handleSubmit, pristine, reset, submitting } = this.props

    
    
      let error
      if(this.props.error) {
        error = <div className="formError">{this.props.error}</div>
  }
      
  return(
    <form
      className="loginForm"
      onSubmit={handleSubmit(this.onSubmit)}>
    {error}
    
    <Field 
      name="username"
      type="text"
      component={Input}
      label="Username" 
      validate={[required, notEmpty, trimmed, minLength, maxLength]} />


    
    <Field 
      name="password"
      type="text"
      component={Input}
      label="Password"
      validate={[required, notEmpty, trimmed, minLength, maxLength]} />

      <button
      type="submit"> Submit</button>

     

    </form>
  )      
      

    };

};

  
  LoginForm = connect(
    state => ({
      state: state,
      loggedIn: state.auth.user !== null,
      initialValues: state.auth.user,
      error: state.auth.error
    }))(LoginForm)

     LoginForm = reduxForm({
    form: 'loginForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
  })(LoginForm)
  
    
    LoginForm = dashboardRedirect()(LoginForm);
  
 

export default LoginForm

// export default checkAuth()(LoginForm)


/*https://reactjs.org/docs/react-component.html#componentdidupdate -  */