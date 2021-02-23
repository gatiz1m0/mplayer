import React from 'react'

import './MPlayer.css'
import MPlayerDetails from './MPlayerDetails'
import MPlayerControls from './MPlayerControls'

const MPlayer = (props) => {
  
  return(
    <div className="player-container">
      <div className="song-img">
        <img src={props.song.artSrc} />
        </div>
      <div className="c-player">
        <audio></audio>
        <MPlayerDetails song={props.song} />
      <div className="controls">
        <MPlayerControls />
        <p><strong>Next: </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
      </div>
      </div>
    </div>
  )
}

export default MPlayer