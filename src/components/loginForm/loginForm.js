import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/input';
import { authFetch } from '../../actions'

export class LoginForm extends React.Component {

    onSubmit(values, dispatch) {
      console.log('valley', values)
      dispatch(authFetch(values))
      /*eventually write actions sending fetch requests with values */
    };


    render() {

    
      
      const { error, handleSubmit, pristine, reset, submitting } = this.props
      
      
  return(
    <form
      className="loginForm"
      onSubmit={handleSubmit(this.onSubmit)}>
    {error}
    
    <Field 
      name="username"
      type="text"
      component={Input}
      label="Username" />


    
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
  onSubmitFail: (errors, dispatch) => console.log(errors)
})(LoginForm)



/*https://reactjs.org/docs/react-component.html#componentdidupdate -  */