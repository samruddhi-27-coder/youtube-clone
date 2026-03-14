const express = require("express");
const router = express.Router();

const History = require("../models/History");
const Video = require("../models/Video");


// ---------- ADD VIDEO TO WATCH HISTORY ----------

router.post("/watch", async(req,res)=>{

    try{

        const {userId,videoId} = req.body;

        const history = new History({
            userId,
            videoId
        });

        await history.save();

        res.json({
            message:"Video added to watch history",
            history
        });

    }
    catch(error){

        res.status(500).json({
            message:"Error saving watch history",
            error:error.message
        });

    }

});


// ---------- GET USER WATCH HISTORY ----------

router.get("/:userId", async(req,res)=>{

    try{

        const history = await History.find({
            userId:req.params.userId
        }).sort({watchedAt:-1});

        res.json({
            message:"Watch history fetched",
            total:history.length,
            history
        });

    }
    catch(error){

        res.status(500).json({
            message:"Error fetching history",
            error:error.message
        });

    }

});


// ---------- VIDEO RECOMMENDATION ----------

router.get("/recommend/:userId", async(req,res)=>{

    try{

        const history = await History.find({
            userId:req.params.userId
        }).sort({watchedAt:-1}).limit(5);

        const videoIds = history.map(h=>h.videoId);

        const videos = await Video.find({
            _id:{ $in:videoIds }
        });

        const categories = videos.map(v=>v.category);

        const recommended = await Video.find({
            category:{ $in:categories }
        }).limit(10);

        res.json({
            message:"Recommended videos fetched",
            videos:recommended
        });

    }
    catch(error){

        res.status(500).json({
            message:"Error fetching recommendations",
            error:error.message
        });

    }

});

module.exports = router;