let express = require('express');
let router = express.Router();
let db = require('../models');

router.post("/list", (req, res) =>{
    console.log(req.body)
    db.List.create(req.body)
    .then((dbList)=>{
        res.redirect("/home");
        console.log(dbList);
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.get("/lists", (req, res)=>{
    db.List.find({})
    .then(function(dbList){
        res.json(dbList);
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.get("/alllists", (req, res)=>{
    db.List.find().sort({ _id:-1 })
    .then(function(dbList){
        res.render("allLists", {
            List: dbList
        });
    })
})
module.exports = router;