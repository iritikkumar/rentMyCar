const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel")


router.post("/bookcar", (req,res) =>{
    req.body.transactionId = "1234";
    // req.body.totalHours = "1234";
    try{
        const newBooking = new Booking(req.body);
        newBooking.save();
        res.send("Your booking is successful");
    }catch(error)
    {
        return res.status(400).json(error);
    }
});

module.exports = router