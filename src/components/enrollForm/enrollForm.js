import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../input/input';
import { authFetch } from '../../actions';
import { toggleShowPass } from '../../actions';
import { required, notEmpty, trimmed, lengthMax, lengthMin, matches, isLower, validEmailFormat } from '../../validators';
import dashboardRedirect from '../checkAuth/dashboardRedirect';

import './enrollForm.css';

let minLength = lengthMin(6);
let maxLength = lengthMax(14);
let nameMinLength =  lengthMin(2);
let nameMaxLength = lengthMax(24);
let passMatch = matches('password');



export class EnrollForm extends React.Component {

    onSubmit(values, dispatch) {
     
      dispatch(authFetch(values))
    };

    showPass(e) {
      e.preventDefault();
      this.props.dispatch(toggleShowPass())
    }


    render() {

      
      let { error, handleSubmit, pristine, submitting, invalid, view } = this.props

    if(error) {
      error = <div className="formError">{this.props.error}</div>
    }

    let passView = view ? 'text' : 'password';
      
      
  return(
    <form
      className="enrollForm"
      onSubmit={handleSubmit(this.onSubmit)}>
    {error}

    <Field 
      name="firstname"
      type="text"
      component={Input}
      label="Firstname"
      validate={[required, notEmpty, trimmed, nameMaxLength, nameMinLength]}
       />

    <Field 
      name="lastname"
      type="text"
      component={Input}
      label="Lastname"
      validate={[required, notEmpty, trimmed, nameMaxLength, nameMinLength]} 
      />

    <Field 
      name="email"
      type="text"
      component={Input}
      label="E-mail"
      validate={[required, notEmpty, trimmed, isLower, validEmailFormat]}
       />
    
    <Field 
      name="username"
      type="text"
      component={Input}
      label="Username"
      validate={[required, notEmpty, trimmed,  minLength, maxLength, isLower]} 
      />
 
    <Field 
      name="password"
      type={passView}
      component={Input}
      label="Password"
      validate={[required, notEmpty, trimmed,  minLength, maxLength, isLower]} 
      />
      
    <Field 
      name="passwordCheck"
      type={passView}
      component={Input}
      label="Re-enter Password"
      validate={[required, notEmpty, trimmed,  minLength, maxLength, isLower, passMatch]} 
      />

    <div className="formInput enroll-controls">

       <button
        className="passShow loginButton"
        onClick={(e) => this.showPass(e)}>
          Show Pass
      </button>

      <button
      className="enrollButton"
        type="submit"
        disabled={pristine || submitting || invalid}>
        Submit
      </button>
    </div>

    </form>
  )      
      

    };

};

EnrollForm = connect(
  state => ({
    state: state,
    initialValues: state.auth.user,
    error: state.auth.error,
    view: state.views.showPass
  }))(EnrollForm);



EnrollForm = reduxForm({
  form: 'enrollForm',
  onSubmitFail: (errors, dispatch) => dispatch(focus('enroll', 'username'))
})(EnrollForm);

export default  dashboardRedirect()(EnrollForm);


/*https://reactjs.org/docs/react-component.html#componentdidupdate -  */