import React from 'react'

import './MPlayer.css'

const MPlayer = (props) => {
  
  return(
    <div className="c-player">
      
      <audio></audio>
      <h4>Playing now</h4>
      {/* details */}
      {/* controls */}
      <p><strong>Next:</strong>{props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}

export default MPlayer