import React from 'react'

import './Intervals.css'

function BreakInterval(props) {
  
  return (
    <section className="interval-container">
      <button onClick={icreaseCounter}>Up</button>
      <p>{props.breakInterval}</p>
      <button onClick={decreaseCounter}>Down</button>
    </section>
  );
}

export default BreakInterval