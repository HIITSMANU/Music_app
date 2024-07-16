import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { url } from '../App'

const ListSong = () => {
  const[data,setdata] = useState([])
  const fetchsongs = async() =>{
   try {
    const res = await axios.get(`${url}/api/song/list`) 
    console.log(res);
    if(res.data.success){
      setdata(res.data.songs)
    }
   } catch (error) {
    toast.error("Error occured")
   }
  }

  const removeSong = async(id)=>{
    try {
      const res = await axios.post(`${url}/api/song/remove`,{id})

      if(res.data.success){
        toast.success("Song Removed")
        await fetchsongs()
      }
      else{
        toast.error("Error in song removal")
      }
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(()=>{
    fetchsongs()
  },[])


  return (
    <div>
      <p className=''>All Songs List</p>
      <br />
      <div className="">
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b><b>Name</b><b>Album</b><b>Duration</b><b>Action</b>
        </div>
        {data.map((item,i)=>{
          return(
            <div key={i} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
              <img src={item.image} className='w-12 ' alt="" />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p onClick={()=>removeSong(item._id)} className='text-red-900'><i  class="fa-solid fa-trash-can cursor-pointer"></i></p>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListSong
