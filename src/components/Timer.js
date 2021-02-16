import React from 'react'

class Timer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      isSession: true
    }
  }
  render() {
    return(
      <section>
        <section>
          <h4>{this.props.isSession === true ? "Session" : "Break"}</h4>
          
        </section>
      </section>
    )
  }
}

export default Timer