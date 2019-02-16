var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

let ScheduleSchema = new Schema({
    from_date: {
        type: String,
    },
    to_date: {
        type: String,
    },
    description: {
        type: String,
    },
    // notify: {
    //     type: boolean,
    //     default: false,
    // },
});

// // This creates our model from the above schema, using mongoose's model method
var Schedule = mongoose.model("Schedule", ScheduleSchema);

// Export the User model
module.exports = Schedule;