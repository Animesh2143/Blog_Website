const express=require("express");
const router=express.Router();

const {contactUs}= require("../controller/ContactUs");

router.post("/contactus",contactUs);

module.exports=router;