const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose.set('strictQuery', true);
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
    .then(()=> { console.log("DB Connection Successfull!")})
    .catch((err)=> {
        console.log(err);
    }); 
const port = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("Hello World!");
})
app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
});