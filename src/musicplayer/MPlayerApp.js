import React, { useState } from 'react'

import './MPlayerApp.css'
import MPlayer from './MPlayer'

const MPlayerApp = () => {
  const [songs, setSongs] = useState([
    {
      title: "Girl in the sun",
      artist: "Concert Fiends",
      artSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2Fmaxresdefault.jpg?v=1613952236992",
      trackSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2FSong1.mp3?v=1613951915184"
    },
    {
      title: "Domo Arigato",
      artist: "Tomato Ikatsu",
      artSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2Fmaxresdefault.jpg?v=1613952236992",
      trackSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2FSong2.mp3?v=1613951927783"
    },
    {
      title: "Old Skool",
      artist: "DaMarcus VanBuren",
      artSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2Fmaxresdefault.jpg?v=1613952236992",
      trackSrc: "https://cdn.glitch.com/7c6c6fcd-6b82-4a23-8d7a-b681e58e72ea%2Foldskool.mp3?v=1613954728062"
    }
  ])
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)
  
  return (
    <div className='main'>
      <p className="title">Study&Chill</p>
      <div className="player">
        <MPlayer 
          song={songs[currentSongIndex]} 
          nextSong={songs[nextSongIndex]} 
        />
      </div>
    </div>
  )
}

export default MPlayerApp