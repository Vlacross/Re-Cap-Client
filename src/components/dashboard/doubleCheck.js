import React from 'react';

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
      button = <button className="doubleCheckButton" onClick={() => onClick(DROP_OUT)}>Drop Out</button>
      break;
    case DELETE_ACCOUNT:
      response = (<h1>are you sure you want to {DELETE_ACCOUNT}?</h1>);
      button = <button className="doubleCheckButton" onClick={() => onClick(DELETE_ACCOUNT)}>Delete</button>
      break;
    case COMPLETELY_REMOVE:
      response = (<h1>Pressing Delete will {COMPLETELY_REMOVE} your account!</h1>);
      button = <button className="doubleCheckButton" onClick={() => onClick(COMPLETELY_REMOVE)}>Delete</button>
      break;
    default:
    response = (<h1>This is an error in the wiring of this site, press back or refresh the page!</h1>);
  }

  
  return(
    <div className="doubleCheckWrapper">
      <div className="doubleCheck">
        {response}
        <div className="buttonHousing">
          {button}
          <button className="doubleCheckButton" onClick={() => onClick(BACK)}>Back</button>
        </div>
        
      </div>
    </div>
  );

};


