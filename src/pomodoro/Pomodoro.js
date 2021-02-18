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
  }
  
  onIncreaseBreakLength() {
    this.setState( (prevState) => {
      return {
        breakLenght: prevState.breakLength + 1
      }
    })
  }
  
  render() {
    return (
      <div className='main'>
        <div className="title">
          <h2>Do it!  </h2>
          <h3>Pomodoro Clock</h3>
        </div>
        <div className="setters-area">
          <section>
            <h4>Break length</h4>
            <BreakInterval
              breakInterval={this.state.breakLength} 
              increaseBreak={this.state.onIncreaseBreakLenght}
            />
          </section>
          <section>
            <h4>Session length</h4>
            <SessionLength sessionLength={this.state.sessionLength} />
          </section>        
        </div>
        <div className="timer-area">
            <Timer
              timerMinutes={this.state.timerMinutes}
              className="timer" />
          </div>
      </div>
    );
  }
}

export default Pomodoro;
