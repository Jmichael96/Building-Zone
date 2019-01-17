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
// router.get("/all", (req, res) => {
//     db.Daily_Log.find({}, function(error, found) {
//         // Log any errors
//         if (error) {
//           console.log(error);
//         }
//         else {
//           // Otherwise, send json of the notes back to user
//           // This will fire off the success function of the ajax request
//           res.json(found);
//         }
//       });
// })
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

// router.get("/find/:id", (req, res) => {
//     db.Daily_Log.findOne(
//         {
//           // Using the id in the url
//           _id: mongojs.ObjectId(req.params.id)
//         },
//         function(error, found) {
//           // log any errors
//           if (error) {
//             console.log(error);
//             res.send(error);
//           }
//           else {
//             // Otherwise, send the note to the browser
//             // This will fire off the success function of the ajax request
//             console.log(found);
            
//           }
//         }
//     );
// });


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
router.get('/logs/edit/:id', function (req, res, next) {
    //store the id from the url in a variable
    var id = req.params.id;

    //use the product model to look up the product with this id    
    db.Daily_Log.findById(id, function (err, product) {
        if (err) {
            res.send('Daily_Log ' + id + ' not found');
        }
        else {
            res.redirect("/alllogs");
        }
    });
});

// POST /products/edit/:id - update selected product */
router.post('/logs/edit/:id', function (req, res, next) {
    var id = req.body.id;

    var daily_log = {
        date: req.body.date,
        job_title: req.body.job_title,
        company: req.body.company,
        job_desc: req.body.job_desc,
        hours: req.body.hours,
        employees: req.body.employees,
    };

    db.Daily_Log.update({ _id: id}, product, function(err) {
        if (err) {
            res.send('Daily Log ' + req.body.id + ' not updated. Error: ' + err);
        }
        else {
            res.statusCode = 302;
            res.setHeader('Location', 'http://' + req.headers['host'] + '/alllogs');
            res.end();
        }
    });
});

module.exports = router;