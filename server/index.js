const express=require("express");
const app=express();
const database= require("./config/database");
const {cloudinaryConnect}= require("./config/cloudinary");
const cookieParser= require("cookie-parser");
require("dotenv").config();
const userRoute= require("./routes/User");
const profileRoute= require("./routes/Profile");
const blogRoute= require("./routes/Blog");
const fileUpload= require("express-fileupload");
const cors= require("cors");
const contactRoute= require("./routes/Contact");

app.use(express.json());
app.use(cookieParser());
database.connect();
cloudinaryConnect();


const PORT= process.env.PORT || 4000;

app.use(fileUpload({
    useTempFiles: true,     
    tempFileDir: '/tmp/',   
}));


app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)


app.use("/api/v1/auth",userRoute);
app.use("/api/v1/profile",profileRoute);
app.use("/api/v1/contact",contactRoute);
app.use("/api/v1/blog",blogRoute);


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"You are now here"
    })
})

app.listen(PORT,()=>{
    console.log(`I am at port ${PORT}`);
})