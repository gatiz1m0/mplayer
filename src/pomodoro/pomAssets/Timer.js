import React from 'react'

import './Timer.css'

class Timer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      inSession: true,
      timerSeconds: 0,
      intervalId: 0
    }
    
    const playSymbol = "▶";
    const pauseSymbol ="❚❚";
    let symbol = playSymbol;

    this.play = this.play.bind(this)
    this.reset = this.reset.bind(this)
    this.decreaseTimer = this.decreaseTimer.bond(this)
  }
  
  play() {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    
    this.setState({
      intervalId: intervalId
    })
  }
  
  decreaseTimer() {
    switch(this.state.timerSeconds) {
      case 0:
        this.setState( (prevState) => {
          return 
        })
    }
  }

  reset() {

  }
  
  render() {
    return(
      <section>       
        <div className="timer-area">
          <button onClick={this.play}>{this.symbol}</button>
          <section className="timer">
          <h4 className="session">{this.state.isSession === true ?
              "Session" : "Break"}</h4>
          <span>{this.props.timerMinutes}</span>
          <span>:</span>
          <span>{this.state.timerSeconds === 0 ? "00" :
            this.state.timerSeconds < 10 ? "0" + this.state.timerSeconds :
            this.state.timerSeconds}</span>
        </section>
          <button onClick={this.reset}>Set</button>
        </div>
      </section>
      
    )
  }
}

export default Timer