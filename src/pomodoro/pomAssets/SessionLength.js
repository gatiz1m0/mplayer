import React from 'react'

import './Intervals.css'

function SessionLength (props) {
  
  return(
    <section className="interval-container">
    <button>Down</button>
    <p>{props.sessionLength}</p>
    <button>Up</button>
    </section>
  )
}

export default SessionLength