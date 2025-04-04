require("dotenv").config();
const express =require("express");
const mongoose= require("mongoose");
// const mongoose = require("mongoose");

const PORT = process.env.port || 3002 
const uri= process.env.MONGO_URL || 3002 
const app=express();




app.listen(3002,()=>{
    
    console.log("app started ")
    mongoose.connect(uri)
    console.log("mongo db connected ")
});
 