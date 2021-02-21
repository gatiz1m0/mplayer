import React, { useState } from 'react'

import './MPlayer.css'

const MPlayer = () => {
  const [songs, setSongs] = useState([
    {
      title: "Song 1",
      artist: "from Soundstripe",
      art: "",
      src: ""
    },
    {
      
    }
  ])
  
  return (
    <div className='mplayer'>
    
    </div>
  )
}

export default MPlayer