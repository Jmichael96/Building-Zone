let express = require('express');
let router = express.Router();
let db = require('../models');

// creating a log and sending it to mongo
router.post("/log", (req, res) =>{
    db.Daily_Log.create(req.body)
    .then((dbDaily_Log)=>{
        res.redirect("/home")
        console.log(dbDaily_Log);
    })
    .catch((err)=>{
        console.log(err);
    })
});
// finding and sorting all logs to render to all logs
router.get("/alllogs", (req, res)=>{
    db.Daily_Log.find().sort({ _id:-1 })
    .then(function(dbDaily_Log){
        res.render("allLogs", {
            Daily_Log: dbDaily_Log
        });
    })
    .catch((err)=>{
        console.log("error loading alllogs page "+  err);
    })
})

// deleting a single log
router.get("/delete-log/:id", function (req, res) {
    // Use the article id to find and update its saved boolean
    db.Daily_Log.findOneAndDelete({ "_id": req.params.id })
      .then( function(doc){
        console.log(doc);
        res.redirect("/alllogs");
      });
  });
  // deleting all dailylogs
router.get("/clear-logs", function(req, res){
    db.Daily_Log.deleteMany({})
    .then(function(doc){
      console.log(doc);
      res.redirect("/alllogs");
      console.log('Everything is gone...');
    })
    .catch((err)=>{
        console.log("error deleting all logs" + err);
        res.render("/alllogs");
    })
  })
module.exports = router;