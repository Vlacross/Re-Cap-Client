import React from 'react';

// import './singleCourse.css'


export default function DoubleCheck( { onClick, user, checkingFor } ) { 


  let DROP_OUT = 'drop out';
  let DELETE_ACCOUNT = "delete your account"
  let COMPLETELY_REMOVE = "completely remove"
  let BACK = 'back';
  let response; 
  let button;

  switch(checkingFor) {
    case DROP_OUT:
    response = <h1>are you sure you want to {DROP_OUT} of the {user.courses[0].style} course?</h1>;
    button = <button onClick={() => onClick(DROP_OUT)}>Drop Out</button>
    break;
    case DELETE_ACCOUNT:
    response = (<h1>are you sure you want to {DELETE_ACCOUNT}?</h1>);
    button = <button onClick={() => onClick(DELETE_ACCOUNT)}>Delete</button>
    break;
    case COMPLETELY_REMOVE:
    response = (<h1>Pressing Delete will {COMPLETELY_REMOVE} your account!</h1>);
    button = <button onClick={() => onClick(COMPLETELY_REMOVE)}>Delete</button>
    break;
  }

  
  return(
    <div className="doubleCheckWrapper">
      <div className="doubleCheck">
        {response}
        <div className="buttonHousing">
          {button}
          <button onClick={() => onClick(BACK)}>Back</button>
        </div>
        
      </div>
    </div>
  );

};


