import React from "react";

import "./App.css";
import BreakInterval from './components/BreakInterval'

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      breakLength: 5,
      sessionLength: 25
    }
  }
  
  render() {
    return (
      <main>
        <h2>Do it! Clock</h2>
        <BreakInterval breakInterval={this.state.breakLength}/>
      </main>
    );
  }
}

export default App;
