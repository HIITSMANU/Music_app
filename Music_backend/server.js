import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/Routes/Song.route.js'
import connectDB from './src/config/mongodb.js'
import connectCloudinary from './src/config/cloudinary.js'
import albumRouter from './src/Routes/Album.route.js'

const app = express()
connectDB();
connectCloudinary();
const port = process.env.PORT || 4000;

//middleware

app.use(express.json())
app.use(cors())
app.use("/api/song",songRouter)
app.use('/api/album',albumRouter)

//initializing routes

app.get('/',(req,res)=>{
    res.send("API Working")
})  

app.listen(port,()=>console.log(`Server started on ${port}`))