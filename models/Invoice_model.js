const mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let InvoiceSchema = new Schema({
    date:{
        type: String,
    },
    invoice_num:{
        type: String,
    },
    company:{
        type: String,
    },
    bill_to:{
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
    days_on_job:{
        type: String,
    },
    item_1:{
        type: String,
    },
    qty_1:{
        type: String,
    },
    price_1:{
        type: String,
    },
    item_2:{
        type: String,
    },
    qty_2:{
        type: String,
    },
    price_2:{
        type: String,
    },
    item_3:{
        type: String,
    },
    qty_3:{
        type: String,
    },
    price_3:{
        type: String,
    },
    item_4:{
        type: String,
    },
    qty_4:{
        type: String,
    },
    price_4:{
        type: String,
    },
    item_5:{
        type: String,
    },
    qty_5:{
        type: String,
    },
    price_5:{
        type: String,
    },
    item_6:{
        type: String,
    },
    qty_6:{
        type: String,
    },
    price_6:{
        type: String,
    },
    other_job_items:{
        type: String,
    },
    total_item_price:{
        type: String,
    },
    po_num:{
        type: String,
    },
    mud_district:{
        type: String,
    },
    terms:{
        type: String,
    },
    sub_total:{
        type: String,
    },
    tax:{
        type: String,
    },
    total_hours:{
        type: String,
    },
    total_due:{
        type: String,
    },
});

// // This creates our model from the above schema, using mongoose's model method
let Invoice = mongoose.model("Invoice", InvoiceSchema);

// Export the User model
module.exports = Invoice;