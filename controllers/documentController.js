let express = require('express');
let router = express.Router();
let db = require("../models");

router.post("/document", (req, res) => {
    console.log(req.body);
    db.Document.create(req.body)
        .then((dbDocument) => {
            res.redirect("/home");
            console.log(dbDocument);
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get("/documents", (req, res) => {
    db.Document.find({})
        .then(function (dbDocument) {
            res.json(dbDocument);
        });
});

router.get("/alldocuments", (req, res) => {
    db.Document.find().sort({ _id: -1 })
        .then((dbDocument) => {
            res.render("allDocuments", {
                Document: dbDocument
            });
        });
});


router.get("/find/:id", (req, res) => {
    db.Document.findOne(
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
router.post("/update-document/:id", function (req, res) {
    // Create a new note and pass the req.body to the entry
    console.log(req.body.noteId);
    db.Document.findOneAndUpdate({ "_id": req.params.id }, 
    { 
        "date": req.body.date,
        "name": req.body.name,
        "company": req.body.company,
        "job_desc": req.body.job_desc,
        "log1": req.body.log1,
        "log2": req.body.log2,
        "log3": req.body.log3,
    })
      .then(function (doc) {
        console.log(req.params.id);
        console.log(doc);
        res.redirect("/alldocuments")
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
module.exports = router;