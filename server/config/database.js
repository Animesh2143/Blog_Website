const mongoose=require("mongoose");

require("dotenv").config();

exports.connect= ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> {console.log("Connection done")})
    .catch((error)=>{
        console.log("Connection error");
        console.error(error);
        process.exit(1);
    })
}