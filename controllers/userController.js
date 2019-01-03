
// let passport = require("../config/passport");
let express = require('express');
let router = express.Router();
let db = require('../models');
// GET route for reading data


// Route to post our form submission to mongoDB via mongoose
router.post("/submit", function(req, res) {
    // Create a new user using req.body
    db.User.create(req.body)
      .then(function(dbUser) {
        console.log(dbUser)
        // If saved successfully, send the the new User document to the client
        res.redirect("/login");
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });
router.get("/users", function(req, res){
  db.User.find({})
  .then((dbUser)=>{
    res.json(dbUser);
  })
  .catch((err)=>{
    console.log(err);
  })
});

module.exports = router;
