const mongoose = require("mongoose");

const ChannelSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },

    channelName:{
        type:String,
        required:true
    },

    description:{
        type:String,
        default:""
    },

    subscribers:{
        type:Number,
        default:0
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Channel",ChannelSchema);