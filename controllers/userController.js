const express = require('express');
const router = express.Router();
const db = require("../models");
let passport = require("../config/passport");


router.get("/home", function (req, res) {
    console.log(req.user);
    if (!req.user) {
            res.render("index");
        }
        else{
            if(req.user)
            db.User.findOne({
                where: {
                    id: req.user
                },
                raw: true
            }).then(function (dbUser) {
                //res.json(dbPost);
                //console.log(dbPost);
                res.render("index", {
                    loginStatus: true,
                    data: dbUser
                });
            });
        }
        
        
});


router.post('/register', (req, res) => {
  // TODO: Convert so that it is saving data coming from the view
  const dataCheck = req.body.username && req.body.password && req.body.email;

  if (dataCheck) {
      const userData = {
          username: req.body.username,
          password: req.body.password,
          email: req.body.email
      }
      console.log(dataCheck);
  
      User.create(userData, (err, user) => {
          if (err) throw err;
          else {
            console.log(user + " user created hooray");
              res.redirect('/login');
          }
      });
  } else {
      res.send('Missing parameteres');
  }
});
router.get("/users", (req, res) => {
  User.find().sort({ _id:-1 })
    .then(function (dbUser) {
      res.json(dbUser);
    })
});
module.exports = router;