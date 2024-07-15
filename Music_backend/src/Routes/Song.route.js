import { addSongs,listSongs,removeSong } from "../Controllers/Song.controller.js";

import express from 'express'
import upload from "../Middleware/multer.js";

const songRouter = express.Router()

songRouter.post('/add',upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]),addSongs)
songRouter.get('/list',listSongs)
songRouter.post('/remove',removeSong)

export default songRouter

