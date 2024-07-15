import mongoose from "mongoose";

const connectDB = async() => {
    mongoose.connection.on('connected',()=>{
        console.log('Database connected Sir');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/MUSICAPP`)
}

export default connectDB;