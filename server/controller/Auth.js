const User=require("../model/User");
const OTP= require("../model/OTP");
const otpGenerator= require("otp-generator");
const bcrypt= require("bcrypt");
const Profile=require("../model/Profile");
const jwt= require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/templates/passwordUpdate");

require("dotenv").config();

exports.sendOTP =  async(req,res)=> {

    try{
        const {email}= req.body;

        const checkUserPresent= await User.findOne({email});

        if(checkUserPresent){
            return res.status(401).json({
                success:true,
                message:"User already present",
            })
        }
        

        var otp=otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        })
        console.log("OTP is:",otp);
        var result= await OTP.findOne({otp: otp});

        while (result){
            otp=otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            })
            result= await OTP.findOne({otp: otp});
        }


        const otpPayload={email,otp};
        
        const otpBody= await OTP.create(otpPayload);
        console.log(otpBody);

        return res.status(200).json({
            success:true,
            message:"OTP sent successfully",
            otp
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"OTP not sent",
        })
    }

};

exports.signup= async(req,res)=> {
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp
        }=req.body;

        if(!firstName || !lastName || !email || !password || !confirmPassword || !otp){
            return res.status(403).json({
                success:false,
                message:"All feilds required",
            });
        }
        if(password!== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password not matched",
            });
        }
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists",
            });
        }

        const recentOtp= await OTP.find({email:email}).sort({createdAt:-1});
        console.log(recentOtp);

        if(recentOtp.length===0){
            return res.status(400).json({
                success:false,
                message:"OTP error",
            });
        }
        // here [0]

        if(otp!==recentOtp[0].otp){
            return res.status(400).json({
                success:false,
                message:"OTP not matched",
            });
        }
        const hashedPassword= await bcrypt.hash(password,10);

        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null,
        })

        const user= await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            profile:profileDetails,
            image:`https://api.dicebear.com/9.x/initials/svg?seed=${firstName}%20${lastName}`
        })
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
        });

    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"User not created",
        });
    }
}


exports.login= async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(403).json({
                success: false,
                message: "All feilds required",
            });
        }
        const user= await User.findOne({email});
        if(!user){
            return res.status(403).json({
                success: false,
                message: "User not exists",
            });    
        }
        if(await bcrypt.compare(password, user.password)){
            const payload={
                email:user.email,
                id:user._id,
            }
            const token=jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            })
            user.token=token;
            user.password=undefined;

            const options= {
                expires: new Date(Date.now()+3*34*60*60*1000),
                httpOnly:true,
            }

            return res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"Logged in Successfully",
            })
        }
        else{
            return res.status(401).json({
                success: false,
                message: "Password incorrect",
            });
            
        }


    }   
    catch(error){
        return res.status(400).json({
            success: false,
            message: "Login failed",
        }); 
    }
};

exports.changePassword= async (req,res)=>{
    try{
        const userDetails= await User.findById(req.body.user);
        const {newPassword,oldPassword}= req.body;

        const isPasswordMatch= await bcrypt.compare(oldPassword,userDetails.password);

        if(!isPasswordMatch){
            return res.status(401).json({
                success:false,
                message:"Old Password not matched"
            })
        }
        
        const encryptedPassword= await bcrypt.hash(newPassword,10);

        const updatedUserDetails= await User.findByIdAndUpdate(req.user.id,
                                                                {password:encryptedPassword},
                                                                {new:true},
                                                            );
        
        try{
            const emailResponse= await mailSender(updatedUserDetails.email,
                `Password has been changed for account of ${updatedUserDetails.email}`,
                passwordUpdated(updatedUserDetails.email,updatedUserDetails.firstName)
            )

        }
        catch(error){
            return res.status(500).json({
                success: false,
                message: 'Error Occurred While Sending Email',
            });
        }
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error Occurred While Chainging Password',
            error: error.message,
        });
    }
}