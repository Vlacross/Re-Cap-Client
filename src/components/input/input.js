import React from 'react';

import './input.css';

export default class Input extends React.Component {

  
componentDidUpdate(prevProps) {
  /*enabling focus when element in active */
  if(!prevProps.meta.active && this.props.meta.active) {
    
  this.input.focus();
  }
}

  render() {
    
    const { input, type, label, name } = this.props;
    
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
       error = <div className="inputError">{this.props.meta.error}</div>;
    }
  
    
    

    return (
      <div className="formInput">
        <label htmlFor={name}>
          {label}
        </label>

        {error}  
        
        <input
           {...input}
           id={input.name}
           type={type}
           ref={input => (this.input = input)}
            />
      </div>
    );
  }
};


/*
example from docs for inserting meta-touched and meta-error
https://redux-form.com/7.2.2/docs/migrationguide.md/ */
