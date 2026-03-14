const express = require("express");
const router = express.Router();

const Playlist = require("../models/Playlist");


// ---------- CREATE PLAYLIST ----------

router.post("/create", async(req,res)=>{

    try{

        const {userId,name} = req.body;

        const playlist = new Playlist({

            userId,
            name

        });

        await playlist.save();

        res.json({

            message:"Playlist created",
            playlist

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error creating playlist",
            error:error.message

        });

    }

});


// ---------- ADD VIDEO ----------

router.post("/add-video", async(req,res)=>{

    try{

        const {playlistId,videoId} = req.body;

        const playlist = await Playlist.findByIdAndUpdate(

            playlistId,
            {$push:{videos:videoId}},
            {new:true}

        );

        res.json({

            message:"Video added to playlist",
            playlist

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error adding video",
            error:error.message

        });

    }

});


// ---------- REMOVE VIDEO ----------

router.delete("/remove-video", async(req,res)=>{

    try{

        const {playlistId,videoId} = req.body;

        const playlist = await Playlist.findByIdAndUpdate(

            playlistId,
            {$pull:{videos:videoId}},
            {new:true}

        );

        res.json({

            message:"Video removed from playlist",
            playlist

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error removing video",
            error:error.message

        });

    }

});


// ---------- GET USER PLAYLISTS ----------

router.get("/:userId", async(req,res)=>{

    try{

        const playlists = await Playlist.find({

            userId:req.params.userId

        });

        res.json({

            message:"Playlists fetched",
            total:playlists.length,
            playlists

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error fetching playlists",
            error:error.message

        });

    }

});

module.exports = router;