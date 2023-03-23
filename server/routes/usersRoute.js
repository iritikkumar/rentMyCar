// const express = require("express");
// const router = express.Router();
// const User = require("../models/userModel");


// router.post("/login", async(req, res) => {

//       const {username , password} = req.body
//       try {
//           const user = await User.findOne({username , password})
//           if(user) {
//               res.send(user);
//           }
//           else{
//               return res.status(400).json(err);
//           }
//       } catch (err) {
//         return res.status(400).json(err);
//       }
  
// });

// router.post("/register", async(req, res) => {
//     try {
//         const newuser = new User(req.body)
//         await newuser.save()
//         res.send('User registered successfully')    
//     } catch (err) {
//       return res.status(400).json(err);
//     }

// });


// module.exports = router


const router = require("express").Router();
const User = require("../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req,res)=>{

    if(req.body.password !== req.body.cpassword){
        return res.status(400).json("Password and Confirm passwords are not same!");
    }
    const newUser = new User({
        username: req.body.username,
        password: CryptoJS.AES.encrypt(				// to make password encrypted
            req.body.password, 
            process.env.PASS_SEC					
        ).toString(),
    });

    try{
        const savedUser = await newUser.save();			// async finc
        res.status(201).json(savedUser);
    } catch(err){
        res.status(400).json(err);
    }    
});


// LOGIN

router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});		//find whether user exist
        if(!user){
            return res.status(400).json("Wrong Credentials!");
        } 
        const hashedPwd = CryptoJS.AES.decrypt(						// decode the the original password
            user.password, 
            process.env.PASS_SEC
        );					
        const originalPwd = hashedPwd.toString(CryptoJS.enc.Utf8);	
        if(originalPwd !== req.body.password){       		//matching with org pwd
            return res.status(400).json("Wrong Password");
        }
        const accessToken = jwt.sign(						// using jwt for more security
          {
              id: user._id,
              isAdmin: user.isAdmin,
          }, 
          process.env.JWT_SEC,
          {expiresIn: "3d"}
        );
        const {password, ...others} = user._doc;
        return res.status(200).json({...others, accessToken});

    } catch(err){
        console.log("fail");
        return res.status(400).json(err);
    }
});


module.exports = router