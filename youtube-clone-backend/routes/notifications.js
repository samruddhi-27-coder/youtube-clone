const express = require("express");
const router = express.Router();

const Notification = require("../models/Notifications");


// ---------- CREATE NOTIFICATION ----------

router.post("/create", async(req,res)=>{

    try{

        const {userId,message} = req.body;

        const notification = new Notification({

            userId,
            message

        });

        await notification.save();

        res.json({

            message:"Notification created",
            notification

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error creating notification",
            error:error.message

        });

    }

});


// ---------- GET USER NOTIFICATIONS ----------

router.get("/:userId", async(req,res)=>{

    try{

        const notifications = await Notification.find({

            userId:req.params.userId

        }).sort({createdAt:-1});

        res.json({

            message:"Notifications fetched",
            total:notifications.length,
            notifications

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error fetching notifications",
            error:error.message

        });

    }

});


// ---------- MARK NOTIFICATION AS READ ----------

router.put("/read/:id", async(req,res)=>{

    try{

        const notification = await Notification.findByIdAndUpdate(

            req.params.id,
            {isRead:true},
            {new:true}

        );

        res.json({

            message:"Notification marked as read",
            notification

        });

    }
    catch(error){

        res.status(500).json({

            message:"Error updating notification",
            error:error.message

        });

    }

});

module.exports = router;