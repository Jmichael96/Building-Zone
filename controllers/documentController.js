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

module.exports = router;