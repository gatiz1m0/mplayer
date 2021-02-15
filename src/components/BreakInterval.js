import React from 'react'

function BreakInterval(props) {
  
  return (
    <section>
      <button>Up</button>
      <p>{props.breakInterval}</p>
      <button>Down</button>
    </section>
  );
}

export default BreakInterval