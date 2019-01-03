let express = require('express');
let router = express.Router();
let db = require('../models');


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

router.get("/alllogs", (req, res)=>{
    db.Daily_Log.find().sort({ _id:-1 })
    .then(function(dbDaily_Log){
        res.render("allLogs", {
            Daily_Log: dbDaily_Log
        });
    })
})

module.exports = router;