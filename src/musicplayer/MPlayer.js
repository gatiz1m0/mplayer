import React, { useState } from 'react'

import './MPlayer.css'

const MPlayer = () => {
  const [songs, setSongs] = useState([
    {
      title: "Song 1",
      artist: "from Soundstripe",
      artSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2Fmaxresdefault.jpg?v=1613952236992",
      trackSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2FSong1.mp3?v=1613951915184"
    },
    {
      title: "Song 2",
      artist: "from Soundstripe",
      artSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2Fmaxresdefault.jpg?v=1613952236992",
      trackSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2FSong2.mp3?v=1613951927783"
    },
    {
      title: "Old Skool",
      artist: 
    }
  ])
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)
  
  return (
    <div className='main'>
      <div className="c-player">
        <p className="title">Study&Chill</p>
      </div>
      <audio></audio>
      <h4>Playing now</h4>
      {/* details */}
      {/* controls */}
      <p><strong>Next:</strong>Song 3 by Artist</p>
      
    </div>
  )
}

export default MPlayer