const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Shorts = require("../models/Shorts");
const verifyToken = require("../middleware/auth");


// ---------- CREATE UPLOAD FOLDER ----------

const uploadDir = path.join(__dirname,"..","uploads","shorts");

if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir,{recursive:true});
}


// ---------- MULTER STORAGE ----------

const storage = multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,uploadDir);
    },

    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }

});

const upload = multer({storage});


// ---------- UPLOAD SHORT ----------

router.post("/upload",verifyToken,upload.single("video"),async(req,res)=>{

    try{

        if(!req.file){

            return res.status(400).json({
                message:"No video uploaded"
            });

        }

        const {title} = req.body;

        const short = new Shorts({

            userId:req.user.id,
            title,
            videoUrl:req.file.filename

        });

        await short.save();

        res.json({

            message:"Short uploaded successfully",
            short

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error uploading short",
            error:error.message

        });

    }

});


// ---------- SHORTS FEED ----------

router.get("/feed",async(req,res)=>{

    try{

        const shorts = await Shorts.find()
        .sort({createdAt:-1})
        .limit(20);

        res.json({

            message:"Shorts feed fetched",
            total:shorts.length,
            shorts

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error fetching shorts",
            error:error.message

        });

    }

});


// ---------- LIKE SHORT ----------

router.post("/like/:id",verifyToken,async(req,res)=>{

    try{

        const short = await Shorts.findByIdAndUpdate(

            req.params.id,
            {$inc:{likes:1}},
            {new:true}

        );

        res.json({

            message:"Short liked",
            short

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error liking short",
            error:error.message

        });

    }

});


// ---------- COMMENT SHORT ----------

router.post("/comment/:id",verifyToken,async(req,res)=>{

    try{

        const {username,text} = req.body;

        const short = await Shorts.findByIdAndUpdate(

            req.params.id,
            {$push:{comments:{username,text}}},
            {new:true}

        );

        res.json({

            message:"Comment added",
            short

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error commenting",
            error:error.message

        });

    }

});

module.exports = router;