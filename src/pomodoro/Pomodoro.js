import React from "react"
import UIfx from "uifx"

import "./Pomodoro.css"
import BreakInterval from './pomComps/BreakInterval'
import SessionLength from './pomComps/SessionLength'
import Timer from './pomComps/Timer'

class Pomodoro extends React.Component {
  constructor() {
    super();
    
    this.state = {
      inSession: true,
      breakLength: 10,
      sessionLength: 25,
      timerMinutes: 25
    }
    
    this.audiofile = 'https://cdn.glitch.com/74776b2a-fe6f-4641-9298-f5540b1b0e3e%2Falarm.mp3?v=1613794624696'
    this.alarm = new Audio(this.audiofile)
    
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this)
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this)
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this)
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this)
    this.onUpdateTimerMinutes = this.onUpdateTimerMinutes.bind(this)
    this.onToggleInterval = this.onToggleInterval.bind(this)
    this.resetMinutes = this.resetMinutes.bind(this)
    this.toggleSession = this.toggleSession.bind(this)
  }
  
  onIncreaseBreakLength(length) {
    this.setState( (prevState) => {
      if(!this.state.inSession && prevState.breakLength >= 59) {
        return {
          breakLength: 1,
          timerMinutes: 1
        }
      } else if(prevState.breakLength >= 59) {
        return {
          breakLength: 1
        }
      } else {
        if(!this.state.inSession){
          return {
            breakLength: length + 1,
            timerMinutes: length + 1
          }
        } else {
          return {
            breakLength: length + 1
          }
        }
      }
    })
  }
  
  onDecreaseBreakLength(length) {
    this.setState( (prevState) => {
      if(!this.state.inSession && prevState.breakLength <= 1) {
        return {
          breakLength: 59,
          timerMinutes: 59
        }
    } else if(prevState.breakLength <= 1) {
        return {
          breakLength: 59
        }
      } else {
        if(!this.state.inSession ) {
          return {
            breakLength: length - 1,
            timerMinutes: length - 1
          }    
        } else {
          return {
            breakLength: length - 1
          }
        }
      }
    })
  }
  
  onIncreaseSessionLength(length) {
    this.setState( (prevState) => {
      if(this.state.inSession && prevState.sessionLength >= 59) {
        return {
          sessionLength: 1,
          timerMinutes: 1
        }
      } else if(prevState.sessionLength >= 59) {
        return {
          sessionLength: 1
        }
      } else {
        if(this.state.inSession){
          return {
            sessionLength: length + 1,
            timerMinutes: length + 1
          }
        } else {
          return {
            sessionLength: length + 1
          }
        }
      }
    })
  }
  
  onDecreaseSessionLength(length) {
    this.setState( (prevState) => {
      if(this.state.inSession && prevState.sessionLength <= 1) {
        return {
          sessionLength: 59,
          timerMinutes: 59
        }
      } else if(prevState.sessionLength <= 1) {
        return {
          sessionLength: 59
        }
      }
      else {
        if(this.state.inSession){
          return {
            sessionLength: length - 1,
            timerMinutes: length - 1
          }
        } else {
          return {
            sessionLength: length - 1
          }
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
    this.alarm.play();
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
  
  toggleSession(value) {
    this.setState({
      inSession: value
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
          <section className="setter-space">
            <BreakInterval
              breakLength={this.state.breakLength} 
              increaseBreak={this.onIncreaseBreakLength}
              decreaseBreak={this.onDecreaseBreakLength}
            />
            <h4>Break length</h4>
          </section>
          <section className="setter-space">         
            <SessionLength 
              sessionLength={this.state.sessionLength} 
              increaseSession={this.onIncreaseSessionLength}
              decreaseSession={this.onDecreaseSessionLength}
            />
            <h4>Session length</h4>
          </section>        
        </div>
        <div className="timer-area">
            <Timer
              inSession={this.state.inSession}
              timerMinutes={this.state.timerMinutes}
              breakLength={this.state.breakLength}
              toggleInterval={this.onToggleInterval}
              updateTimerMinutes={this.onUpdateTimerMinutes}
              resetMinutes={this.resetMinutes}
              toggleSession={this.toggleSession}
              className="timer" />
          </div>
      </div>
  );
  }
}

export default Pomodoro;
