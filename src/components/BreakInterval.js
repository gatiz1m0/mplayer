import React from 'react'

import './Intervals.css'

function BreakInterval(props) {
  
  return (
    <section className="interval-container">
      <button>Up</button>
      <p>{props.breakInterval}</p>
      <button>Down</button>
    </section>
  );
}

export default BreakInterval