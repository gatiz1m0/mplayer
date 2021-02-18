import React from 'react'

import './Intervals.css'

function SessionLength (props) {
  const increaseSession = () => {
    if(props.sessionLength >= 59)
      return;
    
    props.increaseSession();
  }
  
  const decreaseSession = () => {
    if(props.sessionLength <= 1)
      return;
    
    props.decreaseSession();
  }
  
  return(
    <section className="interval-container">
    <button onClick={decreaseSession}>Down</button>
    <p>{props.sessionLength}</p>
    <button onClick={increaseSession}>Up</button>
    </section>
  )
}

export default SessionLength