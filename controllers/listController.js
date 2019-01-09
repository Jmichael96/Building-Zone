let express = require('express');
let router = express.Router();
let db = require('../models');
// creating a new list 
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
// gathering all data and rendering it 
router.get("/alllists", (req, res)=>{
    db.List.find().sort({ _id:-1 })
    .then(function(dbList){
        res.render("allLists", {
            List: dbList
        });
    })
})
// delete a single list
router.get("/delete-list/:id", function (req, res) {
    // Use the article id to find and update its saved boolean
    db.List.findOneAndDelete({ "_id": req.params.id })
      .then( function(doc){
        console.log(doc);
        res.redirect("/alllists");
      });
  });

  // deleting all lists
  router.get("/clear-lists", function(req, res){
    db.Daily_Log.deleteMany({})
    .then(function(doc){
      console.log(doc);
      res.redirect("/alllists");
      console.log('Everything is gone...');
    })
    .catch((err)=>{
        console.log("error deleting all logs" + err);
        res.render("/alllists");
    })
  })
module.exports = router;