import React from "react";

function FunCom(props) {
    return(
      <div className='Box'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.author}</p>
      </div>
    );
  }
  
  export default FunCom;
  