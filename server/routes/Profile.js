const express=require("express");
const router= express.Router();

const {updateProfile,deleteAccount,getUserDetails,updateDisplayPicture}=require("../controller/Profile");

const {auth}= require("../middleware/auth");

router.delete("/deleteAccount",auth,deleteAccount);
router.put("/updateProfile",auth,updateProfile);
router.get("/getUserDetails",auth,getUserDetails);

router.put("/updateDisplayPicture",auth,updateDisplayPicture);

module.exports= router;
