let express = require('express');
let router = express.Router();
let db = require('../models');

// creating a Valve survey
router.post("/valve", (req, res) =>{
    console.log(req.body)
    db.Valve.create(req.body)
    .then((dbValve)=>{
        res.redirect("/allvalves");
        console.log(dbValve);
    })
    .catch((err)=>{
        console.log(err);
    })
});
router.get("/valves", (req,res)=>{
    db.Valve.find().pretty({})
    .then((dbValve) => {
        res.json(dbValve);
    })
});

router.get("/allvalves", (req, res)=>{
    db.Valve.find().sort({"_id":-1})
    .then((dbValve) =>{
        res.render("allvalves", {
            Valve: dbValve
        })
    })
});
// deleting a single log
router.get("/delete-valve/:id", function (req, res) {
    // Use the article id to find and update its saved boolean
    db.Valve.findOneAndDelete({ "_id": req.params.id })
        .then(function (doc) {
            console.log(doc);
            res.redirect("/allvalves");
        });
});
// deleting all dailylogs
router.get("/clear-valves", function (req, res) {
    db.Valve.deleteMany({})
        .then(function (doc) {
            console.log(doc);
            res.redirect("/allvalves");
            console.log('Everything is gone...');
        })
        .catch((err) => {
            console.log("error deleting all logs" + err);
            res.render("/allvalves");
        })
})


router.get("/find/:id", (req, res) => {
    db.Valve.findOne(
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
router.post("/update-valve/:id", function (req, res) {
    // Create a new note and pass the req.body to the entry
    console.log(req.body.noteId);
    db.Valve.findOneAndUpdate({ "_id": req.params.id }, 
    { 
        "date": req.body.date,
        "city": req.body.city,
        "company": req.body.company,
        "job_desc": req.body.job_desc,
        "valve_desc": req.body.valve_desc,
        "valve_desc2": req.body.valve_desc2,
        "valve_desc3": req.body.valve_desc3,
    })
      .then(function (doc) {
        console.log(req.params.id);
        console.log(doc);
        res.redirect("/allvalves")
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

module.exports = router;