const express=require("express");
const router=express.Router();

const {createBlog,getAllBlogs,getBlogDetails}= require("../controller/Blog");
const {auth}=require("../middleware/auth");

router.post("/auth/createBlog",createBlog);
router.get("/auth/getAllBlogs",getAllBlogs);
router.get("/auth/getBlogDetails",getBlogDetails);

module.exports= router;