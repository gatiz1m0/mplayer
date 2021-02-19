import React from 'react'

import './Intervals.css'

function BreakInterval(props) {
  
  const increaseCounter = () => {
    props.increaseBreak();
  }
  
  const decreaseCounter = () => {
    props.decreaseBreak();
  }
  
  return (
    <section className="interval-container">
      <button onClick={decreaseCounter}>▼</button>      
      <p>{props.breakInterval}</p>
      <button onClick={increaseCounter}>▲</button>
    </section>
  );
}

export default BreakInterval