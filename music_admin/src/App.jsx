import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSong from './Pages/AddSong';
import AddAlbum from './Pages/AddAlbum';
import ListAlbum from './Pages/ListAlbum';
import ListSong from './Pages/ListSong';

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer/>
      
      <div className="flex-1 h-screen overflow-y-scroll bg-white">
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path='/addsong' element={<AddSong/>}/>
            <Route path='/addalbum' element={<AddAlbum/>}/>
            <Route path='/listalbum' element={<ListAlbum/>}/>
            <Route path='/listsong' element={<ListSong/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App