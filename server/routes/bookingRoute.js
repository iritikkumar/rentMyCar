const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51MQ3exSJMJym7GDQfgFOJoKhVGCyaYMrPKVjEwFmi0UBlvw4weunExiAifJbAmsNGlQAIflKWILlOkqiVLtNG7KJ0073E1tfoN"
);

router.post("/bookcar", async (req, res) => {
  // console.log(req.body);

  // const { token } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.paymentIntents.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        automatic_payment_methods: { enabled: true },
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    console.log("customer: " + customer);
    console.log("payment: " + payment);

    if (payment) {
      req.body.transactionId = token.card.id;
      const newbooking = new Booking(req.body);
      await newbooking.save();
      const car = await Car.findOne({ _id: req.body.car });

      car.bookedTimeSlots.push(req.body.bookedTimeSlots);

      await car.save();
      res.send("Your booking is successfull");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});



router.post("/ratecar", async (req, res) => {
  // console.log(req.body);
  // console.log(req.body.car);
  try {
    const booking = await Booking.findOne({car: req.body.car, user: req.body.user, bookedTimeSlots:{from: req.body.bookedSlotFrom, to: req.body.bookedSlotTo} });
    const car = await Car.findOne({_id: req.body.car});
    if(req.body.rate>5)
    {
      req.body.rate=5;
    }
    // console.log(req.body.rate);
    car.ratings = (car.ratings*car.raters + req.body.rate)/(car.raters+1);
    car.raters = car.raters+1;
    booking.star = req.body.rate;
    // console.log(booking);
    // console.log(req.body.car);
    // console.log(car);
    await booking.save();
    await car.save();
    res.send("Booking details updated successfully");
    // console.log(booking);
    console.log("Booking route(ratecar): Tu b thk aaja ab");
  } catch (error) {
    console.log(error);
    console.log("dikkt aai booking route of ratecar me");
    return res.status(400).json(error);
  }
});



router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car");
    res.send(bookings);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
