const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     username : {type:String , required: true, unique: true},
     email: {type:String , required: true, unique: true},
     password : {type:String },
     fromGoogle: {type: Boolean, default: false},
     contactNumber: {type: Number ,  default: 1234567890},
     location: {type:String, default: "Lucknow"},
     image: {type: String, default: "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png"},
     },
     { timestamps: true}
);

const userModel = mongoose.model('users' , userSchema)

module.exports = userModel