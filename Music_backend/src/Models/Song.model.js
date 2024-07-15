import mongoose, { model } from "mongoose";

const Songschema = new mongoose.Schema({
    name:{type:String , required:true},
    desc:{type:String, required:true},
    album:{type:String, required:true},
    image:{type:String,required:true},
    file:{type:String,required:true},
    duration:{type:String,required:true},
})

const songModel = mongoose.models.song || mongoose.model("song",Songschema)

export default songModel