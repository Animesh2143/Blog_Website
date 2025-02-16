const Profile= require("../model/Profile");
const User=require("../model/User");
const Course=require("../model/Blog");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();

exports.updateProfile= async(req,res)=>{
    try{
        console.log(req.body);
        const {dateOfBirth="",about="",contactNumber,gender}= req.body;
        const userId=req.user.id;

        if(!contactNumber || !gender){
            return res.status(401).json({
                success:false,
                message:"All feilds are required",
            });
        }

        const userDetails=await User.findOne({_id:userId});
        const profileId=userDetails.profile;
        const profileDetails= await Profile.findById(profileId);

        profileDetails.dateOfBirth = dateOfBirth || profileDetails.dateOfBirth;
        profileDetails.about = about || profileDetails.about;
        profileDetails.contactNumber = contactNumber || profileDetails.contactNumber;
        profileDetails.gender = gender || profileDetails.gender;

        const a=await Profile.findByIdAndUpdate(profileId,profileDetails,{new:true});
        
        console.log("21",a);

        return res.status(200).json({
            success:true,
            message:"Profile Updated",
            userDetails
        })
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"Profile Not Updated",
        })
    }
}

exports.deleteAccount= async(req,res)=>{
    try{
        const userId=req.user.id;
        console.log(userId);

        const userDetails= await User.findById(userId);

        if(!userDetails){
            return res.status(404).json({
                success:false,
                message:"User Not found",
            })
        }

        await Profile.findByIdAndDelete({_id:userDetails.profile});
        await User.findByIdAndDelete({_id:userId});

        return res.status(200).json({
            success:true,
            message:"Account Deleted",
        })
    }
    catch(error){
        console.log(error);
        return res.status(401).json({
            success:false,
            message:"Profile Not Deleted",
        })
    }
}

exports.getUserDetails= async(req,res)=>{
    try{
        const id=req.user.id;

        const userDetails= await User.findById(id).populate("profile").exec();

        return res.status(200).json({
        success:true,
            message:"Profile fetched",
            userDetails,
        })
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"Profile Not Fetched",
        })
    }
}

exports.updateDisplayPicture= async(req,res)=>{

    try{
        const userId = req.user.id;
        const displayPicture= req.files.displayPicture;

        const image= await uploadImageToCloudinary(displayPicture,process.env.FOLDER_NAME,1000,1000);

        if(!image){
            return res.status(409).json({
                success:false,
                message:"Image not uploaded to cloud",
            })
        }

        const updatedProfile= await User.findByIdAndUpdate(userId,
                                                    {image:image.secure_url},
                                                    {new:true}
                                                )
        if(!updatedProfile){
            return res.status(400).json({
                success:false,
                message:"Image not updated",
            })
        }

        return res.status(201).json({
            success:true,
            message:"Image uploaded",
            data:updatedProfile,
        })
    }
    catch(error){
        console.log(error);
        return res.status(401).json({
            success:false,
            message:"Image updation error",
        })
    }
}
