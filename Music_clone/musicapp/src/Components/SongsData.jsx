import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const SongsData = ({image,name,desc,id}) => {
    const {playWithId} = useContext(PlayerContext)
  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[rgb(92,92,92)]'>
        <img className='rounded ' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{name}</p>
    </div>
  )
}

export default SongsData
