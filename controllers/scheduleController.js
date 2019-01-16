let express = require('express');
let router = express.Router();
let db = require('../models');

// creating a schedule
router.post("/schedule", (req, res) =>{
    console.log(req.body)
    db.Schedule.create(req.body)
    .then((dbSchedule)=>{
        res.redirect("/allschedules");
        console.log(dbSchedule);
    })
    .catch((err)=>{
        console.log(err);
    })
});
router.get("/schedules", (req,res)=>{
    db.Schedule.find({})
    .then((dbSchedule) =>{
        res.json(dbSchedule);
    })
});
// getting all data and rendering it to the page
router.get("/allschedules", (req, res)=>{
    db.Schedule.find().sort({ _id:-1})
    .then(function(dbSchedule){
        res.render("allschedules", {
            Schedule: dbSchedule
        })
    })
});
// deleting a single schedule
router.get("/delete-schedule/:id", function (req, res) {
    // Use the article id to find and update its saved boolean
    db.Schedule.findOneAndDelete({ "_id": req.params.id })
      .then( function(doc){
        console.log(doc);
        res.redirect("/allschedules");
      });
  });
// deleting all shcedules
router.get("/clear-schedules", function(req, res){
    db.Daily_Log.deleteMany({})
    .then(function(doc){
      console.log(doc);
      res.redirect("/allschedules");
      console.log('Everything is gone...');
    })
    .catch((err)=>{
        console.log("error deleting all logs" + err);
        res.render("/scheduler");
    })
  })



module.exports = router;