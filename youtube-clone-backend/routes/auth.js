const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const SECRET = "youtubeCloneSecret";


// ---------- REGISTER USER ----------

router.post("/register", async(req,res)=>{

    try{

        const {username,email,password} = req.body;

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({

            username,
            email,
            password:hashedPassword

        });

        await newUser.save();

        res.json({

            message:"User registered successfully",
            user:newUser

        });

    }
    catch(error){

        res.status(500).json({

            message:"Registration failed",
            error:error.message

        });

    }

});


// ---------- LOGIN USER ----------

router.post("/login", async(req,res)=>{

    try{

        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){

            return res.status(404).json({
                message:"User not found"
            });

        }

        const validPassword = await bcrypt.compare(password,user.password);

        if(!validPassword){

            return res.status(400).json({
                message:"Invalid password"
            });

        }

        const token = jwt.sign(

            {id:user._id},
            SECRET,
            {expiresIn:"7d"}

        );

        res.json({

            message:"Login successful",
            token,
            user

        });

    }
    catch(error){

        res.status(500).json({

            message:"Login failed",
            error:error.message

        });

    }

});

module.exports = router;