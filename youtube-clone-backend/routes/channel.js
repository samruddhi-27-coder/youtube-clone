const express = require("express");
const router = express.Router();

const Channel = require("../models/Channel");
const Video = require("../models/Video");


// ---------- CREATE CHANNEL ----------

router.post("/create", async(req,res)=>{

    try{

        const {userId,channelName,description} = req.body;

        const channel = new Channel({

            userId,
            channelName,
            description

        });

        await channel.save();

        res.json({

            message:"Channel created successfully",
            channel

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error creating channel",
            error:error.message

        });

    }

});


// ---------- GET CHANNEL ----------

router.get("/:channelId", async(req,res)=>{

    try{

        const channel = await Channel.findById(req.params.channelId);

        res.json({

            message:"Channel fetched",
            channel

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error fetching channel",
            error:error.message

        });

    }

});


// ---------- GET CHANNEL VIDEOS ----------

router.get("/videos/:channelId", async(req,res)=>{

    try{

        const videos = await Video.find({

            userId:req.params.channelId

        });

        res.json({

            message:"Channel videos fetched",
            total:videos.length,
            videos

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error fetching videos",
            error:error.message

        });

    }

});


// ---------- SUBSCRIBE CHANNEL ----------

router.post("/subscribe", async(req,res)=>{

    try{

        const {channelId} = req.body;

        const channel = await Channel.findByIdAndUpdate(

            channelId,
            {$inc:{subscribers:1}},
            {new:true}

        );

        res.json({

            message:"Subscribed successfully",
            channel

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error subscribing",
            error:error.message

        });

    }

});

module.exports = router;