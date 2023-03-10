const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel")
const Car = require("../models/carModel");

router.post("/bookcar", async (req,res) =>{
    req.body.transactionId = "1234";
    // req.body.totalHours = "1234";
    try{
        console.log(req.body);
        console.log(req.body.totalHours);
        const newBooking = new Booking(req.body);
        console.log(newBooking);
        await newBooking.save();

        
        const car = await Car.findOne({_id: req.body.car});
        console.log(car);
        car.bookedTimeSlots.push(req.body.bookedTimeSlots);
        await car.save()
        res.send("Your booking is successful");
    }catch(error)
    {
        return res.status(400).json(error);
    }
});

module.exports = router