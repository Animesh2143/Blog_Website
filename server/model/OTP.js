const mongoose=require("mongoose");
const mailSender = require("../utils/mailSender");
const oldTemplate= require("../mail/templates/emailVerificationTemplate");

const OTPSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    },
})

async function sendVerificationEmail(email,otp){
    try{
        const mailResponse= await mailSender(email,"Verification E-mail by Kalaam Diary",oldTemplate(otp));
        console.log("OTP sent",mailResponse);
    }
    catch(error){
        console.log(error);
    }
}

OTPSchema.pre("save",async function(next){
    await sendVerificationEmail(this.email,this.otp);
    next();
});

module.exports= mongoose.model("OTP",OTPSchema);