import React from 'react'
import {assets}  from "../assets/assets"
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='bg-[#003A10] min-h-screen pl-[4vw]'>
        <img className='mt-5 w-[max(10vw,100px)] hidden sm:block' src={assets.logo} alt="" />
        <img src={assets.logo_small} className='mt-5 w-[max(10vw,40px)] mr-5 sm:hidden block' alt="" />

        <div className="flex flex-col gap-5 mt-10">
            <NavLink to={'/addsong'} className="flex items-center gap-2.5 text-gray-800 border-black p-2 pr-[max(8vw,10px)] bg-white border drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                <img src={assets.add_song} className='w-5' alt="" />
                <p className='hidden sm:block'>Add Song</p>
            </NavLink>
            <NavLink to={'/listsong'} className="flex items-center gap-2.5 text-gray-800 border-black p-2 pr-[max(8vw,10px)] bg-white border drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                <img src={assets.song_icon} className='w-5' alt="" />
                <p className='hidden sm:block'>List Song</p>
            </NavLink>
            <NavLink to={'/addalbum'} className="flex items-center gap-2.5 text-gray-800 border-black p-2 pr-[max(8vw,10px)] bg-white border drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                <img src={assets.add_album} className='w-5' alt="" />
                <p className='hidden sm:block'>Add Album</p>
            </NavLink>
            <NavLink to={'/listalbum'} className="flex items-center gap-2.5 text-gray-800 border-black p-2 pr-[max(8vw,10px)] bg-white border drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                <img src={assets.album_icon} className='w-5' alt="" />
                <p className='hidden sm:block'>List Album</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
