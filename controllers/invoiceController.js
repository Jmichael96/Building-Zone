let express = require('express');
let router = express.Router();
let db = require('../models');

router.post("/invoice", (req, res) =>{
    console.log(req.body)
    db.Invoice.create(req.body)
    .then((dbInvoice)=>{
        res.redirect("/invoice");
        console.log(dbInvoice);
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.get("/invoices", (req, res)=>{
    db.Invoice.find({})
    .then(function(dbInvoice){
        res.json(dbInvoice);
    })
    .catch((err)=>{
        console.log(err);
    })
});

module.exports = router;