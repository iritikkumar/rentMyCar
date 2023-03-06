const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usersRoute = require("./routes/usersRoute");
const carsRoute = require("./routes/carsRoute");

mongoose.set('strictQuery', true);
dotenv.config();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, {
    dbName: "rentCars24x7",
}).then(()=> { console.log("DB Connection Successfull!")})
    .catch((err)=> {
        console.log(err);
}); 

app.use(express.json());
app.use("/api/users/", usersRoute);
app.use("/api/cars/", carsRoute);

// app.get("/",(req,res)=>{
//     res.send("Hello World!");
// })

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message
    })
});

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
});