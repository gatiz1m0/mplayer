import React from 'react'

class Timer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      isSession: true,
      timerSecond: 0
    }
  }
  render() {
    return(
      <section>
        <section>
          <h4>{this.props.isSession === true ? "Session" : "Break"}</h4>
          <span>{this.props.timerMinute}</span>
          <span>:</span>
          <span>{this.state.timerSecond === 0 ? "00" : this.state.timerMinute < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>
        </section>
      </section>
    )
  }
}

export default Timer