import  express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

const app=express();
dotenv.config();

app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT , ".Port Dinleniyor")
    mongoose
        .set("strictQuery",false)
        .connect(process.env.MONGO_DB)
        .then(()=>console.log("connected to db"))
        .catch((error)=>console.log(error))
})