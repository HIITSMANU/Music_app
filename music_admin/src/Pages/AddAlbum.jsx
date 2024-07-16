import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { url } from '../App'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddAlbum = () => {
  const [image,setimage] = useState(false)
  const [color,setcolor] = useState("#ffffff")
  const [name,setname] = useState("")
  const [desc,setdesc] = useState("")
  const [loading,setloading] = useState(false)

  const onSubmitHandler = async(e) => {
    e.preventDefault()
    setloading(true)
    try {
      const formData = new FormData()

      formData.append("name",name)
      formData.append("desc",desc)
      formData.append("image",image)
      formData.append("bgColor",color)
      const res = await axios.post(`${url}/api/album/addalbum`,formData)

      if(res.data.success){
        toast.success("Album Added")
        setdesc("")
        setname("")
        setimage(false)

      }
      else{
        toast.error("Something went wrong")
      }

    } catch (error) {
      toast.error(error)
    }
    setloading(false)
  }
  return loading ? (
    <>
        <div className='grid min-h-[80vh]'>
            <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-600 rounded-full animate-spin"></div>
        </div>
    </>
  ) : (
    <>
      <form onSubmit={onSubmitHandler} action="" className='flex flex-col items-start gap-8 text-gray-600'>
        <div className="flex flex-col gap-4">
          <p className="">Upload Image</p>
          <input onChange={(e)=>setimage(e.target.files[0])} type="file" name="" id="image" accept='image/*' hidden />
          <label htmlFor="image" className=''>
            <img src={image? URL.createObjectURL(image):assets.upload_area} className='w-24 cursor-pointer' alt="" />
          </label>
        </div>


        <div className="flex flex-col gap-2.5 ">
          <p>Album Name</p>
          <input onChange={(e)=>setname(e.target.value)} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' type="text" placeholder='Enter Album Name' />
        </div>

        <div className="flex flex-col gap-2.5 ">
          <p>Album Description</p>
          <input onChange={(e)=> setdesc(e.target.value)} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' type="text" placeholder='Enter Album Desc  ' />
        </div>

        <div className="flex flex-col gap-3">
          <p>Backgroud Color </p>
          <input onChange={(e)=>setcolor(e.target.value)} type="color"/>
        </div>

        <button className='text-base bg-black text-white py-2.5 px-14 cursor-pointer' type="submit">ADD</button>
      </form>
    </>
  )
}

export default AddAlbum
