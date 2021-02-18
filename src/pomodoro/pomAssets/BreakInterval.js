import React from 'react'

import './Intervals.css'

function BreakInterval(props) {
  
  const increaseCounter = () => {
    
  }
  
  const decreaseCounter = () => {
    
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