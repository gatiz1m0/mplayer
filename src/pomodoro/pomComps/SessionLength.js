import React from 'react'

import './Intervals.css'

function SessionLength (props) {
  let length = props.sessionLength
  
  const increaseSession = () => {      
    props.increaseSession(length);
  }
  
  const decreaseSession = () => {
    props.decreaseSession(length);
  }
  
  return(
    <section className="interval-container">
      <button onClick={decreaseSession}>▼</button>
      <p>{props.sessionLength === 0 ? "00" :
              props.sessionLength < 10 ? "0" + props.sessionLength :
              props.sessionLength}</p>
      <button onClick={increaseSession}>▲</button>
    </section>
  )
}

export default SessionLength