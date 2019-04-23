import React from 'react';


export default function  progressBar(props) {
const { classes, progress } = props

  let step = [];
  for(let i = 0; i < classes; i++) {
    step.push(<div key={i} className="increment"></div>)
  }
  for(let i = 0; i < progress; i++) {
    step[i] = <div key={i} className="increment progress"></div>
  }

  return <div className="progressBar">{step}</div>
};

