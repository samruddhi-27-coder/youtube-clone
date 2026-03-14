const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        default:""
    },

    category:{
        type:String,
        default:""
    },

    videoUrl:{
        type:String,
        required:true
    },

    thumbnail:{
        type:String,
        default:""
    },

    views:{
        type:Number,
        default:0
    },

    likes:{
        type:[String],
        default:[]
    },

    dislikes:{
        type:[String],
        default:[]
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Video",VideoSchema);