import React from 'react'

import './Intervals.css'

function BreakInterval(props) {
  let length = props.breakLength
  
  const increaseCounter = () => {
    props.increaseBreak(length);
  }
  
  const decreaseCounter = () => {
    props.decreaseBreak(length);
  }
  
  return (
    <section className="interval-container">
      <button onClick={decreaseCounter}>▼</button>      
      <p>{props.breakLength}</p>
      <button onClick={increaseCounter}>▲</button>
    </section>
  );
}

export default BreakInterval