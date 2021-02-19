import React from 'react'

import './Intervals.css'

function SessionLength (props) {
  let length = props.sessionLength
  const increaseSession = () => {  
    
    props.increaseSession(length);
  }
  
  const decreaseSession = () => {
    //let length = props.sessionLength
    props.decreaseSession(length);
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