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

module.exports = router;