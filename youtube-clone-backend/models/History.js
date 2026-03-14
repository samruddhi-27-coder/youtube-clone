const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },

    videoId:{
        type:String,
        required:true
    },

    watchedAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("History",HistorySchema);