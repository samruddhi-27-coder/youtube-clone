const mongoose = require("mongoose");

const ShortsSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },

    title:{
        type:String,
        default:""
    },

    videoUrl:{
        type:String,
        required:true
    },

    likes:{
        type:Number,
        default:0
    },

    comments:{
        type:[
            {
                username:String,
                text:String,
                createdAt:{
                    type:Date,
                    default:Date.now
                }
            }
        ],
        default:[]
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Shorts",ShortsSchema);