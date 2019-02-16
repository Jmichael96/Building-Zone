let express = require('express');
let router = express.Router();
let db = require('../models');

// creating a new invoice
router.post("/invoice", (req, res) =>{
    console.log(req.body)
    db.Invoice.create(req.body)
    .then((dbInvoice)=>{
        res.redirect("/allinvoices");
        console.log(dbInvoice);
    })
    .catch((err)=>{
        console.log(err);
    })
});
// retrieving all data and rendering it
router.get("/allinvoices", (req, res)=>{
    db.Invoice.find({})
    .then((dbInvoice)=>{
        res.render("allinvoices", {
            Invoice: dbInvoice
        })
    });
});
// deleting a single invoice
router.get("/delete-invoice/:id", function (req, res) {
    // Use the article id to find and update its saved boolean
    db.Invoice.findOneAndDelete({ "_id": req.params.id })
      .then( function(doc){
        console.log(doc);
        res.redirect("/allinvoices");
      });
  });
    // deleting all invoices
router.get("/clear-invoices", function(req, res){
    db.Daily_Log.deleteMany({})
    .then(function(doc){
      console.log(doc);
      res.redirect("/allinvoices");
      console.log('Everything is gone...');
    })
    .catch((err)=>{
        console.log("error deleting all logs" + err);
        res.render("/allinvoices");
    })
  })

  router.get("/find/:id", (req, res) => {
    db.Invoice.findOne(
        {
          // Using the id in the url
          _id: mongojs.ObjectId(req.params.id)
        },
        function(error, found) {
          // log any errors
          if (error) {
            console.log(error);
            res.send(error);
          }
          else {
            // Otherwise, send the note to the browser
            // This will fire off the success function of the ajax request
            console.log(found);
            
          }
        }
    );
});
router.post("/update-invoice/:id", function (req, res) {
    // Create a new note and pass the req.body to the entry
    console.log(req.body.noteId);
    db.Invoice.findOneAndUpdate({ "_id": req.params.id }, 
    { 
        "date": req.body.date,
        "invoice_num": req.body.invoice_num,
        "company": req.body.company,
        "company": req.body.company,
        "bill_to": req.body.bill_to,
        "job_desc": req.body.job_desc,
        "materials_used": req.body.materials_used,
        "equipment_used": req.body.equipment_used,
        "days_on_job": req.body.days_on_job,
        "item_1": req.body.item_1,
        "qty_1": req.body.qty_1,
        "price_1": req.body.price_1,
        "item_2": req.body.item_2,
        "qty_2": req.body.qty_2,
        "price_2": req.body.price_2,
        "item_3": req.body.item_3,
        "qty_3": req.body.qty_3,
        "price_3": req.body.price_3,
        "item_4": req.body.item_4,
        "qty_4": req.body.qty_4,
        "price_4": req.body.price_4,
        "item_5": req.body.item_5,
        "qty_5": req.body.qty_5,
        "price_5": req.body.price_5,
        "item_6": req.body.item_6,
        "qty_6": req.body.qty_6,
        "price_6": req.body.price_6,
        "other_job_items": req.body.other_job_items,
        "total_item_price": req.body.total_item_price,
        "po_num": req.body.po_num,
        "mud_district": req.body.mud_district,
        "terms": req.body.terms,
        "sub_total": req.body.sub_total,
        "tax": req.body.tax,
        "total_hours": req.body.total_hours,
        "total_due": req.body.total_due,
    })
      .then(function (doc) {
        console.log(req.params.id);
        console.log(doc);
        res.redirect("/allinvoices")
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
module.exports = router;