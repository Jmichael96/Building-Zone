var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

let SavedSchema = new Schema({
    name:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    list_1:{
        type: String,
    },
    list_2:{
        type: String,
    },
    list_3:{
        type: String,
    },
    list_4:{
        type: String,
    },
    list_5:{
        type: String,
    },
    list_6:{
        type: String,
    },
    list_7:{
        type: String,
    },
    list_8:{
        type: String,
    },
    list_9:{
        type: String,
    },
    list_10:{
        type: String,
    },
    list_11:{
        type: String,
    },
    list_12:{
        type: String,
    },
    list_13:{
        type: String,
    },
    list_14:{
        type: String,
    },
    list_15:{
        type: String,
    },
    list_16:{
        type: String,
    },
    list_17:{
        type: String,
    },
    list_18:{
        type: String,
    },
});

// // This creates our model from the above schema, using mongoose's model method
var Saved = mongoose.model("Saved", SavedSchema);

// Export the User model
module.exports = Saved;