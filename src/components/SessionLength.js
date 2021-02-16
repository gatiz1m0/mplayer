import React from 'react'

function SessionLength (props) {
  
  return(
    <section className="interval-container">
    <button>Up</button>
    <p>{props.SessionLength}</p>
    <button>Down</button>
    </section>
  )
}

export default SessionLength