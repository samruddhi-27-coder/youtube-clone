const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    videos:{
        type:[String],
        default:[]
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Playlist", PlaylistSchema);