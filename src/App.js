import React from "react";

import Pomodoro from "./components/Pomodoro"

class App extends React.Component {
  constructor() {
    super();

  }
  
  render() {
    return (
      <div>
        <Pomodoro />
      </div>
    );
  }
}

export default App;
