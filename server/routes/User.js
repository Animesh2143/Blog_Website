const express= require("express");
const router= express.Router();

const {sendOTP,signup,login,changePassword}= require("../controller/Auth");
const {resetPasswordToken,resetPassword}= require("../controller/ResetPassword");
const {auth}= require("../middleware/auth");

router.post("/login",login);
router.post("/signup",signup);
router.post("/sendotp",sendOTP);
router.post("/changePassword",auth,changePassword);

router.post("/reset-password-token",resetPasswordToken);
router.post("/reset-password",resetPassword);

module.exports= router;
