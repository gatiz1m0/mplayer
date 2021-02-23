import React from 'react'

import './MPlayerDetails.css'

const MPlayerDetails = (props) => {
  
  return(
    <div className="c-player-details">
      <div className="details">
        <h4>Now playing:</h4>
        <div className="current-song-info">
          <h3 className="details-title">{props.song.title}</h3>
          <h4 className="details-artist">  by: {props.song.artist}</h4>
        </div>
      </div>
    </div>
  )
}

export default MPlayerDetails