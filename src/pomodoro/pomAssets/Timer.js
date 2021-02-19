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
    this.togglePlay = this.togglePlay.bind(this)
  }
  
  togglePlay() {
    this.setState( (prevState) => {
      return {
        onPlay: !prevState.onPlay
      }
    })
  }
  
   async playStop() { // This needs to be asynchronous as values don't changed in a time linear fashion
    await this.togglePlay();
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
        if(this.props.timerMinutes <= 0){
          if(this.state.inSession){
            this.setState({
              inSession: false
            })
            this.props.toggleInterval(this.state.inSession)
          } else {
            this.setState({
              inSession: true
            })
            this.props.toggleInterval(this.state.inSession)
          }
        }
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
    this.setState( (prevState) => {
      return {
        onPlay: true  // So when we call playStop down here it will pause the clock
      }
    })
    this.playStop();
    
    this.setState({
      timerSeconds: 0
    })
    this.props.resetMinutes();
  }
 
  render() {
    return(
      <section>       
        <div className="timer-area">
          <button onClick={this.playStop}>{this.state.onPlay ? "❚❚" : "▶"}</button>
          <section className="timer">
            <h4 className="session">{this.state.inSession === true ?
                "Session" : "Break"}</h4>
            <span>{this.props.timerMinutes === 0 ? "00" :
              this.props.timerMinutes < 10 ? "0" + this.props.timerMinutes :
              this.props.timerMinutes}
            </span>
            <span>:</span>
            <span>{this.state.timerSeconds === 0 ? "00" :
              this.state.timerSeconds < 10 ? "0" + this.state.timerSeconds :
              this.state.timerSeconds}
            </span>
          </section>
          <button onClick={this.reset}>Reset</button>
        </div>
      </section>      
    )
  }
}

export default Timer