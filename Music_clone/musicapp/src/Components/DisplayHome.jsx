import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongsData from './SongsData'
import { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const DisplayHome = () => {
    const {songsData,albumsData} = useContext(PlayerContext)
  return (
    <>
        <Navbar/> 
        <div className="mb-4">
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto '>
                {albumsData.map((item,id)=>(
                    <AlbumItem key={id} name={item.name} desc={item.desc} id={item._id} image={item.image}/>
                ))}
            </div>
        </div>
        <div className="mb-4">
            <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
            <div className='flex overflow-auto '>
                {songsData.map((item,id)=>(
                    <SongsData key={id} name={item.name} desc={item.desc} id={item._id} image={item.image}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome
