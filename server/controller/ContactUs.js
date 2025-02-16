const ContactUs = require("../model/ContactUs");
const mailSender= require("../utils/mailSender");


exports.contactUs= async (req,res) =>{
    
    try{
        const {firstName, lastName,email,contactNo,message}= req.body;

        if(!firstName || !email || !contactNo || !message){
            return res.json({
                success:false,
                message:"Enter All details",
            })
        }

        const response=await ContactUs.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            contactNo:contactNo,
            message:message
        });

        if(!response){
            return res.json({
                success:false,
                message:"Mail not sent",
            })
        }
        console.log("data bna");

        // const organisationEmail= await mailSender(process.env.ORGANISATION_MAIL,
        //                                 "New User has contacted to us",
        //                                 `${firstName} ${lastName} with email- ${email} and Contact No-${contactNo}
        //                                 has a query- ${message}`);
        
        // if(!organisationEmail){
        //     return res.json({
        //         success:false,
        //         message:"Organisation has not sent mail",
        //     })
        // }

        //organisation should have differnent mail
        
        const userEmail = await mailSender(
            email,
            "Welcome to Kalaam Diary",
            `${firstName} ${lastName} <br/>
            with email - ${email} and Contact No - ${contactNo} <br/>
            Your query: <br/> ${message} has been received.`
        );
        

        if(!userEmail){
            return res.json({
                success:false,
                message:"User has not sent mail",
            })
        }
        console.log("mail bna");

        return res.status(200).json({
            success:true,
            message:"Your message has been received",
            response,
        })
    
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Mail error occured",
        })
    }

}