import  express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import bodyParser from 'body-parser'

import adminRoutes from './routes/admin.js'

const app=express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb"}));
app.use('/admin',adminRoutes);

app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT , ".Port Dinleniyor")
    mongoose
        .set("strictQuery",false)
        .connect(process.env.MONGO_DB)
        .then(()=>console.log("connected to db"))
        .catch((error)=>console.log(error))
})