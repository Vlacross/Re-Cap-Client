import React from 'react';
import { Field, reduxForm, focus, change } from 'redux-form';
import { connect } from 'react-redux';
import { toggleShowPass } from '../../actions';
import Input from '../input/input';
import { authFetch } from '../../actions';
import { required, notEmpty, trimmed, lengthMax, lengthMin, isLower } from '../../validators';
import dashboardRedirect from '../checkAuth/dashboardRedirect';


import './loginForm.css';

const demoAccount = {
  username: 'jonjon',
  password: 'unhashed'
}

let minLength = lengthMin(4);
let maxLength = lengthMax(11);

export class LoginForm extends React.Component {

    onSubmit(values, dispatch) {
      dispatch(authFetch(values))
    };

    autoFill(e) {
      e.preventDefault();
      console.log(this.props)
      this.props.change('username', demoAccount.username)
      this.props.change('password', demoAccount.password)
    };

    showPass(e) {
      e.preventDefault();
      this.props.dispatch(toggleShowPass())
    }

    
  render() {
      

  const {  handleSubmit, pristine, submitting, view } = this.props

  let passView = view ? 'text' : 'password';

  let error
  if(this.props.error) {
    error = <div className="formError">{this.props.error}</div>
  } 
  console.log('bigs')

      
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
      login={true}
      validate={[required, notEmpty, trimmed, minLength, maxLength, isLower]} 
      />
    
    <Field 
      name="password"
      type={passView}
      component={Input}
      label="Password"
      login={true}
      validate={[required, notEmpty, trimmed, minLength, maxLength, isLower]} />

    <div className="formInput">
    <div className="input-controls">

      <button
        className="passShow loginButton"
        onClick={(e) => this.showPass(e)}>
          Show Pass
      </button>

      <button
        className="autoFill loginButton"
        onClick={(e) => this.autoFill(e)}>
          Try the Demo
      </button>

    </div>

      <button
      className="loginButton"
       type="submit"
       disabled={pristine || submitting}>
        Submit
    </button>
    </div>
     

    </form>
  )      
      

    };

};


  
  LoginForm = connect(
    state => ({
      state: state,
      loggedIn: state.auth.user !== null,
      initialValues: state.auth.user,
      error: state.auth.error,
      view: state.views.showPass
    }))(LoginForm)

     LoginForm = reduxForm({
    form: 'loginForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
  })(LoginForm);
  
    
    LoginForm = dashboardRedirect()(LoginForm);
  
 

export default LoginForm;


/*https://reactjs.org/docs/react-component.html#componentdidupdate -  */