import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios"

export const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{
    const [songsData,setsongData] = useState([])
    const [albumsData,setalbumData] = useState([])
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [track,settrack] = useState(songsData[0])

    

    const url = "http://localhost:4000"

    const [playstatus,setplaystatus] = useState(false)
    const [time,settime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const getsongsData = async()=>{
        try {
            const res = await axios.get(`${url}/api/song/list`)
            setsongData(res.data.songs)
            settrack(res.data.songs[0])
        } catch (error) {
            console.log(error);
        }
    }

    const getalbumsData = async()=>{
        try {
            const res = await axios.get(`${url}/api/album/listalbum`)
            setalbumData(res.data.albums)
        } catch (error) {
            
        }
    }

    const playWithId = async(id) => {
       await songsData.map((item)=> {
        if(id === item._id){
            settrack(item)
        }
       } )

       await audioRef.current.play()
       setplaystatus(true)
    }

    const play = ()=> {
        audioRef.current.play();
        setplaystatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setplaystatus(false);
    }

    // const prev = async()=>{
    //     if(track.id>1){
    //         await settrack(songsData[track.id-1])
    //         await audioRef.current.play()
    //         setplaystatus(true)
    //     }
    // }

    const prev = async()=>{
       songsData.map(async(item,index)=>{
            if (track._id === item._id && index>0 ) {
                await settrack(songsData[index-1])
                await audioRef.current.play()
                setplaystatus(true)
            }
       })
    }

    // const next = async()=>{
    //     if(track.id<songsData.length-1){
    //         await settrack(songsData[track.id+1])
    //         await audioRef.current.play()
    //         setplaystatus(true)
    //     }
    // }

    const next = async()=>{
        songsData.map(async(item,index)=>{
            if (track._id === item._id && index<songsData.length ) {
                await settrack(songsData[index+1])
                await audioRef.current.play()
                setplaystatus(true)
            }
       })
    }

    const seekSong = async(e) =>{
        audioRef.current.currentTime = ((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)
    }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = Math.floor((audioRef.current.currentTime/audioRef.current.duration)*100)+"%"
                settime({
                    currentTime:{
                        second:Math.floor(audioRef.current.currentTime % 60),
                        minute:Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second:Math.floor(audioRef.current.duration % 60),
                        minute:Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        },1000)
    },[audioRef])

    useEffect(()=>{
        getsongsData(),
        getalbumsData()
    },[])
    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        settrack,
        playstatus,
        setplaystatus,
        time,
        settime,
        play,
        pause,
        playWithId,
        prev,
        next,
        seekSong,
        songsData,
        albumsData,
    }

    return <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
} 

export default PlayerContextProvider;