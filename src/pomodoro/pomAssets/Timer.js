import React from 'react'

import './Timer.css'

class Timer extends React.Component {
  constructor() {
    super();
    
    this.state = {
      inSession: true,
      timerSeconds: 0,
      intervalId: 0,
      onPlay: false
    }

    this.playStop = this.playStop.bind(this)
    this.reset = this.reset.bind(this)
    this.decreaseTimer = this.decreaseTimer.bind(this)
  }
  
  playStop() {
    this.setState( (prevState) => {
      return {
        onPlay: !prevState.onPlay
      }
    })
    //console.log("onPlay is " + this.state.onPlay)
    
    if(this.state.onPlay){
      let intervalId = setInterval(this.decreaseTimer, 1000);

      this.setState({
        intervalId: intervalId
      })
    } else {
      clearInterval(this.state.intervalId)
    }
  }
  
  decreaseTimer() {
    switch(this.state.timerSeconds) {
      case 0:
        this.props.updateTimerMinutes();
        this.setState({
          timerSeconds: 59
        })
        break;
      default:
        this.setState( (prevState) => {
          return {
            timerSeconds: prevState.timerSeconds - 1
          }
        })
        break;
    }
  }

  reset() {
    
  }
 
  render() {
    return(
      <section>       
        <div className="timer-area">
          <button onClick={this.playStop}>{this.onPlay ? "❚❚" : "▶"}</button>
          <section className="timer">
          <h4 className="session">{this.state.inSession === true ?
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