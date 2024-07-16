import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { url } from '../App'
import { toast } from 'react-toastify'

const AddSong = () => {

    const [image,setimage] = useState(false)
    const [song,setsong] = useState(false)
    const [name,setname] = useState("")
    const [desc,setdesc] = useState("")
    const [album,setalbum] = useState("none")
    const [loading,setloading] = useState(false)
    const [albumdata,setalbumdata] = useState([])

    const handleForm = async(e) => {
        e.preventDefault()
        setloading(true)
        try {
            const formData = new FormData();
            formData.append("name",name)
            formData.append("desc",desc)
            formData.append("image",image)
            formData.append("audio",song)
            formData.append("album",album)

            const res = await axios.post(`${url}/api/song/add`,formData)
            console.log(res);
            if (res.data.success){
                toast.success("Song Added")
                setname("")
                setdesc("")
                setalbum("none")
                setimage(false)
                setsong(false)
            }
            else{
                toast.error("Something went wrong")
            }

        } catch (error) {
            toast.error("Error Occured")
        }
        setloading(false)
    }

    const loadAlbumData = async() =>{
        try {
            const res = await axios.get(`${url}/api/album/listalbum`)
            if (res.data.success) {
                setalbumdata(res.data.albums)
            }
            else{
                toast.error("Error Occured in album data retrival")
            }
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(()=>{
        loadAlbumData()
    },[])
  return loading ? (
    <>
        <div className='grid place-items-center min-h-[80vh]'>
            <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-600 rounded-full animate-spin"></div>
        </div>
    </>
  ) : (
    
    <form onSubmit={handleForm} action="" className='flex flex-col items-start gap-8 text-gray-600'>
        <div className="flex gap-8">
            <div className="flex flex-col gap-4">
                <p>Upload Songs</p>
                {/* accept all the audio files */}
                <input onChange={(e)=>setsong(e.target.files[0])} type="file" name="" id="song" accept='audio/*' hidden  />
                <label htmlFor="song">
                    <img src={song? assets.upload_added : assets.upload_song} alt="" className='w-24 cursor-pointer' />

                </label>
            </div>
            <div className="flex flex-col gap-4">
                <p>Upload Image</p>
                <input onChange={(e)=>setimage(e.target.files[0])} type="file" name="" id="image" accept='image/*' hidden/>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image):assets.upload_area} alt="" className='w-24 cursor-pointer' />
                </label>
            </div>
        </div>
        <div className="flex flex-col gap-2.5">
            <p>Song Name</p>
            <input onChange={(e)=>setname(e.target.value)} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)] ' placeholder='' value={name} />
        </div>

        <div className="flex flex-col gap-2.5">
            <p>Song Description</p>
            <input onChange={(e)=>setdesc(e.target.value)} value={desc} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)] ' placeholder='' />
        </div>

        <div className="flex flex-col gap-2.5">
            <p>Album</p>
            <select onChange={(e)=>setalbum(e.target.value)} defaultValue={album} name="" id="" className='bg-transparent outline-green-600 border-2 border-gray-500 p-2 w-[150px]'>
                <option value="none">None</option>
                {albumdata.map((item,i)=>(
                    <option key={i} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>

        <button type="submit" className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>ADD</button>
    </form>
  )
}

export default AddSong
