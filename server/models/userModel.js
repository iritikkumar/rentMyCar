const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     username : {type:String , required: true, unique: true},
     email: {type:String , required: true, unique: true},
     password : {type:String },
     isAdmin: { type: Boolean, default: false },
     fromGoogle: {type: Boolean, default: false},
     contactNumber: {type: Number },
     isDriver: {type: Boolean, default: false},
     },
     { timestamps: true}
);

const userModel = mongoose.model('users' , userSchema)

module.exports = userModel