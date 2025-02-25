const jwt=require("jsonwebtoken");
require("dotenv").config();
const User= require("../model/User");

exports.auth= async(req,res,next)=>{
    try{
        const token= req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer ",'');
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token not found",
            });
        }
        try{
            const decode=await jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user=decode;
        }
        catch(error){
            return res.status(401).json({
                success: false,
                message: "Token not verified",
            });
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            success: false,
            message: "Token error",
        });
    }
}