var mongoose = require("mongoose");

var Schema = mongoose.Schema;
let DocumentSchema = new Schema({
    date: {
        type: Date,
    },
    name:{
        type: String,
    }, 
    company:{
        type: String,
    },
    log1:{
        type: String,
    },
    log2:{
        type: String,
    },
    log3:{
        type: String,
    },
});

// // This creates our model from the above schema, using mongoose's model method
var Document = mongoose.model("Document", DocumentSchema);

// Export the User model
module.exports = Document;