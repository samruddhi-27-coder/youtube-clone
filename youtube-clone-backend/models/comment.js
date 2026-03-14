const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({

    videoId:{
        type:String,
        required:true
    },

    userId:{
        type:String,
        required:true
    },

    text:{
        type:String,
        required:true
    },

    replies:[
        {
            userId:String,
            text:String,
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Comment",CommentSchema);