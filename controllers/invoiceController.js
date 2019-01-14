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
module.exports = router;