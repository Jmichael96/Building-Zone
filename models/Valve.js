var mongoose = require("mongoose");

var Schema = mongoose.Schema;

let ValveSchema = new Schema({
    date: {
        type: String,
    },
    city:{
        type: String,
    }, 
    company:{
        type: String,
    },
    job_desc:{
        type: String,
    },
    valve_desc:{
        type: String,
    },
    valve_desc2:{
        type: String,
    },
    valve_desc3:{
        type: String,
    },
});

// // This creates our model from the above schema, using mongoose's model method
var Valve = mongoose.model("Valve", ValveSchema);

// Export the User model
module.exports = Valve;