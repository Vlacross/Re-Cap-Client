import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/input';
import './enrollForm.css'

export class EnrollForm extends React.Component {

    onSubmit(values) {
      console.log('valley', values)
      /*eventually write actions sending fetch requests with values */
    };


    render() {

    
      
      const { error, handleSubmit, pristine, reset, submitting } = this.props
      
      
  return(
    <form
      className="enrollForm"
      onSubmit={handleSubmit(this.onSubmit)}>
    {error}

    <Field 
      name="firstname"
      type="text"
      component={Input}
      label="Firstname" />

    <Field 
      name="lastname"
      type="text"
      component={Input}
      label="Lastname" />
    
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
      
    <Field 
      name="passwordCheck"
      type="text"
      component={Input}
      label="Re-enter Password" />

    <button
      type="submit">
       Submit</button>

    </form>
  )      
      

    };

};

export default reduxForm({
  form: 'enrollForm',
  onSubmitFail: (errors) => console.log(errors)
})(EnrollForm)



/*https://reactjs.org/docs/react-component.html#componentdidupdate -  */