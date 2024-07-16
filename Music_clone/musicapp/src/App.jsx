import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Context/PlayerContext'

const App = () => {
  const {audioRef,track,songsData} = useContext(PlayerContext)
  console.log(track);
  return (
    <div className='h-screen bg-black'>
      {
        songsData.length!==0 ? (
          <>
            <div className="h-[90%] flex">
            <Sidebar/>
            <Display/>
          </div>
          <Player/>
          <audio ref={audioRef} src={track ? track.file  :""} preload='auto'></audio>
          </>
        ) : 
          null
        
      }
      
    </div>
  )
}

export default App
