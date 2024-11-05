import React from 'react'
import React from "react";

function EyesOnMe() {
  function handleFocus() {
    console.log("Good!")
    console.log("Good!");
  }

  function handleBlur() {
    console.log("Hey! Eyes on me!")
    console.log("Hey! Eyes on me!");
  }

  return (
    <button 
      onFocus={handleFocus}
      onBlur={handleBlur}
    >Click me</button>
  )
    <button onFocus={handleFocus} onBlur={handleBlur}>
      Eyes on me
    </button>
  );
}


export default EyesOnMe;