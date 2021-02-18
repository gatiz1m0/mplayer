import React from 'react'

import './Intervals.css'

function SessionLength (props) {
  
  return(
    <section className="interval-container">
    <button>Up</button>
    <p>{props.sessionLength}</p>
    <button>Down</button>
    </section>
  )
}

export default SessionLength