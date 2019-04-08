import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/input';

export class LoginForm extends React.Component {

    onSubmit(values) {
      console.log('valley', values)
      /*eventually write actions sending fetch requests with values */
    };


    render() {

    
      
      const { error, handleSubmit, pristine, reset, submitting } = this.props
      
      
  return(
    <form
      className="loginForm"
      onSubmit={handleSubmit(this.onSubmit)}>
    {error}
    <label htmlFor="username">Username</label>
    <Field 
      name="username"
      type="text"
      component={Input}
      label="Username" />


    <label htmlFor="password">Password</label>
    <Field 
      name="password"
      type="text"
      component={Input}
      label="Password" />
      <button
      type="submit"> Submit</button>

    </form>
  )      
      

    };

};

export default reduxForm({
  form: 'loginForm',
  onSubmitFail: (errors) => console.log(errors)
})(LoginForm)



/*https://reactjs.org/docs/react-component.html#componentdidupdate -  */