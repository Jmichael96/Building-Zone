let express = require('express');
let router = express.Router();
let db = require('../models');

// creating a new ticket
router.post("/ticket", (req, res) =>{
    console.log(req.body)
    db.Ticket.create(req.body)
    .then((dbTicket)=>{
        res.redirect("/alltickets");
        console.log(dbTicket);
    })
    .catch((err)=>{
        console.log(err);
    })
});

// getting all data and rendering it to the page
router.get("/alltickets", (req, res)=>{
    db.Ticket.find().sort({ _id:-1})
    .then(function(dbTicket){
        res.render("alltickets", {
            Ticket: dbTicket
        })
    })
});
// deleting a single ticket
router.get("/delete-ticket/:id", function (req, res) {
    // Use the article id to find and update its saved boolean
    db.Ticket.findOneAndDelete({ "_id": req.params.id })
      .then( function(doc){
        console.log(doc);
        res.redirect("/alltickets");
      });
  });
// deleting all tickets
router.get("/clear-tickets", function(req, res){
    db.Ticket.deleteMany({})
    .then(function(doc){
      console.log(doc);
      res.redirect("/alltickets");
      console.log('Everything is gone...');
    })
    .catch((err)=>{
        console.log("error deleting all logs" + err);
        res.render("/tickets");
    })
  })

  router.get("/find/:id", (req, res) => {
    db.Ticket.findOne(
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
router.post("/update-ticket/:id", function (req, res) {
    // Create a new note and pass the req.body to the entry
    console.log(req.body.noteId);
    db.Ticket.findOneAndUpdate({ "_id": req.params.id }, 
    { 
        "date": req.body.date,
        "company": req.body.company,
        "job_title": req.body.job_title,
        "address": req.body.address,
        "job_desc": req.body.job_desc,
        "materials_used": req.body.materials_used,
        "equipment_used": req.body.equipment_used,
        "equipment_rented": req.body.equipment_rented,
        "hours": req.body.hours,
        "employees": req.body.employees,
        "follow_job_desc": req.body.follow_job_desc,
        "follow_materials": req.body.follow_materials,
        "follow_equipment_needed": req.body.follow_equipment_needed,
        "follow_hours_worked": req.body.follow_hours_worked,
        "total_hours": req.body.total_hours,
        "invoice_number": req.body.invoice_number,
    })
      .then(function (doc) {
        console.log(req.params.id);
        console.log(doc);
        res.redirect("/alltickets")
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
module.exports = router;