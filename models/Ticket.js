var mongoose = require("mongoose");
// var multer = require('multer');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

let TicketSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    company:{
        type: String,
    }, 
    job_title:{
        type: String,
    },
    address:{
        type: String,
    },
    job_desc:{
        type: String,
    },
    materials_used:{
        type: String,
    },
    equipment_used:{
        type: String,
    },
    equipment_rented:{
        type: String,
    },
    hours:{
        type: String,
    },
    employees:{
        type: String,
    },
    follow_job_desc:{
        type: String,
    },
    follow_materials:{
        type: String,
    },
    follow_equipment_needed:{
        type: String,
    },
    follow_hours_worked:{
        type: String,
    },
    total_hours:{
        type: String,
    },
    invoice_number:{
        type: String,
    },
    images:{
        data: Buffer, 
        contentType: String, 
    }
});

// // This creates our model from the above schema, using mongoose's model method
var Ticket = mongoose.model("Ticket", TicketSchema);

// Export the User model
module.exports = Ticket;