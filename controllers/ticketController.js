let express = require('express');
let router = express.Router();
let db = require('../models');

router.post("/ticket", (req, res) =>{
    console.log(req.body)
    db.Ticket.create(req.body)
    .then((dbTicket)=>{
        res.redirect("/home");
        console.log(dbTicket);
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.get("/tickets", (req, res)=>{
    db.Ticket.find({})
    .then(function(dbTicket){
        res.json(dbTicket);
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.get("/alltickets", (req, res)=>{
    db.Ticket.find().sort({ _id:-1})
    .then(function(dbTicket){
        res.render("alltickets", {
            Ticket: dbTicket
        })
    })
});

module.exports = router;