import React from 'react'

import './Intervals.css'

function BreakInterval(props) {
  
  const increaseCounter = () => {
    if(props.breakInterval === 59)
      return;
    
    props.increaseBreak();
  }
  
  const decreaseCounter = () => {
    if(props.breakInterval === 1)
      return;
    
    props.decreaseBreak();
  }
  
  return (
    <section className="interval-container">
      <button onClick={increaseCounter}>Up</button>
      <p>{props.breakInterval}</p>
      <button onClick={decreaseCounter}>Down</button>
    </section>
  );
}

export default BreakInterval