const User= require("../model/User");
const mailSender=require("../utils/mailSender");
const crypto= require("crypto");
const bcrypt= require("bcrypt");

exports.resetPasswordToken= async(req,res)=>{
    try{
        const email=req.body.email;
        const userDetails=await User.findOne({email:email});

        if(!userDetails){
            return res.json({
                success: false,
                message: "Email not registered",
            });
        }

        const token=crypto.randomBytes(20).toString("hex");
        const updateDetails= await User.findOneAndUpdate({email:email},
                                                        {token:token,
                                                        resetPasswordExpires:Date.now()+5*60*1000,
                                                    },
                                                    {new:true});

        const url=`http://localhost:3000/update-password/${token}`;

        await mailSender(email,"Password Reset Link",`Password reset link- ${url}`);
 
        return res.status(201).json({
            success: true,
            message: "Reset password sent",
        });
    }
    catch(error){
        console.log(error);
        return res.status(401).json({
            success: false,
            message: "Password email not reset",
        });
    }
}

exports.resetPassword= async(req,res)=>{
    try{
        const {password,confirmPassword, token}= req.body;
        if(password!=confirmPassword){
            return res.json({
                success: false,
                message: "Password not matched",
            });
        }
        const userDetails= await User.findOne({token:token});
        if(!userDetails){
            return res.json({
                success: false,
                message: "Invalid token",
            });
        }
        if(userDetails.resetPasswordExpires< Date.now()){
            return res.json({
                success: false,
                message: "Token timeout",
            });
        }
        const hashedPassword= await bcrypt.hash(password,10);

        await User.findOneAndUpdate({token:token},
                                    {password:hashedPassword},
                                    {new:true});

        const userEmail = await mailSender(
        email,
        "Welcome to Kalaam Diary",
        `${firstName} ${lastName} <br/>
        with email - ${email} and Contact No - ${contactNo} <br/>
        Your query: <br/> ${message} has been received.`
        );

        return res.status(200).json({
        success: true,
        message: "Password Changed",
        });

    }
    catch(error){
        return res.status(401).json({
            success: false,
            message: "Password changing error",
        });
    }
}