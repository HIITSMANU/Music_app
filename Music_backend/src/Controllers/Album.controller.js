import {v2 as cloudinary} from 'cloudinary'
import albumModel from '../Models/Album.model.js'


const addAlbum = async(req,res)=>{
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;

        const imageUpload =await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});

        const albumData = {
            name,
            desc,
            bgColor,
            image:imageUpload.secure_url
        }

        const album = albumModel(albumData);
        await album.save();

        res.json({success:true,message:"album added"})
    } catch (error) {
        res.json({success:false,message:"error in album adding"})
    }
}

const listAlbum = async(req,res)=>{
    try {
        const albums = await albumModel.find({})
        res.json({success:true,message:"all albums retrived",albums:albums})
    } catch (error) {
        res.json({success:false,message:" error in  albums retrival"})
    }
}

const removeAlbum = async(req,res)=>{
    try {
        await albumModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"album deleted"})
    } catch (error) {
        res.json({success:false,message:" error in album deletion"})

    }
}


export {addAlbum,listAlbum,removeAlbum}