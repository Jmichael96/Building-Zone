let express = require('express');
let router = express.Router();
let db = ("../models");
router.post("/document", (req, res) =>{
    console.log(req.body);
    db.Document.create(req.body)
    .then((dbDocument) =>{
        res.redirect("/alldocuments");
        console.log(dbDocument);
    })
    .catch((err) =>{
        console.log(err);
    })
});

router.get("/documents", (req, res) =>{
    db.Document.find({})
    .then((dbDocument) =>{
        res.json(dbDocument);
    });
});
module.exports = router;