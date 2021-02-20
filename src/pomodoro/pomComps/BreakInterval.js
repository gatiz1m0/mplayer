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
      <p>{this.props.breakLength === 0 ? "00" :
              this.props.breakLength < 10 ? "0" + this.props.breakLength :
              this.props.breakLength}</p>
      <button onClick={increaseCounter}>▲</button>
    </section>
  );
}

export default BreakInterval