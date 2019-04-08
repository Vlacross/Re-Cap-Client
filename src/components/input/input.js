import React, { Component } from 'react';
import './input.css'

export default class Input extends React.Component {

  
componentDidUpdate(prevProps) {
  /*enabling focus when element in active */
  if(!prevProps.meta.active && this.props.meta.active) {
    
  this.input.focus();
  }
}

  render() {

    // const { input: { value, onChange } } = this.props;
    const { input, type, label } = this.props

    return (
      <div className="formInput">
        <label htmlFor={label}>
          {label}
        </label>
        <input
           {...input}
           id={input.name}
           type={type}
           ref={input => (this.input = input)}
            />
      </div>
    )
  }
}



