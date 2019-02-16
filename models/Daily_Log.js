var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

let Daily_LogSchema = new Schema({
    date: {
        type: String,
    },
    job_title:{
        type: String,
    }, 
    company:{
        type: String,
    },
    job_desc:{
        type: String,
    },
    hours:{
        type: String,
    },
    employees:{
        type: String,
    },
    
    // img: { 
    //     data: Buffer, 
    //     contentType: String,
    // }
    note: {
        type: String,
        required: false,
      },
});

// // This creates our model from the above schema, using mongoose's model method
var Daily_Log = mongoose.model("Daily_Log", Daily_LogSchema);

// Export the User model
module.exports = Daily_Log;