const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const Video = require("../models/Video");


// ---------- VIDEO DIRECTORY ----------

const videoDir = path.join(__dirname, "..", "uploads", "videos");

if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir, { recursive: true });
}


// ---------- MULTER STORAGE ----------

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, videoDir);
    },

    filename: (req, file, cb) => {

        const ext = path.extname(file.originalname);
        const filename = Date.now() + ext;

        cb(null, filename);
    }

});

const upload = multer({ storage });


// ---------- UPLOAD VIDEO ----------

router.post("/upload", upload.single("video"), async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                message: "No video uploaded"
            });
        }

        const { userId, title, description, category } = req.body;

        const video = new Video({

            userId,
            title,
            description,
            category,
            videoUrl: req.file.filename

        });

        await video.save();

        res.json({

            message: "Video uploaded successfully",
            video

        });

    }
    catch (error) {

        res.status(500).json({

            message: "Upload failed",
            error: error.message

        });

    }

});


// ---------- STREAM VIDEO ----------

router.get("/watch/:filename", (req, res) => {

    const videoPath = path.join(videoDir, req.params.filename);

    if (!fs.existsSync(videoPath)) {
        return res.status(404).json({
            message: "Video not found"
        });
    }

    res.sendFile(videoPath);

});


// ---------- GET ALL VIDEOS ----------

router.get("/all", async (req, res) => {

    try {

        const videos = await Video.find().sort({ createdAt: -1 });

        res.json({

            message: "Videos fetched successfully",
            total: videos.length,
            videos

        });

    }
    catch (error) {

        res.status(500).json({

            message: "Error fetching videos",
            error: error.message

        });

    }

});


// ---------- INCREASE VIEW COUNT ----------

router.put("/view/:id", async (req, res) => {

    try {

        const video = await Video.findByIdAndUpdate(

            req.params.id,
            { $inc: { views: 1 } },
            { new: true }

        );

        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        res.json({

            message: "View count updated",
            views: video.views

        });

    }
    catch (error) {

        res.status(500).json({

            message: "Error updating views",
            error: error.message

        });

    }

});


// ---------- LIKE VIDEO ----------

router.put("/like/:videoId", async (req, res) => {

    try {

        const { userId } = req.body;

        const video = await Video.findById(req.params.videoId);

        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        if (video.likes.includes(userId)) {

            video.likes = video.likes.filter(id => id !== userId);

        } else {

            video.likes.push(userId);
            video.dislikes = video.dislikes.filter(id => id !== userId);

        }

        await video.save();

        res.json({

            message: "Like updated",
            likes: video.likes.length,
            dislikes: video.dislikes.length

        });

    }
    catch (error) {

        res.status(500).json({

            message: "Error liking video",
            error: error.message

        });

    }

});


// ---------- DISLIKE VIDEO ----------

router.put("/dislike/:videoId", async (req, res) => {

    try {

        const { userId } = req.body;

        const video = await Video.findById(req.params.videoId);

        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        if (video.dislikes.includes(userId)) {

            video.dislikes = video.dislikes.filter(id => id !== userId);

        } else {

            video.dislikes.push(userId);
            video.likes = video.likes.filter(id => id !== userId);

        }

        await video.save();

        res.json({

            message: "Dislike updated",
            likes: video.likes.length,
            dislikes: video.dislikes.length

        });

    }
    catch (error) {

        res.status(500).json({

            message: "Error disliking video",
            error: error.message

        });

    }

});


module.exports = router;