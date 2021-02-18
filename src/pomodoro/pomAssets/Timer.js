import React from 'react'

import './Timer.css'

class Timer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      inSession: true,
      timerSeconds: 0
    }
  }
  
  render() {
    return(
      <section>       
        <div className="timer-area">
          <button>▶❚❚</button>
          <section className="timer">
          <h4 className="session">{this.state.isSession === true ?
              "Session" : "Break"}</h4>
          <span>{this.props.timerMinutes}</span>
          <span>:</span>
          <span>{this.state.timerSeconds === 0 ? "00" :
            this.state.timerSeconds < 10 ? "0" + this.state.timerSeconds :
            this.state.timerSeconds}</span>
        </section>
          <button>Set</button>
        </div>
      </section>
      
    )
  }
}

export default Timer