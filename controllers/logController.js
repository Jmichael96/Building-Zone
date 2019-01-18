let express = require('express');
let router = express.Router();
let db = require('../models');
var mongojs = require("mongojs");

// creating a log and sending it to mongo
router.post("/log", (req, res) => {
    db.Daily_Log.create(req.body)
        .then((dbDaily_Log) => {
            res.redirect("/alllogs")
            console.log(dbDaily_Log);
        })
        .catch((err) => {
            console.log(err);
        })
});
// finding and sorting all logs to render to all logs
router.get("/alllogs", (req, res) => {
    db.Daily_Log.find().sort({ _id: -1 })
        .then(function (dbDaily_Log) {
            res.render("allLogs", {
                Daily_Log: dbDaily_Log
            });
        })
        .catch((err) => {
            console.log("error loading alllogs page " + err);
        })
})

// deleting a single log
router.get("/delete-log/:id", function (req, res) {
    // Use the article id to find and update its saved boolean
    db.Daily_Log.findOneAndDelete({ "_id": req.params.id })
        .then(function (doc) {
            console.log(doc);
            res.redirect("/alllogs");
        });
});
// deleting all dailylogs
router.get("/clear-logs", function (req, res) {
    db.Daily_Log.deleteMany({})
        .then(function (doc) {
            console.log(doc);
            res.redirect("/alllogs");
            console.log('Everything is gone...');
        })
        .catch((err) => {
            console.log("error deleting all logs" + err);
            res.render("/alllogs");
        })
})

router.get("/find/:id", (req, res) => {
    db.Daily_Log.findOne(
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
router.post("/update_log/:id", function (req, res) {
    // Create a new note and pass the req.body to the entry
    console.log(req.body.noteId);
    db.Daily_Log.findOneAndUpdate({ "_id": req.params.id }, 
    { 
        "date": req.body.date,
        "job_title": req.body.job_title,
        "company": req.body.company,
        "job_desc": req.body.job_desc,
        "hours": req.body.hours,
        "employees": req.body.employees
    })
      .then(function (doc) {
        console.log(req.params.id);
        console.log(doc);
        res.redirect("/alllogs")
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

// router.post('/update-log/:id', (req, res) => {
//     db.Daily_Log.update({
//         _id: mongojs.ObjectId(req.params.id)
//       },
//       {
//         $set: {
//             date: req.body.date,
//             job_title: req.body.job_title,
//             company: req.body.company,
//             job_desc: req.body.job_desc,
//             hours: req.body.hours,
//             employees: req.body.employees,
//         }
//     }, function (err, result) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Post Updated successfully");
//             res.redirect("/alllogs");
//         }
//     });
// });

module.exports = router;