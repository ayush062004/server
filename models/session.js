const mongoose = require('mongoose');

const sessionschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
},
description:{
    type:String,
    required:true
}

},{
    timestamps:true
}



)
module.exports = mongoose.model('Session',sessionschema)