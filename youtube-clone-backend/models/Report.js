const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({

    videoId:{
        type:String,
        required:true
    },

    userId:{
        type:String,
        required:true
    },

    reason:{
        type:String,
        required:true
    },

    description:{
        type:String,
        default:""
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Report", ReportSchema);