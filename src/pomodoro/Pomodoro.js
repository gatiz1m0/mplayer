import React from "react";

import "./Pomodoro.css";
import BreakInterval from './pomAssets/BreakInterval'
import SessionLength from './pomAssets/SessionLength'
import Timer from './pomAssets/Timer'

class Pomodoro extends React.Component {
  constructor() {
    super();
    
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinutes: 25
    }
    
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this)
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this)
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this)
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this)
    this.onUpdateTimerMinutes = this.onUpdateTimerMinutes.bind(this)
    this.onToggleInterval = this.onToggleInterval.bind(this)
    this.resetMinutes = this.resetMinutes.bind(this)
  }
  
  onIncreaseBreakLength() {
    this.setState( (prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }
  
  onDecreaseBreakLength() {
    this.setState( (prevState) => {
      if(prevState.sessionLength <= 1) {
        return {
          sessionLength: 59,
          timerMinutes: 59
        }
      } else {
        return {
          sessionLength: prevState.sessionLength - 1,
          timerMinutes: prevState.timerMinutes - 1
        }
      }
    })
  }
  
  onIncreaseSessionLength() {
    this.setState( (prevState) => {
      if(prevState.sessionLength >= 59) {
        return {
          sessionLength: 1,
          timerMinutes: 1
        }
      } else {
        return {
          sessionLength: prevState.sessionLength + 1,
          timerMinutes: prevState.timerMinutes + 1
        }
      }
    })
  }
  
  onDecreaseSessionLength() {
    this.setState( (prevState) => {
      if(prevState.sessionLength <= 1) {
        return {
          sessionLength: 59,
          timerMinutes: 59
        }
      } else {
        return {
          sessionLength: prevState.sessionLength - 1,
          timerMinutes: prevState.timerMinutes - 1
        }
      }
    })
  }
  
  onUpdateTimerMinutes() {
    this.setState( (prevState) => {
      return {
        timerMinutes: prevState.timerMinutes - 1
      }
    })
  }
  
  resetMinutes() {
    this.setState( (prevState) => {
      return {
        timerMinutes: prevState.sessionLength
      }
    })
  }
  
  onToggleInterval(inSession) {
    if(inSession) {
      this.setState({
        timerMinutes: this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinutes: this.state.breakLength
      })
    }
  }
  
  render() {
    return (
      <div className='main'>
        <div className="title">
          <h2>Do it!  </h2>
          <h3>Study Clock</h3>
        </div>
        <div className="setters-area">
          <section>
            <h4>Break length</h4>
            <BreakInterval
              breakInterval={this.state.breakLength} 
              increaseBreak={this.onIncreaseBreakLength}
              decreaseBreak={this.onDecreaseBreakLength}
            />
          </section>
          <section>
            <h4>Session length</h4>
            <SessionLength 
              sessionLength={this.state.sessionLength} 
              increaseSession={this.onIncreaseSessionLength}
              decreaseSession={this.onDecreaseSessionLength}
            />
          </section>        
        </div>
        <div className="timer-area">
            <Timer
              timerMinutes={this.state.timerMinutes}
              breakLength={this.state.breakLength}
              toggleAction={this.onToggleInterval}
              updateTimerMinutes={this.onUpdateTimerMinutes}
              resetMinutes={this.resetMinutes}
              className="timer" />
          </div>
      </div>
  );
  }
}

export default Pomodoro;
