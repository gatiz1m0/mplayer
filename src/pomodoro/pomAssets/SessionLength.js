import React from 'react'

import './Intervals.css'

function SessionLength (props) {
  const increaseSession = () => {  
    let length = props.sessionLength
    props.increaseSession(length);
  }
  
  const decreaseSession = () => {
    props.decreaseSession();
  }
  
  return(
    <section className="interval-container">
      <button onClick={decreaseSession}>▼</button>
      <p>{props.sessionLength}</p>
      <button onClick={increaseSession}>▲</button>
    </section>
  )
}

export default SessionLength