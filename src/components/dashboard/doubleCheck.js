import React from 'react';

// import './singleCourse.css'


export default function DoubleCheck( { onClick, style, checkingFor } ) { 


  let DROP_OUT = 'dropOut';
  let BACK = 'back';

  
  return(
    <div className="doubleCheck">
      <h1>are you sure you want to {checkingFor} of the {style} course?</h1>
      <button onClick={() => onClick(DROP_OUT)}>Drop Out</button>
      <button onClick={() => onClick(BACK)}>Back</button>
      
    </div>
  );

};


