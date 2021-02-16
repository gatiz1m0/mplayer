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
      timerMinute: 25
    }
  }
  
  render() {
    return (
      <main>
        <h2>Do it! Clock</h2>
        <BreakInterval breakInterval={this.state.breakLength}/>
        <SessionLength sessionLength={this.sessionLength} />
        <Timer timerMinute={this.state.timerMinute} />
      </main>
    );
  }
}

export default App;
