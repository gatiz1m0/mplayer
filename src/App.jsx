import React from "react";

import "./App.css";
import BreakInterval from './components/BreakInterval'
import SessionLength from './components/SessionLength'
import Timer from './components/Timer'

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinutes: 25
    }
  }
  
  onIncreaseLength() {
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
            <BreakInterval breakInterval={this.state.breakLength} />
          </section>
          <section>
            <h4>Session length</h4>
            <SessionLength sessionLength={this.state.sessionLength} />
          </section>        
        </div>
        <div className="timer-area">
            <Timer timerMinutes={this.state.timerMinutes} className="timer" />
          </div>
      </div>
    );
  }
}

export default App;
