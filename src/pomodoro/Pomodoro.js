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
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }
  
  onIncreaseSessionLength() {
    this.setState( (prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinutes: prevState.timerMinutes + 1
      }
    })
  }
  
  onDecreaseSessionLength() {
    this.setState( (prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinutes: prevState.timerMinutes - 1
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
              updateTimerMinutes={this.onUpdateTimerMinutes}
              breakLength={this.state.breakLength}
              className="timer" />
          </div>
      </div>
  );
  }
}

export default Pomodoro;
