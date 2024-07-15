import express from 'express'
import { addAlbum,removeAlbum,listAlbum } from '../Controllers/Album.controller.js'
import upload from '../Middleware/multer.js'

const albumRouter = express.Router()

albumRouter.post('/addalbum',upload.single("image"),addAlbum)
albumRouter.get('/listalbum',listAlbum)
albumRouter.post('/removealbum',removeAlbum)

export default albumRouter

